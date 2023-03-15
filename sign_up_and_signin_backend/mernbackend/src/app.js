const User = require("./Models/User");
const express=require("express");
const mongoose = require("mongoose");
const app=express();
const path=require("path");
const hbs=require("hbs");

const port=process.env.PORT || 4000;
mongoose.connect('mongodb+srv://gfg:RVcRPUpDzwATJ07J@cluster0.efzinbl.mongodb.net/?retryWrites=true&w=majority');

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("register");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/register",async (req,res)=>{
    try{

        // console.log(req.body.name);
        // res.send(req.body.name);
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password === cpassword){

            const registeruser=new User({
                name: req.body.name,
                email:req.body.email,
                phone:  req.body.phone,
                gender: req.body.gender,
                age:    req.body.age,
                password:   req.body.password,
                confirmpassword:   req.body.confirmpassword
            });

            const registered= await registeruser.save();
            res.status(201).json(registered);

        }else{
            res.json("passwords are not matching");
        }


    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/login",async (req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        // console.log(`${email} and password is ${password}`);

        const useremail=await Register.findOne({email:email});
        
        if(useremail.password === password){
            res.status(201).render("register");
        }else{
            res.send("invalid login details");
        }
        

    }catch(error){
        res.status(400).send("invalid email");
    }
})

app.listen(port,()=>{
    console.log('Running on port ${port}');
});
