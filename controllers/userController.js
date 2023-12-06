const userModel = require('../models/userModel')
exports.getAllUser = async (req, res) => {
    try {
const allUser=await userModel.find({})
  return res.status(200).json({
    userCount:allUser.length,
    message:"Users List",
    success:true,
    allUser
})
    }
 catch (error) {
return res.status(500).send({
    message:"can't find Users",
    success:false,
    error:error
 })   
}
}

exports.getSingleUser = async (req, res) => {  
    try {
        const myId=req.params.id
const singleUser=await userModel.findById({myId})
return res.status(201).json({
    message:"User found!!",
    success:true,
    singleUser
})
    } catch (error) {
        console.log(error);
        return res.status(500).send({
           message:"Error in finding user",
           success:false,
        })  
    }
}
exports.postUser = async (req, res) => {
    try {
        const { firstName ,lastName,email ,gender ,avatar,domain,available,team}=req.body;

        if(!firstName || !lastName || !email || !gender || !avatar || !domain || !available || !team){
      res.status(200).json({
          success:false,
          message:"Enter all fields",
      })}
    const newUser=await userModel({firstName ,lastName,email ,gender ,avatar,domain ,available,team})
      newUser.save();
      return res.status(201).json({
        message:"User created succesfully",
        success:true,
        newUser
    })
        } catch (error) {
            console.log(error);
         return res.status(500).send({
            message:"Error in register callback",
            success:false,
         })   
        }
    }
exports.putSingleUser = async (req, res) => {
    try {
        // Extract data from the request body
        const { id, lastName, firstName, email, gender, available, domain, avatar } = req.body;

        // Validate the data (you might want to add more robust validation)
        if (!id || !lastName || !firstName || !email || !gender || !available || !domain || !avatar) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Update the user in the database
        const updatedUser = await userModel.findOneAndUpdate(
            { id: req.params.userId }, // Assuming userId is part of the route params
            { $set: { id, lastName, firstName, email, gender, available, domain, avatar } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send the updated user as a response
        res.status(200).json(updatedUser);
    } catch (error) {
        // Handle errors (you might want to log them or send a specific error response)
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.deleteUser = async (req, res) => {
    try {
   const toDelete=req.params.id
   if(!toDelete){
    res.json({
        message:"nothing to delete",
        success:false
    })
   }
   const userDelete=await user.findByIdAndDelete({toDelete})
   if (!userDelete) {
    return res.status(404).json({ error: 'User not found' });
}
// Send the deleted user as a response
res.status(200).json(userDelete);
    } catch (error) {
        console.log(error);
        return res.status(500).send({
           message:"Error occured",
           success:false,
    })
}
}


