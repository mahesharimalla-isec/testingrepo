const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/users');
const projectRouter = require('./routes/project');
const fileRouter = require('./routes/file');
const vulnerabilityRouter = require('./routes/vulnerability')
const path = require('path');
const messageRouter = require('./routes/messages')


const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://18.207.195.77:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});

app.use(cors({
    origin: 'http://18.207.195.77:3000',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

require('dotenv').config();

app.use(userRouter);
app.use(projectRouter);
app.use(fileRouter)
app.use(vulnerabilityRouter)
app.use(messageRouter)


app.set('io', io);
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/BugTrack', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (error) {
        console.log(error);
    }
}

main();

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


module.exports = io;
