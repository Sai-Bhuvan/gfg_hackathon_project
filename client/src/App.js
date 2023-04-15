import './App.css';
import {Routes, Route}  from 'react-router-dom'
import SignUpPage from "./Components/SignUpPage"
import LoginPage from "./Components/LoginPage"
import DashboardPage, { BarGraph, PieGraph } from './Components/AnalyseExpense';
import HomePage from './Components/HomePage';
import LoginLanding from './Components/LoginLanding';
import AddExpense from './Components/AddExpense';
import ExpenseList from './Components/ExpenseList';
import AddIncome from './Components/AddIncome';
import InvestPage from './Components/InvestPage';

function App() {
  const id = window.localStorage.getItem('id');
  return (
    <>
    <Routes>
      <Route path = '/' element = { <HomePage/>}/> 
      <Route path='/signup' element = {<SignUpPage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path={'/dashboard/:id'} element = {<DashboardPage />}/>
      <Route path={'/home/:id'} element = {<LoginLanding />}/>
      <Route path={'/add/expense/:id'} element = {<AddExpense />}/>
      <Route path={'/add/income/:id'} element = {<AddIncome />}/>
      <Route path={'/expenses/:id'} element = {<ExpenseList />}/>
      <Route path={'/investometer'} element = {<InvestPage/>}/>
    </Routes>  
    </>
    
  );
}

export default App;
