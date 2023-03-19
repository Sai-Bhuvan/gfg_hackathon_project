import React from 'react'

export default function AddExpense() {
  return (
    <>
        <div className='container '>
            <h2 className='text-2xl'>Add Expense</h2>
            <form action="/"  className='my-2 mx-2'>
                <div className='my-2'>
                    <label htmlFor="expenseType">Name: </label>
                    
                    <select className='p-1' name="expenseType" id="">
                        <option value="groceries">Groceries</option>
                        <option value="fuel">Fuel</option>
                        <option value="travel">Travel</option>
                        <option value="education">Education</option>
                    </select>
                </div>
                
                <div className='my-2'>
                    <label htmlFor="cost">Amount Spent: </label>
                    <input className='p-1' type="text" name='cost' placeholder='Expenditure amount' />
                </div>
                <div className='my-2'>
                    <label htmlFor="date">Date: </label>
                    <input className='p-1' type="date" name='date' />
                </div>
                <div className='my-2'>
                    <label htmlFor="time">Time: </label>
                    <input className='p-1' type="time" name='time' />
                </div>
                <div className='my-2'>
                   <div>
                        <label htmlFor="description">Description: </label>
                   </div>
                    <textarea name="description" id="" cols="60" rows="5"></textarea>
                </div>
                
                <button className='bg-green-500 hover:bg-green-700  font-bold rounded text-white px-3 py-2 my-2'>Add</button>
            </form>
        </div>
    </>
    
  )
}