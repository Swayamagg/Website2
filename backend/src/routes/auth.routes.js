const express=require("express");
const authController=require("../controllers/auth.controller");
const router=express.Router();

//user auth
router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);
router.get('/user/logout',authController.logoutUser);

//partner auth
router.post('/food-partner/register',authController.partnerRegister);
router.post('/food-partner/login',authController.partnerLogin);
router.get('/food-partner/logout',authController.partnerLogout);


module.exports=router;