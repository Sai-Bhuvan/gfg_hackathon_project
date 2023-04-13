import { useState } from "react";
const expense = require("../images/add_expense.PNG");
const income = require("../images/add_income.PNG");
const dashboard = require("../images/dashboard.PNG");
const transactions = require("../images/transactions.jpg");

export default function HomeBody() {
    const [photo, setPhoto] = useState(dashboard);
    const [size, setSize] = useState("");

    const onClickClassNames = "border-b-2 border-gray-500 text-black font-bold bg-gray-200 rounded-2xl text-2xl py-1 px-2"

    function handleClick(photo) {
        setPhoto(photo);
    }

    return (
        <>
        <div className="mx-8 px-2 mt-4">
            <h2 className="text-2xl font-bold">About our website</h2>

            <p className="text-orange-600 text-lg bg-transparent bg-opacity-20 font-medium leading-2">Welcome to our expense tracker and analyzer website! With our platform, you can easily track your expenses and income, allowing you to stay on top of your finances and make more informed financial decisions.<br/><br/>

Our user-friendly interface makes it simple to add expenses and income, and you can view all of your financial data in one convenient location. Want to see all of your expenses over the past three months? Our bar graph feature allows you to do just that, giving you a clear visual representation of your spending habits.<br/><br/>

You can also view your expenses for the current month in the form of a pie graph, which breaks down your spending into different categories. Plus, our savings feature allows you to keep track of how much money you're putting away each month.<br/><br/>

And if you ever need to reference a past transaction, you can easily access all of your recent transactions on our platform. With our expense tracker and analyzer, you'll have all the tools you need to take control of your finances and achieve your financial goals.<br/></p>
        </div>
            <div className="flex justify-between mx-8 my-4 bg-gray-50  px-2">
                <button className={photo === expense? onClickClassNames: "text-xl text-gray-500" } onClick={()=>{handleClick(expense); setSize("h-1/4 w-2/5")}}>Add expenses</button>
                <button className={photo === income? onClickClassNames: "text-xl text-gray-600"} onClick={()=>{handleClick(income); setSize("h-1/4 w-2/5")}}>Add Income</button>
                <button className={photo === dashboard? onClickClassNames: "text-xl text-gray-600"} onClick={()=>{handleClick(dashboard); setSize("h-3/4 w-3/4")}}>Your Dashboard</button>
                <button className={photo === transactions? onClickClassNames: "text-xl text-gray-600"} onClick={()=>{handleClick(transactions); setSize("h-3/4 w-3/4")}}>All transactions</button>
            </div>
            <div className="mx-auto items-center mt-8"> 
                <img src={photo} className={"rounded-2xl mx-auto " + size} alt="photo"/>
            </div>
        </>
        
    )
}
