const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: [true, "username is required"]
    },
    firstName: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    available: [{
        type: Boolean,
        required: [true, "avaliablity is req."]
    }],
    domain: {
        type: String,
        required: [true, "domiain is required"]
    },
    avatar: {
        type: String,
        required: [true, "avatar is required"]
    },
    
    team:{
    type:mongoose.ObjectId,
    ref:"Team",

    }

}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)
module.exports = userModel