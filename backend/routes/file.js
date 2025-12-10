const express = require('express');
const fileRouter = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require('path');
const projectDetails = require('../schema/projectschema');
const vulnerability = require('../schema/vulnerabilityschema');
const rateLimit = require('express-rate-limit');
const {authenticate, authorize, clientAuthorize} = require("../middleware/authenticate");

const fileRateLimit = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
    message: {
        message: 'Too many requests, please try again later'
    }
});

const tempDir = 'temp/';
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

const tempStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const documentFileFilter = (req, file, cb) => {
    const fileTypes = /pdf|xls|xlsx|csv/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = [
        'application/pdf',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv'
    ];
    const mimetype = mimeTypes.includes(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
};


const vulnerabilityFileFilter = (req, file, cb) => {
    const fileTypes = /jpg|jpeg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = ['image/jpg', 'image/png', 'image/jpeg']
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    }
};


const uploadDocument = multer({ storage: tempStorage, fileFilter: documentFileFilter });
const uploadVulnerability = multer({ storage: tempStorage, fileFilter: vulnerabilityFileFilter });


fileRouter.post('/uploaddocument', authenticate, authorize, fileRateLimit, uploadDocument.single('file'), async (req, res) => {
    const io = req.app.get('io');
    try {
        const { projectId } = req.body;
        const file = req.file;
        if (!projectId) return res.status(400).json({ message: 'File upload failed!', error: 'Project ID is required' });
        if (!file) return res.status(400).json({ message: 'File Upload Failed' });

        const project = await projectDetails.findById(projectId);
        const clientName = project.clientName;
        const tempFilePath = req.file.path;
        const uploadDir = `uploads/${clientName}/${projectId}/documents`;
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        const newFilePath = path.join(uploadDir, req.file.originalname);
        fs.rename(tempFilePath, newFilePath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'File upload failed!', error: err.message });
            }

            io.emit('documentUploaded', { projectId, fileName: req.file.originalname });
            res.status(200).json({ message: 'File uploaded successfully!', file: { path: newFilePath, originalname: req.file.originalname } });
        });
    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

fileRouter.get('/fetchdocument', authenticate, authorize, async (req, res) => {
    const { projectId } = req.query;
    if (!projectId) {
        return res.status(400).json({ message: "Bad Request" });
    }
    try {
        const project = await projectDetails.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        const clientName = project.clientName;
        const directoryPath = path.join(__dirname, `../uploads/${clientName}/${projectId}/documents`);

        if (!directoryPath) return res.status(204).json({ message: "No Documents" });
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return res.status(204).send('No Content');
            }
            res.status(200).json(files);
        });
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

fileRouter.post('/uploadvulnerability', authenticate, authorize, fileRateLimit, uploadVulnerability.array('files'), async (req, res) => {
    const io = req.app.get('io');
    try {
        const { projectId, vulnerabilityName, severity, affectedParameter, recommendation } = req.body;
        const files = req.files;

        if (!projectId) return res.status(400).json({ message: 'Project ID is required' });
        if (!files || files.length === 0) {
            return res.status(400).json({ message: 'File upload failed, no files found!' });
        }
        const project = await projectDetails.findById(projectId);
        const projectName = project.projectName
        const clientName = project.clientName;
        const vulnerabilityData = new vulnerability({
            projectId,
            vulnerabilityName,
            severity,
            affectedParameter,
            recommendation,
            addedby: req.user.email,
        });
        const savedVulnerability = await vulnerabilityData.save();
        const uploadDir = `uploads/${clientName}/${projectId}/poc/${savedVulnerability._id}`;
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        files.forEach(file => {
            const tempFilePath = file.path;
            const newFilePath = path.join(uploadDir, file.originalname);
            fs.renameSync(tempFilePath, newFilePath);
        });
        io.emit('newVulnerability', { projectName });
        res.status(200).json({ message: 'Vulnerability and files uploaded successfully!', vulnerability: savedVulnerability });
    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

fileRouter.post('/reportdownload', authenticate, authorize, async(req, res)=>{
    try {
        if(!req.user.email){
            return res.status(201).json({message: "Unauthorized"})
        }
        return res.status(200).json({message: "Download Started"})
    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


// Client Side

fileRouter.get('/getfiles', authenticate, clientAuthorize, async (req, res) => {
    const { projectName } = req.query;
    try {
        const project = await projectDetails.findOne({ projectName })
        if (!project) {
            return res.status(404).send('Project not found');
        }
        if(project.email !== req.user.email){
            return res.status(401).json({message:"Unauthorized"})
        }
        const projectId = project._id;
        const clientName = project.clientName

        const directoryPath = path.join(__dirname, `../uploads/${clientName}/${projectId}/documents`)
        if (!directoryPath) return res.status(404).json({ message: "No Documents" });
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return res.status(204).send('No Content');
            }
            res.status(200).json(files);
        });
    } catch (error) {
        console.log(error)
    }
})

fileRouter.get('/download/:filename', authenticate, clientAuthorize, async (req, res) => {
    const { projectName } = req.query;
    const fileName = req.params.filename;
    try {
        const project = await projectDetails.findOne({ projectName });
        if (!project) {
            return res.status(404).send('Project not found');
        }
        if(project.email !== req.user.email){
            return res.status(401).json({message:"Unauthorized"})
        }
        const projectId = project._id;
        const clientName = project.clientName;

        const directoryPath = path.join(__dirname, `../uploads/${clientName}/${projectId}/documents`);
        const filePath = path.join(directoryPath, fileName);
        if (!fs.existsSync(filePath)) {
            return res.status(404).send('File not found');
        }
        res.download(filePath, fileName, (err) => {
            if (err) {
                return res.status(500).send('Error downloading the file');
            }
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal server error');
    }
});

fileRouter.get('/fetchpoc', authenticate, clientAuthorize, async (req, res) => {
    const { vulnerabilityId, projectName } = req.query;

    try {
        const project = await projectDetails.findOne({ projectName });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        if(project.email !== req.user.email){
            return res.status(401).json({message:"Unauthorized"})
        }
        const projectId = project._id;
        const clientName = project.clientName;
        const directoryPath = path.join(__dirname, `../uploads/${clientName}/${projectId}/poc/${vulnerabilityId}`);

        if (!fs.existsSync(directoryPath)) {
            return res.status(404).json({ message: "No Documents" });
        }

        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return res.status(500).json({ message: 'Error reading directory' });
            }

            const fileUrls = files.map(file => ({
                fileName: file,
                url: `/uploads/${clientName}/${projectId}/poc/${vulnerabilityId}/${file}`
            }));

            res.status(200).json({ files: fileUrls, clientName, projectId });
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal server error');
    }
});




module.exports = fileRouter;
