const express=require("express");
const mongoose=require("mongoose");
const connectDb=require("./src/db/db")
const app=express();

app.use(express.json());
connectDb();
app.listen(3000,(req,res)=>{
    console.log("started")
})