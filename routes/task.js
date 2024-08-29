const express=require("express");
const router=express.Router();

const {
  handleGetAllTasks,
  handleCreateTasks,
  handleUpdateTasks,
  handleDeletionTasks,
  handleGetTaskById,
}=require("../controller/task");

router.get("/",handleGetAllTasks);
router.post("/",handleCreateTasks);

router.get("/:id",handleGetTaskById);
router.patch("/:id",handleUpdateTasks);
router.delete("/:id",handleDeletionTasks);




module.exports=router;