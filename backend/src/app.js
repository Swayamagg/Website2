const express=require("express");
const cookieParser=require("cookie-parser");
const authRoutes=require("../src/routes/auth.routes");
const foodRoutes=require("../src/routes/food.routes")
const app=express();

app.use(cookieParser());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/api/auth",authRoutes);
app.use("/api/food",foodRoutes);

module.exports=app;