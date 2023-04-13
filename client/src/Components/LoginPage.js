import { Link, Navigate } from 'react-router-dom'
import './loginPageStyle.css'
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function Login(event) {
        event.preventDefault();
        try{
            await axios.post('http://localhost:4000/login', {
               email,
               password,
              })
              .then(function (response) {
                console.log(response.data);
                if (response.data === "User not found" || response.data === "Invalid password!") {
                    alert(response.data);
                }
                else{
                    window.localStorage.setItem('email', email);
                    window.localStorage.setItem('name', response.data.name);
                    window.localStorage.setItem('id', response.data._id);
                    console.log(response.data.name);
                    alert("Login successful!");
                    setRedirect("/home/"+window.localStorage.getItem('id'));
                }
                
              });
              
            } catch (err) {
                alert("Login unsuccessful. Please check the credentials entered and try again later.");
                console.log(err);
            }
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 -mt-16">
                <div id="loginbox" className=''>    
                    <div className="logindiv ">        
                        <form className="loginform bg-blue-600 bg-opacity-30 p-10 rounded-xl" onSubmit={Login}>
                            <h1 className="login">Login</h1>
                            <button style={{marginBottom: '0'}} type="button" className="mt-4 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 text-base">
                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                            </button>
                            <button type="button" className="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 text-base">
                            <svg className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Sign in with Apple
                            </button>
                            <hr/>
                            <div className="inputbox mt-4">
                                <i className="fa-regular fa-envelope"></i>
                                <label htmlFor="email" className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
Email</label>
                                <input type="email" id="email" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                            </div>
                            <div className="inputbox">
                                <label htmlFor="password" className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
</svg>
Password</label>
                                <input type="password" id="pass" placeholder="Enter Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                            </div>
                            <div className="additional">
                                <div className="remember flex gap-4 items-center mt-2">
                                    <input type="checkbox" id="rememberpass"/>
                                    <label htmlFor="rememberpass">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">Login</button>     
                            <div className="register">
                            <p>Don't have an account? <Link className="mt-2" to="/signup">  Register</Link></p>
                            </div>    
                        </form>
                    </div>
                </div>
               <div id="info-image">
                    <img src={require("../images/bar_graph.png")} alt=" " className='border-2 border-gray-500 rounded-2xl h-3/4'/>
                </div>
            </div>
        </>
    );
}
