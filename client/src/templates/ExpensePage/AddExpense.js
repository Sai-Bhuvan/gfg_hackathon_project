import React, { useState } from 'react'
import ExpenseList from './ExpenseList';

export default function AddExpense() {
    const [expenseType, setExpenseType] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setExpenseType('');
        setCost('');
        setDate('');
        setTime('');
        setDescription('');
        console.log('submited');
    }
  return (
    <>
       <div className='container flex flex-col items-center justify-center'>
         
            <div className=' bg-blue-200 p-5 rounded-xl hover:shadow-2xl'>
                <h1 className='text-2xl'>Add Expenditure</h1> 
                <form action="/expense"  className='my-2 mx-2' onSubmit={handleSubmit} method="POST">
                    <div className='my-2'>
                        <label htmlFor="expenseType">Name: </label>
                        
                        <select className='p-1 rounded-lg hover:rounded-xl' name="expenseType" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                            <option value="groceries">Groceries</option>
                            <option value="fuel">Fuel</option>
                            <option value="travel">Travel</option>
                            <option value="education">Education</option>
                        </select>
                    </div>
                    
                    <div className='my-2 '>
                        <label htmlFor="cost">Amount Spent: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="text" name='cost' placeholder='Expenditure amount' value={cost} onChange={(e) => setCost(e.target.value)}/>
                    </div>
                    <div className='my-2 '>
                        <label htmlFor="date">Date: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className='my-2 '>
                        <label htmlFor="time">Time: </label>
                        <input className='p-1 rounded-lg hover:rounded-xl' type="time" name='time' value={time} onChange={(e) => setTime(e.target.value)}/>
                    </div>
                    <div className='my-2 '>
                    <div>
                            <label htmlFor="description">Description: </label>
                    </div>
                        <textarea name="description" className = 'rounded-lg hover:rounded-2xl' id="" cols="50" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    
                    <button type = 'submit' className='bg-green-500 hover:bg-green-700  font-bold rounded-lg text-white px-5 py-2 my-1'>Add</button>
                </form>
            </div>
       </div>
        
    </>
    
  )
}