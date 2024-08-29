const mongoose=require("mongoose");

async function DbConnect(url){
  return mongoose.connect(url);
}

module.exports={
  DbConnect,
}