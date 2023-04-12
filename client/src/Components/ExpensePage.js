import React from 'react'
import { Link } from 'react-router-dom'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'
import {Routes, Route}  from 'react-router-dom'

export default function ExpensePage() {
  return (
    <div>
        <h1 className='text-3xl m-5'>Expense Manager</h1>
        <Routes>      
          <Route path='addExpense' element = {<AddExpense/>}/>
        </Routes>
        
        <Link className='bg-blue-500 hover:bg-blue-600  font-bold rounded-lg text-white m-5 px-4 py-2 ' to="/addExpense">Add Expense</Link>
       {/* <AddExpense/> */}
        <ExpenseList/>
    </div>
  )
}