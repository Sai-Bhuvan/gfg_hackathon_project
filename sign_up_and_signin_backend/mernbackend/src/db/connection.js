const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Signupform").then(()=>{
    console.log(`hey it is connected to mongodb`);
}).catch((e)=>{
    console.log(`connection not possible`+e);
});