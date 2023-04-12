const User = require("./Models/User");
const Expense = require("./Models/Expense");
const express=require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app=express();
const path=require("path");
// const hbs=require("hbs");
const cors = require("cors");
const datefns = require("date-fns");
const { de } = require("date-fns/locale");

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

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

app.post("/login",async (req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        console.log(`${email} and password is ${password}`);

        const userFound=await User.findOne({email:email});
        const passOk = bcrypt.compareSync(password, userFound.password);
        console.log(passOk);
        
        if (userFound) {
            if(passOk){
                res.status(201).json(userFound);
                localStorage.setItem('id', userFound._id);
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
});

app.post("/home/localId", (req, res) =>{
    const id  = req.body.id;
    if(localStorage.getItem('id') === null){
        localStorage.setItem('id', id);
    }
})

app.get("/dashboard/transactions", async(req, res)=>{
    
    const expenses = await Expense.find({user: localStorage.getItem('id')}).sort({date: 'desc'}).sort({time: 'desc'});
    console.log({expenses});
    if(expenses.length < 3){
        res.json(expenses);
    }
    else{
        res.json([expenses[0], expenses[1], expenses[2]]);
    }
})

app.get("/savings", async(req, res)=>{
    var debit=0, credit=0;
    function isExpense(expenseType) {
        if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
          return true;
        }
        return false;
      }
    const expenses = await Expense.find({user: localStorage.getItem('id')});
    expenses.forEach(expense => {
        if(isExpense(expense.expenseType))
            debit += expense.cost;
        else
            credit += expense.cost;
    });
    res.json(credit-debit);
})

app.get("/dashboard/pie", async(req, res)=>{
    function isExpense(expenseType) {
        if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
          return true;
        }
        return false;
      }
    const month = new Date().getMonth();
    console.log({month});
    console.log('id ' + localStorage.getItem('id'));
    const expenses = await Expense.find({user: localStorage.getItem('id')});
    var totalExpense = 0;
    var groceries = 0;
    var fuel = 0;
    var travel = 0;
    var education = 0;
    var date = "";
    expenses.forEach(expense => {
        date  = new Date(expense?.date).getMonth();
        const b = month === date;
        if(b){
            if(isExpense(expense.expenseType)){
                totalExpense += expense?.cost;
            }
            if(expense?.expenseType === "groceries")
                groceries += expense?.cost;
            else if(expense?.expenseType === "fuel")
                fuel += expense?.cost;
            else if(expense?.expenseType === "education")
            education += expense?.cost;
            else if(expense?.expenseType === "travel")
                travel += expense?.cost;
        }
        
    });
    console.log({date});
    res.json({pieValues: [groceries, fuel, travel, education], monthTotal: totalExpense});
});

const axios = require('axios');

// middleware to parse incoming request body as JSON
app.use(express.json());

// route to generate fin-tech quiz question using ChatGPT API
app.get('/quiz', async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
      prompt: 'Generate a fin-tech quiz question.',
      max_tokens: 60,
      temperature: 0.5,
      n: 1,
      stop: '.'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.OPENAI_API_KEY}` // replace with your OpenAI API key
      }
    });
    // const question = response.data.choices[0].text.trim();
    console.log(response);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

// route to check fin-tech quiz answer
app.post('/quiz', (req, res) => {
  const { question, answer } = req.body;
  // replace the following with your own fin-tech quiz answer validation logic
  const isCorrect = answer && answer.toLowerCase().includes('fintech');
  res.json({ isCorrect });
});

app.get("/expenses", async(req, res)=>{
    const expenses = await Expense.find({user: localStorage.getItem('id')}).sort({date: 'desc'}).sort({time: 'desc'});
    res.json(expenses);
})

app.get("/dashboard/bar-graph", async(req, res)=>{
    function isExpense(expenseType) {
        if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
          return true;
        }
        return false;
      }
    const expenses = await Expense.find({user: localStorage.getItem('id')});
    // expenses.filter(expense => isExpense(expense.expenseType) === true);

    var m1=0, m2=0, m3=0;

    const monthNow = new Date().getMonth();
    const monthlast1 = datefns.add(new Date(), {months: -1}).getMonth();
    const monthlast2 = datefns.add(new Date(), {months: -2}).getMonth();

    const fullmonthNow = datefns.format(new Date(), 'MMMM');
    console.log({fullmonthNow});
    const fullmonthlast1 = datefns.format(datefns.add(new Date(), {months: -1}), 'MMMM');
    const fullmonthlast2 =datefns.format(datefns.add(new Date(), {months: -2}), 'MMMM');

    const yearNow = new Date().getFullYear();
    const yearmonthlast1 = datefns.add(new Date(), {months: -1}).getFullYear();
    const yearmonthlast2 = datefns.add(new Date(), {months: -2}).getFullYear();

    // console.log({months3});
    console.log({fullmonthNow, fullmonthlast1, fullmonthlast2});
    expenses.forEach(expense => {
        monthExpense = new Date(expense.date).getMonth();
        yearExpense = new Date(expense.date).getFullYear();
        if (monthExpense === monthNow && yearExpense === yearNow && isExpense(expense.expenseType)) {
            m3 += expense?.cost;
            console.log(monthExpense === monthNow && yearExpense === yearNow && isExpense(expense.expenseType));
            console.log(expenses[0]?.cost);
        }
        else if (monthExpense === monthlast1 && yearExpense === yearmonthlast1 && isExpense(expense.expenseType)) {
            m2 += expense?.cost;
        }
        else if (monthExpense === monthlast2 && yearExpense === yearmonthlast2 && isExpense(expense.expenseType)) {
            m1 += expense?.cost;
        }
    });
    res.json({data: [m3, m2, m1], labels: [fullmonthNow, fullmonthlast1, fullmonthlast2]});
})

app.post("/add/expense", async(req,res)=>{
    try{
        const exp = new Expense({
            user: localStorage.getItem('id'),
            expenseType: req.body.expenseType,
            cost: req.body.cost,
            date: req.body.date,
            time: req.body.time,
            description: req.body.description,
                    
        });
        console.log(req.body.id);
        const registered=await exp.save();
        res.status(201).send(registered);
    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/add/income", async(req,res)=>{
    try{
        const exp = new Expense({
            user: localStorage.getItem('id'),
            expenseType: req.body.expenseType,
            cost: req.body.cost,
            date: req.body.date,
                    
        });
        console.log(req.body.id);
        const registered=await exp.save();
        res.status(201).send(registered);
    }catch(error){
        res.status(400).send(error);
    }
});

app.listen(port,()=>{
    console.log(`it is running in ${port}`);
});