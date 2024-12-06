const Usertable = require("../../Models/usertable")

const userlist = async(req,res)=>{
    try{
        const users = await Usertable.find();
        console.log(`user list data`,userdata);
        res.send("user data")
    }catch(err){
        console.log(`ero`,error);
    }
}