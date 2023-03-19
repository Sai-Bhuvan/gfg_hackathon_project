import React from 'react'
import { Link } from 'react-router-dom'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'
import {Routes, Route}  from 'react-router-dom'

export default function ExpensePage() {
  return (
    <div>
        <h1 className='text-3xl'>Expense Manager</h1>
        {/* <Routes>      
          <Route path='addExpense' element = {<AddExpense/>}/>
        </Routes>
        
        <Link className='bg-blue-500 hover:bg-blue-700  font-bold rounded text-white px-3 py-2 my-2' to="/addExpense">Add Expense</Link> */}
       <AddExpense/>
        <ExpenseList/>
    </div>
  )
}