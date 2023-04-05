const mongoose = require("mongoose");
const addschema = new mongoose.Schema({

    expenseType:{
        type:String,
        required:true
    },

    cost:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    time:{
        type:time,
        required:true
    },

    description:{
        type:String,
        required:true
    }
});

const Expense=new mongoose.model("Expense",addschema);

module.exports=Expense;