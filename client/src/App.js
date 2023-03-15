import './App.css';
import HomeBody from './HeaderBody';
import Header from './Header';
import {Routes, Route}  from 'react-router-dom'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path = '/' element = { <HomeBody/>}/> 
      <Route path='signupPage' element = {<SignupPage/>}/>
      <Route path='loginPage' element = {<LoginPage/>}/>
    </Routes>
    {/* <SignupPage/> */}
     
    {/* <LoginPage/> */}
      {/* <div className="">
             
        
      </div>   */}
      
    </>
    
  );
}

export default App;
