const mongoose=require('mongoose')


const Db=()=>{
mongoose.connect("mongodb+srv://user-1:user@cluster0.h8uy1cv.mongodb.net/")
console.log("Db connected");


}
module.exports=Db