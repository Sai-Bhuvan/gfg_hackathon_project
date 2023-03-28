import './App.css';
import HomeBody from './HeaderBody';
import Header from './Header';
import {Routes, Route}  from 'react-router-dom'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ExpensePage from './ExpensePage/ExpensePage';
import AddExpense from './ExpensePage/AddExpense';

function App() {
  return (
    <>
    {/* <Header />
    <Routes>
       <Route path = '/' element = { <HomeBody/>}/> 
      <Route path='signupPage' element = {<SignupPage/>}/>
      <Route path='loginPage' element = {<LoginPage/>}/> 
      
    </Routes> */}
    <ExpensePage/>
      
    </>
    
  );
}

export default App;
