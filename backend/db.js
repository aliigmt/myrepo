const mongoose =require('mongoose');
const mongoUrl="mongodb://localhost:27017/inotebook";

const  ConnectToMongo=()=>{
    mongoose.connect(mongoUrl,()=>{
 console.log("connect");
    });
}
 module.exports=ConnectToMongo;