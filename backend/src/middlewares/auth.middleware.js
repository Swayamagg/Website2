const partnerModel=require("../models/foodPartner.js");
const userModel=require("../models/user.js");
const jwt=require('jsonwebtoken');


async function authFoodPartner(req,res,next) {
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Please login first",
        })
    }

    try{
          const decodedObj=jwt.verify(token,process.env.JWT_SEC);
          const foodPartner=await partnerModel.findById(decodedObj.id);
          req.foodPartner=foodPartner;
          next();

    }catch(err){
        return res.status(401).json({
            message:"Invalid token",
        })
    }
    
}

async function userMiddleware(req,res,next) {
    const token=req.cookies.token;
    if(!token){
        return res.json(401).json({
          message:"Please login first",
        })
    }
    try{
        const decodedObj=jwt.verify(token,process.env.JWT_SEC);
        const user=await userModel.findById(decodedObj.id);
        req.user=user;
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid token",
        })
    }
    
}
module.exports={authFoodPartner,userMiddleware};
