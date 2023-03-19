const express=require("express");
const app=express();
// const hbs=require("hbs");
const path=require("path");

const port=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));


const static_path=path.join(__dirname,"./public");
const veiws_path=path.join(__dirname,"./veiws");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",veiws_path);

app.get("/si",(req,res)=>{
    res.status(201).render("si_calu");
});

app.get("/cd",(req,res)=>{
    res.status(201).render("rd_calu");
});

app.get("/emi",(req,res)=>{
    res.status(201).render("emi_calcu");
});

app.listen(port,()=>{
    console.log(`sucessfully running in ${port}`);
})