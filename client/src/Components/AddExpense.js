import React, { useState } from 'react'
import ExpenseList from './ExpenseList';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function AddExpense() {
    const dateToday = new Date().toISOString().substring(0, 10);
    const [expenseType, setExpenseType] = useState('groceries');
    const [cost, setCost] = useState(0);
    const [date, setDate] = useState(dateToday);
    const [time, setTime] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [description, setDescription] = useState('');
    const options = ["groceries", "fuel", "travel", "education"];

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(expenseType);
        const id = window.localStorage.getItem('id');
        await axios.post("http://localhost:4000/add/expense", {
            user: id,
            expenseType: expenseType,
            cost: cost,
            date: date,
            time: time, 
            description: description
        }).then(response =>{
            console.log(response.data);
            setExpenseType('');
            setCost('');
            setDate(dateToday);
            setTime('');
            setDescription('');
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
            <NavigationBar active={"Add expense"}/>
        </div>
        <div className='container flex flex-col items-center justify-center w-8/12 -ml-20 -mt-10'>
            <div className=' bg-blue-200 p-5 rounded-xl hover:shadow-2xl'>
                <h1 className='text-2xl'>Add Expenditure</h1> 
                <form action="POST"  className='my-2 mx-2' onSubmit={handleSubmit} method="POST">
                    <div className='my-2'>
                        <label htmlFor="expenseType">Name: </label>
                        
                        <select className='p-1 rounded-lg hover:rounded-xl' name="expenseType" defaultValue={expenseType} onChange={(event)=>setExpenseType(event.target.value)}>
                        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
                        </select>
                    </div>
                    
                    <div className='my-2 '>
                        <label htmlFor="cost">Amount Spent: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="text" name='cost' placeholder='Expenditure amount' value={cost} onChange={(e) => setCost(e.target.value)}/>
                    </div>
                    <div className='my-2 '>
                        <label htmlFor="date">Date: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="date" name='date' value={date} onChange={(e) => setDate(e.target.value.toString())}/>
                    </div>
                    <div className='my-2 '>
                        <label htmlFor="time">Time: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="time" name='time' value={time} onChange={(e) => setTime(e.target.value.toString())}/>
                    </div>
                    <div className='my-2 '>
                    <div>
                            <label htmlFor="description">Description:</label>
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