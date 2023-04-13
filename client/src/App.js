import './App.css';
import {Routes, Route}  from 'react-router-dom'
import SignUpPage from "./Components/SignUpPage"
import LoginPage from "./Components/LoginPage"
// import axios from 'axios';
import DashboardPage, { BarGraph, PieGraph } from './Components/AnalyseExpense';
import HomePage from './Components/HomePage';
import LoginLanding from './Components/LoginLanding';
import AddExpense from './Components/AddExpense';
import ExpenseList from './Components/ExpenseList';
import AddIncome from './Components/AddIncome';
import FintechSolutions from './Components/FintechSolution';
import EmiCalculater from './Components/EmiCalculater';
import CompoundIntrestCal from './Components/CompoundIntrestCal';

// axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const id = window.localStorage.getItem('id');
  return (
    <>
    {/* <Routes>
      <Route path = '/' element = { <HomePage/>}/> 
      <Route path='/signup' element = {<SignUpPage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path={'/dashboard/:id'} element = {<DashboardPage />}/>
      <Route path={'/home/:id'} element = {<LoginLanding />}/>
      <Route path={'/add/expense/:id'} element = {<AddExpense />}/>
      <Route path={'/add/income/:id'} element = {<AddIncome />}/>
      <Route path={'/expenses/:id'} element = {<ExpenseList />}/>
      <Route path={'/fintech-solutions'} element = {<FintechSolutions />}/>
    </Routes> */}
    {/* <EmiCalculater/> */}
    <CompoundIntrestCal/>
    
    {/* <SignupPage/> */}
     
    {/* <LoginPage/> */}
      {/* <div className="">
             
        
      </div>   */}
      
    </>
    
  );
}

export default App;