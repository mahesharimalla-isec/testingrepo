const mongoose= require("mongoose")
const validator=require("validator")

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid email")
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    loginAttempts: { type: Number, required: true, default: 0 },
    blockExpires: { type: Date, default: null },
    isBlocked: { type: Boolean, default: false },
    token: {
        type: String,
        default:null
    },
    resetPasswordToken:{
        type: String, default: null
    },
    resetPasswordExpire:{
        type: Date,  default: null
    },
    emailSent:{
        type:Boolean, default: false
    },
    emailSentExpires: { type: Date, default: null },

})

const User= new mongoose.model("RegisterUsers", UserSchema)

module.exports=User
