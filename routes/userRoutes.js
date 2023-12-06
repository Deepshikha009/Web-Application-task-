const express=require('express')
const router=express.Router()
const {getAllUser,postUser,putSingleUser,deleteUser,getSingleUser}=require('../controllers/userController')


router.get('/getusers',getAllUser);
router.get('/getsingle/:id',getSingleUser);
router.post('/postuser',postUser)
router.put('/putsingle',putSingleUser)
router.delete('/deletesingle',deleteUser)
module.exports=router