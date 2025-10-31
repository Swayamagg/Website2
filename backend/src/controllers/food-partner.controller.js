const partnerModel=require("../models/foodPartner");
const foodModel=require("../models/food");

async function foodPartnerByID(req,res) {

    const foodPartnerId=req.params.id;
    console.log(foodPartnerId);
    const foodPartner=await partnerModel.findById(foodPartnerId);
    console.log(foodPartner);
    const foodItemByFoodPartner=await foodModel.find({foodPartner:foodPartnerId})

    if(!foodPartner){
        return res.status(404).json({message:"food partner not found"});
    }

    res.status(200).json({
        message:"food partner retrieved successfully",
        foodPartner:{
            ...foodPartner.toObject(),
            foodItems:foodItemByFoodPartner,
        }
    })
}
module.exports={foodPartnerByID};