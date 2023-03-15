import loginLogo from './images/info.png'
import './signupPageStyle.css'

export default function SignupPage(){
    return(
    <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div id="signupbox">    
            <div className="signupdiv">        
            <form className="signupform" action="/">
                <h1 className="signup">Sign up</h1>
                <div className="inputbox">
                    <i className="fa-solid fa-user"></i>
                    <label for="name">Name</label><br/>
                    <input type="text" name="name" id="name" placeholder="Your Name"/>
                </div>
                <h2>Gender</h2>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="male" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="male" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="female" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="female" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="other" name="gender" type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="other" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        </div>
                    </li>
                </ul>
                <div className="inputbox">
                    <i className="fa-regular fa-envelope"></i>
                    <label for="email">Email</label><br/>
                    <input type="text" name="email" id="email" placeholder="Enter Email"/>
                </div>
                <div className="inputbox">
                    <i className="fa-solid fa-phone"></i>
                    <label for="phone">Phone</label><br/>
                    <input type="number" name="phone" id="phone" placeholder="Enter Phone"/>
                </div>
                <div className="inputbox">
                <i className="fa-solid fa-lock"></i>
                <label for="pass">Set Password</label><br/>
                <input type="password" name="password" id="pass" placeholder="Set Password"/>
                </div>
                <div className="inputbox">
                    <i className="fa-solid fa-lock"></i>
                    <label for="repass">Confirm&nbsp;password</label><br/>
                    <input type="password" name="confirmpassword" id="repass" placeholder="Confirm password"/>
                </div>
                <button style={{marginTop:'10%'}} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>     
                <div className="sign-in">
                <p>Already have an account? <a className="text-orange-400" href="/">Sign in</a></p>
                </div>    
            </form>
            </div>
        </div>
        <div id="info-image">
            <img src={loginLogo} alt = ""/>
        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </>
    );
}