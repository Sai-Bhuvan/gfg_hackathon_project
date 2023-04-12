import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginLanding() {

    const [redirect, setRedirect] = useState("");
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:4000/dashboard/transactions")
      .then(response =>{
        setTransactions(response.data);
        console.log(response.data);
      })
    }, []);
    console.log({transactions});

    if (!window.localStorage.getItem('name')) {
        return <Navigate to={"/"}/>
    }

    if (redirect) {
        return <Navigate to={redirect}/>
    }

    function isExpense(expenseType) {
      if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
        return true;
      }
      return false;
    }

    return (
        <>
        <Header />
            <div className="bg-orange-100 py-10">
            <div className="dash mx-20 max-w-3xl py-6 px-6 border-2 border-orange-400 overflow-hidden rounded-md">
      <h1 className="font-bold text-black text-xl">Welcome back, {window.localStorage.getItem('name')}!</h1>
      <button onClick={()=>setRedirect("/add/expense/"+window.localStorage.getItem('id'))} className="btn-expense bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded mt-6">
        Add&nbsp;expense
      </button>
      <button onClick={()=>setRedirect("/add/income/"+window.localStorage.getItem('id'))} className="btn-expense bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded mt-6 ml-8">
        Add&nbsp;income
      </button>
    </div>
  <div className="mx-auto max-w-7xl p-8 lg:flex gap-8">
    <div className="card bg-orange-200 shadow-lg rounded-lg p-5 h-72">
        {/* Card content  */}
        <div className=" pb-8">
            <div className="text-sm font-bold uppercase text-red-400 mb-2">Current Expenses</div>
            <h3 className="text-2xl font-bold text-black mb-2">Here are your recent purchases- </h3>
            {transactions?.map((transaction) =>(
              <p className="grid grid-cols-3 gap-10 mx-10">
                <div className="text-gray-900 font-bold text-xl">{transaction.expenseType}</div>
                <div className={isExpense(transaction.expenseType)? "text-red-700" : "text-green-600"}>₹&nbsp;{transaction.cost}</div>
                <div className="text-gray-900">{transaction.date}</div>
              </p>
            ))}
            
        </div>
        {/* Card footer  */}
        <div className="footer text-right">
            <Link to={"/expenses/"+window.localStorage.getItem('id')} className="inline-flex w-40 h-10 justify-center items-center bg-orange-500 hover:bg-red-400 text-pink-50 hover:text-white rounded-full transition duration-150" href="#0">
            <span className="font-bold">Go to Full List</span>
            </Link>
        </div> 
    </div>
    <div className="quick-menu grid lg:grid-cols-2 lg:grid-rows-2 gap-x-10">
      <button onClick={()=>setRedirect("/dashboard/"+window.localStorage.getItem('id'))} className="bg-gradient-to-b from-orange-300 via-orange-50-400 to-orange-600 h-20 w-40 rounded-lg font-bold text-lg text-white mt-10 hover:bg-gradient-to-t transition-all">
        <p>Dashboard</p>
      </button>
      <button className="bg-gradient-to-b from-orange-300 via-orange-50-400 to-orange-600 h-20 w-40 rounded-lg font-bold text-lg text-white mt-10 hover:bg-gradient-to-t transition-all">
        <p>Savings</p>
      </button>
      <button className="bg-gradient-to-b from-orange-300 via-orange-50-400 to-orange-600 h-20 w-40 rounded-lg font-bold text-lg text-white hover:bg-gradient-to-t transition-all">
        <p>Invest</p>
      </button>
      <button onClick={()=>setRedirect("/fintech-solutions")} className="bg-gradient-to-b from-orange-300 via-orange-50-400 to-orange-600 h-20 w-40 rounded-lg font-bold text-lg text-white hover:bg-gradient-to-t transition-all">
        <p>AI Opinion</p>
      </button>
        
        </div>
    </div>
  </div>
        </>
    )
}