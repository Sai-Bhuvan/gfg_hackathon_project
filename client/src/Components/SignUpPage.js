import { Link, Navigate } from 'react-router-dom'
import './signUpPageStyle.css'
import { useState } from 'react';
import axios from "axios";

export default function SignupPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState("");
    const [confirmPasssword, setConfirmPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function SignUp(event) {
        event.preventDefault();
        if (!name || !email || !gender || !password || !phone || !confirmPasssword) {
            alert("Please fill all the fields.")
        }
        else if (password !== confirmPasssword) {
            alert("Both the passwords must match");
        }
        else{
           await axios.post("http://localhost:4000/sign-up", {
            name, gender, email, phone, password, confirmPasssword
           }).then((response)=>{
            console.log(response);
            setRedirect(true);
            alert("Sign-up successful. Please Login now.");
          });
        }
    }

    if (redirect) {
        return <Navigate to={"/login"}/>
    }

    return(
    <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div id="signupbox">    
            <div className="signupdiv">        
            <form className="signupform bg-blue-600 bg-opacity-30 p-10 rounded-xl" onSubmit={SignUp}>
                <h1 className="signup">Sign up</h1>
                <div className="inputbox">
                    <label className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>
                        Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" value={name} onChange={(event)=>setName(event.target.value)}/>
                </div>
                <h2>Gender</h2>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="male" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>setGender("male")}/>
                            <label  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="female" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>(setGender("female"))}/>
                            <label  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="other" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>setGender("other")}/>
                            <label  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        </div>
                    </li>
                </ul>
                <div className="inputbox">
                    <label className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
                        Email
                        </label>
                    <input type="text" name="email" id="email" placeholder="Enter Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                
                <div className="inputbox">
                    <label className='flex gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
</svg>
Phone
</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter Phone" value={phone} onChange={(event)=>setPhone(event.target.value)}/>
                </div>
                <div className="inputbox">
                <label className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
</svg>
                    Set&nbsp;Password
                    </label>
                <input type="password" name="password" id="pass" placeholder="Set Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>


                </div>
                <div className="inputbox">
                    <i className="fa-solid fa-lock"></i>
                    <label className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
</svg>Confirm&nbsp;Password
</label>
                    <input type="password" name="confirmpassword" id="repass" placeholder="Confirm password" value={confirmPasssword} onChange={(event)=>setConfirmPassword(event.target.value)}/>
                </div>
                <button style={{marginTop:'10%'}} type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>     
                <div className="sign-in">
                <p>Already have an account? <Link className="text-orange-400" to="/login">Login</Link></p>
                </div>    
            </form>
            </div>
        </div>
       <div id="info-image">
            <img src={require("../images/pie_graph.png")} alt = "" className='border-2 border-gray-500 rounded-2xl -mt-64 h-1/2'/>
        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </>
    );
}
