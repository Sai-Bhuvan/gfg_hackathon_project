const User = require("./Models/User");
const express=require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app=express();
const path=require("path");
// const hbs=require("hbs");
const cors = require("cors");

const bcryptSalt = bcrypt.genSaltSync(10);

const port=process.env.PORT || 4000;
mongoose.connect('mongodb+srv://gfg:RVcRPUpDzwATJ07J@cluster0.efzinbl.mongodb.net/?retryWrites=true&w=majority');

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
// app.set("view engine","hbs");
app.set("views",template_path);
// hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("register");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/sign-up",async (req,res)=>{
    try{

        console.log(req.body.name);
            const registeruser=new User({
                name: req.body.name,
                email:req.body.email,
                phone:  req.body.phone,
                gender: req.body.gender,
                age:    req.body.age,
                password:   bcrypt.hashSync(req.body.password, bcryptSalt),
                confirmpassword:   bcrypt.hashSync(req.body.password, bcryptSalt),
            });

            const registered= await registeruser.save();
            res.status(201).json(registered);
    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/login",async (req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

//         console.log(`${email} and password is ${password}`);

        const userFound=await User.findOne({email:email});
        const passOk = bcrypt.compareSync(password, userFound.password);
        console.log(passOk);
        
        if (userFound) {
            if(passOk){
                res.status(201).json(userFound);
            }else{
                res.send("Invalid password!");
            }
        }
        else{
            res.json("User not found!")
        }
        

    }catch(error){
        console.log(error);
        res.status(400).send("Some problem occured!");
    }
})

app.listen(port,()=>{
    console.log(`it is running in ${port}`);
});
