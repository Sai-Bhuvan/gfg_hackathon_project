import React, { useState } from 'react'
import ExpenseList from './ExpenseList';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function AddIncome() {
    const dateToday = new Date().toISOString().substring(0, 10);
    const [incomeType, setIncomeType] = useState('salary');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState(dateToday);
    const [description, setDescription] = useState('');
    const [redirect, setRedirect] = useState(false);
    const options = ["salary", "upi-transfer", "arrears/incentives"];

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(incomeType);
        const id = window.localStorage.getItem('id');
        await axios.post("http://localhost:4000/add/income", {
            expenseType: incomeType,
            user: id,
            cost: cost,
            date: date,
        }).then(response =>{
            console.log(response.data);
            setIncomeType('');
            setCost('');
            setDate(dateToday);
            setRedirect(true);
            console.log('submited');
        })
    }

    if(redirect){
        return <Navigate to={"/dashboard/"+window.localStorage.getItem('id')}/>;
    }
  return (
    <>
     <div className='grid grid-cols-2 mx-auto bg-orange-200 h-full grow'>
        <div className='w-5/12 h-screen ml-20'>
            <NavigationBar active={"Add income"}/>
        </div>
       <div className='container flex flex-col items-center justify-center -mt-20 -ml-50 w-6/12'>
         
            <div className=' bg-blue-200 p-5 rounded-xl hover:shadow-2xl'>
                <h1 className='text-2xl'>Add Income</h1> 
                <form action="/expense"  className='my-2 mx-2' onSubmit={handleSubmit} method="POST">
                    <div className='my-2'>
                        <label htmlFor="expenseType">Name: </label>
                        
                        <select className='p-1 rounded-lg hover:rounded-xl' name="incomeType" defaultValue={incomeType} onChange={(event)=>setIncomeType(event.target.value)}>
                        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
                        </select>
                    </div>
                    
                    <div className='my-2 '>
                        <label htmlFor="cost">Amount : </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="text" name='cost' placeholder='Income amount' value={cost} onChange={(e) => setCost(e.target.value)}/>
                    </div>
                    <div className='my-2 '>
                        <label htmlFor="date">Date : </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="date" name='date' value={date} onChange={(e) => setDate(e.target.value.toString())}/>
                    </div>
                    <div className='my-2 '>
                    <div>
                            <label htmlFor="description">Description :</label>
                    </div>
                        <textarea name="description" className = 'rounded-lg hover:rounded-2xl' id="" cols="50" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    
                    <button type = 'submit' className='bg-green-500 hover:bg-green-700  font-bold rounded-lg text-white px-5 py-2 my-1'>Add</button>
                </form>
            </div>
       </div>
       </div>
    </>
    
  )
}