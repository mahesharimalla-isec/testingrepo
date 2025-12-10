const mongoose= require('mongoose')

const MessagesSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    time:{ type: Date, default: Date.now },
    to:{
        type:String,
        required:true
    },
    user:{
        type:String,

    }

})

const MessageDetails= new mongoose.model("Messages", MessagesSchema)

module.exports= MessageDetails
