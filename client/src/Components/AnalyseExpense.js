import { useEffect, useState } from "react";
import { BarGraph } from "./BarGraph";
import Card from "./Card";
import { PieGraph } from "./PieGraph";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function DashboardPage() {

  const name = window.localStorage.getItem('name');
  const [pieValues, setPieValues] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [barGraphLabels, setBarGraphLabels] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(()=>{
    axios.get("http://localhost:4000/dashboard/pie")
    .then((response) =>{
      console.log(response.data);
      setPieValues(response.data.pieValues);
      setTotalExpense(response.data.monthTotal);
    });

    axios.get("http://localhost:4000/dashboard/transactions")
    .then((response) =>{
      console.log(response.data);
      setTransactions(response.data);
    });

    axios.get("http://localhost:4000/savings")
    .then((response) =>{
      console.log(response.data);
      setSavings(response.data);
    });

    axios.get("http://localhost:4000/dashboard/bar-graph")
    .then(response =>{
      setBarGraphData(response.data.data);
      setBarGraphLabels(response.data.labels);
    })
  }, [name]);
  console.log({pieValues});
  console.log({transactions});

  function isExpense(expenseType) {
    if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
      return true;
    }
    return false;
  }
  return (
    <div className="bg-pink-100 flex h-screen">
      <div className="w-3/12 h-screen">
       <NavigationBar active={"Dashboard"}/>   
      </div>
      <div className="w-6/12 h-screen">
        <h1 className="text-3xl font-extrabold px-4 pt-4">Dashboard</h1>
           <div className="flex gap-12 h-60">
            <div className="bg-white rounded-2xl shadow-md shadow-gray-200 grow">
                <p className="p-2 text-3xl font-bold">Total savings</p>
                <div className="flex gap-1 justify-center mt-8">
                  <p className="text-xl">₹</p>
                  <p className="text-6xl font-extrabold text-green-600">{savings}</p>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md shadow-gray-200 grow py-2">
                <PieGraph labels={["groceries", "fuel", "travel", "education"]} dataGraph={pieValues}/>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md shadow-gray-200 grow mt-4 h-64 p-4">
              <BarGraph title={"Last 3 months expense analysis"} dataGraph={barGraphData} labels={barGraphLabels}/>
          </div>
      </div>
      <div className="w-3/12 h-screen">
      <Card padding={"mx-4 my-8"}>
        <div>
          <p className="text-pink-500 font-bold text-2xl py-4 px-2">Welcome {name},</p>
          <p className=" text-black font-bold px-2 py-2">Your Cards</p>
          <div className="grow h-36 bg-gradient-to-b from-violet-400 via-pink-400 to-pink-600 mx-2 rounded-lg justify-center shadow-lg shadow-gray-200">
          <div className="w-6 h-6 flex gap-14 items-center">
         <p className="text-lg text-white font-bold px-2">₹</p>
        <p className="text-sm text-white font-bold">Debit/Credit</p>
          </div>
            <div className="my-4">
              <p className="text-center text-white font-extrabold text-2xl">₹&nbsp;{totalExpense}</p>
            <p className="text-center text-white">1234&nbsp;5678&nbsp;4568&nbsp;....</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center my-4  font-bold">Recent transactions</h1>
         {transactions.map((transaction) =>(
            <div className="flex items-center text-lg justify-evenly border-b-2 border-gray-300 pb-2">
            <div className="px-1">
              <p className="text-base font-bold">{transaction.expenseType}</p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
            </div>
            <div>
              <p className={isExpense(transaction.expenseType)? "text-red-700 font-bold" : "text-green-600 font-bold"}>₹&nbsp;{transaction.cost}</p>
            </div>
            </div>
         ))}   
        </div>
      </Card>
      </div>
    </div>
  )
}