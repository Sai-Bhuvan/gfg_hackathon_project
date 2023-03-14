const mongoose=require("mongoose");
const user=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:Number,
        required:true,
        unique:true
    },
    
    gender:{
        type:String,
        required:true
    },

    age :{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    confirmpassword:{
        type:String,
        required:true
    }

})


const Register=new mongoose.model("Register",user);

module.exports=Register;