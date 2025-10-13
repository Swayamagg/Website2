const mongoose=require("mongoose");

function connectDb(){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log("mongodb connection error",err);
    })
}
module.exports=connectDb;