const mongoose=require("mongoose");

const taskSchema= new mongoose.Schema({
  taskName:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  taskStatus:{
    type:String,
    required:true,
    default:"pending",
  },
  dueDate:{
    type:String,
    required:true,
  }
},{
  timestamps:true
});

const Tasks=mongoose.model("Tasks",taskSchema);
module.exports=Tasks;