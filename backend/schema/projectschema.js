const mongoose= require("mongoose")

const ProjectSchema= new mongoose.Schema({
    addedby:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    clientName:{
        type:String,
        required:true
    },
    projectName:{
        type:String,
        required:true
    },
    applicationType:{
        type:String,
        required:true
    },
    testStartDate:{
        type:String,
        required:true
    },
    testEndDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    time: { type: Date, default: Date.now },
    retestApplied: {
        type:Boolean, default: false
    },
    retestAppliedExpires:{
        type: Date, default: null
    }
})


const projectDetails= new mongoose.model("Project", ProjectSchema)
module.exports= projectDetails
