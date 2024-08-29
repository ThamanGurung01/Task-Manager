const express=require("express");
require("dotenv").config();

const app=express();
const PORT=process.env.port;

const home=require("./routes/home");


app.use("/",home);


























app.listen(PORT,()=>{console.log("Server Started")});