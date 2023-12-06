const mongoose=require('mongoose')
const teamModel = require('../models/TeamModel')

exports.postTeam=async(req,res)=>{
try {
    const{teamName}=req.body 
    const team=await teamModel({teamName}).save()
    res.json({
        message:"Team created",
        success:true
    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
       message:"Error occured",
       success:false, 
    })
}
}
exports.getSingleTeam=async(req,res)=>{
try {
    const id= req.params.id;
    const user = await teamModel.aggregate([
        {
          $match: {
            _id: mongoose.ObjectId("656b1d757e93a02bdbf2d988")
          }
        },
        {
          $lookup: {
            from: "users",
            localField: '_id',
            foreignField: 'team',
            as: 'teams'
          }
        }])
} catch (error) {
    console.log(error);
}
}