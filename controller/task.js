const Tasks=require("../model/task.js");

async function handleGetAllTasks(req,res){
  const allTasks=await Tasks.find({});
  if(allTasks.length===0) return res.json({msg:"no tasks"});
  return res.json(allTasks.map((el,i)=>{
    return ({
      taskName:el.taskName,
      description:el.description,
      taskStatus:el.taskStatus,
      dueDate:el.dueDate,
    })
  }));
}

async function handleCreateTasks(req,res){
  const {
    taskName,
    description,
    taskStatus,
    dueDate,
  }=req.body;
  await Tasks.create({
    taskName,
    description,
    taskStatus,
    dueDate,
  })
  return res.json({msg:"inserted successfully",
  });
}

async function handleUpdateTasks(req,res){
  const id=req.params.id;
  if(!id) return res.json({msg:"error no id"});
  const {
    taskName,
    description,
    taskStatus,
    dueDate,
  }=req.body;
  await Tasks.findByIdAndUpdate(id,{
    taskName,
    description,
    taskStatus,
    dueDate,
  },);

  return res.json({msg:"updated successfully"});
}

async function handleDeletionTasks(req,res){
  const id=req.params.id;
  if(!id) return res.json({msg:"error no id"});
  await Tasks.findByIdAndDelete(id);

  return res.json({msg:"deleted successfully"});
}

async function handleGetTaskById(req,res){
  const id=req.params.id;
  if(!id) return res.json({msg:"error no id"});
  const Task=await Tasks.findById(id);
  if(!Task) return res.json({msg:"cant find by that id"});
  return res.json({
    taskName:Task.taskName,
    description:Task.description,
    taskStatus:Task.taskStatus,
    dueDate:Task.dueDate,
  });
}

module.exports={
  handleGetAllTasks,
  handleCreateTasks,
  handleUpdateTasks,
  handleDeletionTasks,
  handleGetTaskById,
}