//imports
//packages
const express=require("express");
require("dotenv").config();
//imp
const app=express();
const PORT=process.env.port;
//db
const {DbConnect}=require("./connect");

//routes
const home=require("./routes/home");
const task=require("./routes/task");

//imports end


//Dbconnect
DbConnect("mongodb://127.0.0.1:27017/TaskManager").then(()=>{
  console.log("mongoDb successfully connected");
});

//middleware
app.use(express.urlencoded({extended:true}));


app.use("/",home);
app.use("/tasks",task);






app.listen(PORT,()=>{console.log("Server Started")});