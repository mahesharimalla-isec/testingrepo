const express = require("express")
const messageRouter= express.Router()
const User= require("../schema/userschema")
const MessageDetails= require('../schema/messageschema')
const moment= require('moment-timezone');
const rateLimit = require("express-rate-limit");
const {authenticate, authorize, clientAuthorize} = require("../middleware/authenticate");

const messageLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60,
    message: {
      message: 'Too many requests, please try again later.'
    }
  });

messageRouter.get('/fetchclientuser', authenticate, authorize, async(req, res)=>{
    try {
        const clientUser= await User.find({})
        const filteredUsers = clientUser.filter(user => !user.email.includes('@isecurion.com'));
        const clientEmail= filteredUsers.map(data=>({ email:data.email, name:data.name}))
        res.status(200).json(clientEmail)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

messageRouter.post('/sendusermessage', messageLimiter, authenticate, authorize,  async(req, res)=>{
    const {message,  client}= req.body;
    const io = req.app.get('io');
    try {
        const user= await User.findOne({email:req.user.email})
        const storeMessage= new MessageDetails({
            from: req.user.email,
            message,
            to:client,
            user: user.name
        })
        const savedMessages= await storeMessage.save()
        const newmessage= await MessageDetails.find({$or: [{ to: client }, { from: client }]})
        io.emit('usermessage', newmessage);
        io.emit('clientmessage', newmessage);

        res.status(200).json({message: "Message Sent Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

messageRouter.get('/fetchusermessages',authenticate, authorize, async (req, res) => {
    const { client } = req.query;
    try {
        const messageData = await MessageDetails.find({
            $or: [{ to: client }, { from: client }]
        });
        if (messageData.length === 0) {
            return res.status(404).json({ message: "No messages found" });
        }
        const messageDataWithIST = messageData.map(message => {
            const messageObject = message.toObject();
            messageObject.time = moment(message.time).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
            return messageObject;
        });

        res.status(200).json(messageDataWithIST);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Client Side

messageRouter.post('/sendclientmessage', messageLimiter, authenticate, clientAuthorize, async(req, res)=>{
    const {message}= req.body;
    const io = req.app.get('io');
    try {
        const storeMessage= new MessageDetails({
            from: req.user.email,
            message,
            to:"Isecurion",
        })
        const savedMessages= await storeMessage.save()
        const newClientmessage= await MessageDetails.find({ to: "Isecurion"})
        io.emit('clientmessage', newClientmessage);
        io.emit('usermessage', newClientmessage);
        res.status(200).json({message: "Message Sent Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

messageRouter.get('/fetchclientmessages', authenticate, clientAuthorize, async (req, res) => {
    try {
      const messageData = await MessageDetails.find({
        $or: [{ to: req.user.email }, { from: req.user.email }]
      });
      if (messageData.length === 0) {
        return res.status(404).json({ message: "No messages found" });
      }
      const messageDataWithIST = messageData.map(message => {
        const messageObject = message.toObject();
        messageObject.time = moment(message.time).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
        return messageObject;
    });
    res.status(200).json(messageDataWithIST);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });



module.exports= messageRouter
