const Usertable = require("../../Models/usertable");

const userlist = async (req,res)=>{
   try{
    const users = await Usertable.find().sort({ createAt: 1});
    res.send({status:"successfully",data:users})
   } catch(error){
    console.log(`here is error $(err)`);
    res.send({status:"faild",error:err.error});
   
   }
}

module.exports = userlist;