const partnerModel=require("../models/foodPartner.js");
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
module.exports={authFoodPartner};
