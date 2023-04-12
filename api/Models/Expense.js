const mongoose = require("mongoose");
const addschema = new mongoose.Schema({

    user: {
        type: String,
        // required: true,
    },

    expenseType:{
        type:String,
        required:true
    },

    cost:{
        type:Number,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
    },

    description:{
        type:String,
    }
});

const Expense=new mongoose.model("Expense",addschema);

module.exports=Expense;