const User = require("./Models/Expense");
const express=require("express");
const mongoose = require("mongoose");

const app=express();
const path=require("path");
const Expense = require("../models/schema");

const template_path=path.join(__dirname,"../templates/ExpensePage");
app.set("views",template_path);

const port=process.env.PORT || 7000;
mongoose.connect('mongodb+srv://gfg:RVcRPUpDzwATJ07J@cluster0.efzinbl.mongodb.net/?retryWrites=true&w=majority');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/expense",(req,res)=>{
    try{
        const exp=new Expense({
            
            nameexpenseType: req.body.expenseType,
            cost:req.body.cost,
            date:  req.body.date,
            time: req.body.time,
            description: req.body.description,
                    
        });
        const registered=Expense.save();
        res.status(201).send(registered);
    }catch(error){
        res.status(400).send(error);
    }
});

app.listen(port,()=>{
    console.log(`it is running in ${port}`);
});


