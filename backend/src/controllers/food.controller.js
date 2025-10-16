const foodModel = require("../models/food");
const storageService=require("../services/storage");
const {v4:uuid}=require("uuid");

async function createFood(req,res) {
    const fileUpload=await storageService.uploadFile(req.file.buffer(),uuid());
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUpload.url,
        foodPartner:req.foodPartner._id,
    })
     res.staus(201).json({
        message:"food created successfully",
        food:foodItem
     })

}
module.exports={createFood};