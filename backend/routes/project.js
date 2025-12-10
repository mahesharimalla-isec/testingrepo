const express = require('express');
const projectRouter = express.Router();
const projectDetails = require('../schema/projectschema');
const rateLimit = require("express-rate-limit");
const {authenticate, authorize, clientAuthorize} = require("../middleware/authenticate");

const hasSpecialChars = (str) => /[^a-zA-Z0-9 ]/.test(str);

const projectLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: {
    message: 'Too many requests, please try again later.'
  }
});

projectRouter.post('/addproject',  authenticate, authorize, projectLimiter, async (req, res) => {
  const { clientName, projectName, applicationType, testStartDate, testEndDate, status, email} = req.body;
  console.log('User:', req.user);
  const io = req.app.get('io');

  if (hasSpecialChars(clientName) || hasSpecialChars(projectName) || hasSpecialChars(applicationType) || hasSpecialChars(status)) {
    return res.status(400).json({ message:"Fields must not contain special characters" });
  }
  try {
    const projectData = new projectDetails({
      addedby: req.user.email,
      userId: req.user.user._id,
      clientName,
      projectName,
      applicationType,
      testStartDate,
      testEndDate,
      status,
      email,
    });
    const savedProject = await projectData.save();
    const fetchProjects = await projectDetails.find({});
    const projectStatuses = fetchProjects.map(project => project.status);

    io.emit('projectCountUpdate', projectStatuses);
    io.emit('projectListUpdate', fetchProjects);
    io.emit('newProject', { email });

    res.status(200).json(savedProject);
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).send({ message: 'Error adding project', error: error.message });
  }
});

projectRouter.get('/projectcount', authenticate, authorize, async (req, res) => {
  console.log('User:', req.user);
  try {
    if(!req.user){
      res.clearCookie('token', { path: '/' })
    }
    const fetchProjects = await projectDetails.find({});
    const projectStatuses = fetchProjects.map(project => project.status);

    res.status(200).json(projectStatuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

projectRouter.get('/fetchprojectlist', authenticate, authorize, async (req, res) => {

  try {
    const projectList = await projectDetails.find({});
    res.status(200).json(projectList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


projectRouter.get('/fetchprojectdetails', authenticate, authorize, async (req, res) => {
  const { projectId } = req.query;

  try {
    const projectDetail = await projectDetails.findById(projectId);
    res.status(200).json(projectDetail);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

projectRouter.post('/updateprojectstatus', authenticate, authorize, async (req, res) => {
  const { projectId, status } = req.body;
  const io = req.app.get('io');

  if (hasSpecialChars(status)) {
    return res.status(400).json({ message: 'Status should not contain special characters' });
  }
  try {
    const project = await projectDetails.findOne({ _id: projectId });
    if (!project) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    project.status = status;
    await project.save();

    const fetchProjects = await projectDetails.find({});
    const projectStatuses = fetchProjects.map(project => project.status);

    res.status(200).json(project);
    io.emit('projectstatus', project);
    io.emit('projectListUpdate', fetchProjects);
    io.emit('projectCountUpdate', projectStatuses);
    io.emit('newProject', { email: project.email });
    io.emit('enable_retest_status_column', project)

  } catch (error) {
    console.error('Failed to update project status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

projectRouter.get('/fetchprojectname',authenticate, authorize, async (req, res) => {
  const { projectId } = req.query

  const project = await projectDetails.findById(projectId)
  const projectName = project.projectName;
  console.log(projectName)
  res.status(200).json(projectName)
})

projectRouter.get('/fetchprojectstatus',authenticate, authorize, async (req, res) => {
  const { projectId } = req.query

  try {
    const project = await projectDetails.findById(projectId)
    const status = project.status
    return res.status(200).json(status)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})


// client side

projectRouter.get('/clientprojectcount', authenticate, clientAuthorize, async (req, res) => {

  try {
    const fetchProjects = await projectDetails.find({ email: req.user.email });
    const projectCount = fetchProjects.map(project => project.status);
    return res.status(200).json(projectCount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

projectRouter.get('/fetchclientprojectlist', authenticate, clientAuthorize, async (req, res) => {

  try {
    const fetchProjects = await projectDetails.find({ email:req.user.email });
    return res.status(200).json(fetchProjects);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

projectRouter.get('/fetchclientprojectdata', authenticate, clientAuthorize, async (req, res) => {
  const { projectName } = req.query;

  try {
    const projectData = await projectDetails.findOne({ projectName });
    if (!projectData) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (projectData.email.toLowerCase() === req.user.email.toLowerCase()) {
      return res.status(200).json(projectData);
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


projectRouter.get('/fetchclientreteststatus', authenticate, clientAuthorize, async (req, res) => {
  const { projectName } = req.query

  try {
    const proDetails = await projectDetails.findOne({ projectName });
    if (!proDetails) {
      return res.status(404).send('Project not found');
    }

    if (proDetails.email.toLowerCase() === req.user.email.toLowerCase()) {
      const status= proDetails.status
      res.status(200).json(status)
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
})


module.exports = projectRouter;
