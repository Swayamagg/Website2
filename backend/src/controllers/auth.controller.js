const userModel=require("../models/user");
const bcrypt=require('bcryptjs');


async function registeruser(req,res) {
    const {fullName,email,password}=req.body;
    const userExist=await userModel.findOne({email});

    if(userExist){
        return res.status(400).json({
            message:"User already exists!"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);
}