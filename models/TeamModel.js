const mongoose = require('mongoose')
const teamSchema=new mongoose.Schema({

teamName:{
    type:String,
    required:true
}


})
const teamModel=mongoose.model("Team",teamSchema)
module.exports=teamModel