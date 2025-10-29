const userModel=require("../models/user");
const partnerModel=require("../models/foodPartner");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


async function registerUser(req,res) {
    const {fullName,email,password}=req.body;
    const userExist=await userModel.findOne({email});

    if(userExist){
        return res.status(400).json({
            message:"User already exists!"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);

    const user=await userModel.create({
        fullName,
        email,
        password:hashedPassword
    });
    
    const token=jwt.sign({
        user:user._id,
    },process.env.JWT_SEC)
    res.cookie("token",token);

    res.status(201).json({
        message:"User registered successfully",
        user:{
        id:user._id,
        fullName:user.fullName,
        email:user.email,
        }
    })

}

async function loginUser(req,res) {
    const {email,password}=req.body;
    const user=await userModel.findOne({email});

    if(!user){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const passwordValid=await bcrypt.compare(password,user.password);
    if(!passwordValid){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SEC)
    res.cookie("token",token);

    res.status(200).json({
        message:"User logged in successfully",
        user:{
            id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })
    
}
 function logoutUser(req,res) {
    res.clearCookie("token");
    res.status(200).json({
        message:"User logout successfully"
    })
    
}


async function  partnerRegister(req,res) {
    const {name,email,password,contactName,phone,address}=req.body;
    const userExist=await partnerModel.findOne({email});

    if(userExist){
        return res.status(400).json({
            message:"User already exists!"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newPartner=await partnerModel.create({
        name,
        email,
        password:hashedPassword,
        contactName,
        phone,
        address
    });

    const token=jwt.sign({
       id:newPartner._id,
    },process.env.JWT_SEC);
    res.cookie("token",token);

    res.status(201).json({
        message:"Partner register successfully",
        newPartner:{
            id:newPartner._id,
            name:newPartner.name,
            email:newPartner.email,
            contactName:newPartner.contactName,
            phone:newPartner.phone,
            address:newPartner.address,
        }
    })
    
}

async function partnerLogin(req,res) {
    const {email,password}=req.body;
    const partner=await partnerModel.findOne({email});
    if(!partner){
            res.status(400).json({
                message:"Invalid email or password"
            })
    }
    const checkPassword=await bcrypt.compare(password,partner.password);
    if(!checkPassword){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const token=jwt.sign({
        id:partner._id
    },process.env.JWT_SEC);
    res.cookie("token",token);
    res.status(201).json({
        message:"Partner logged successfully",
        partner:{
            id:partner._id,
            email:partner.email,
            name:partner.name
        }
    })
    
}

function partnerLogout(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"Partner logout successfully"
    })
}

module.exports={registerUser,loginUser,logoutUser,partnerRegister,partnerLogin,partnerLogout};