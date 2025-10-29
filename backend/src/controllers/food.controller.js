const foodModel = require("../models/food");
const storageService=require("../services/storage");
const {v4:uuid}=require("uuid");

async function createFood(req,res) {
    const fileUpload=await storageService.uploadFile(req.file.buffer,uuid());
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUpload.url,
        foodPartner:req.foodPartner._id,
    })
     res.status(201).json({
        message:"food created successfully",
        food:foodItem
     })

}

async function getFood(req,res) {
    const foodItems=await foodModel.find({});
    res.status(401).json({
        message:"food items fetched sucessfully",foodItems
    })
}


module.exports={createFood,getFood};