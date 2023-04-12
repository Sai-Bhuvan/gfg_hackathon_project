import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Header() {
  const [profileButton, setProfileButton] = useState("Login")
  const [profileMenu, setProfileMenu] = useState(false);
  const [loginredirect, setLoginRedirect] = useState(false)
  useEffect(()=>{
    console.log(window.localStorage.getItem('name'));
    if (window.localStorage.getItem('name')) {
      setProfileButton(window.localStorage.getItem('name'));
    }
    axios.post("http://localhost:4000/home/localId", {
            id: window.localStorage.getItem('id'),
        }).then(res =>{
            console.log(res);
        });
}, []);

function logout() {
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('name');
  window.location.reload();
}

function loginButton() {
  if (window.localStorage.getItem('name')) {
    setProfileMenu(true)
  }
  else{
    setLoginRedirect(true);
  }
}

if (loginredirect) {
  return <Navigate to={"/login"}/>
}

    return (
        <>
        <header>
        <nav className=" border-orange-200 px-2 sm:px-4 py-3 bg-appOrange bg-opacity-80 relative">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <img src={require('../images/logo.png')} className="h-6 mr-3 sm:h-9" alt="budgetx Logo" />
        <p className="self-center text-3xl whitespace-nowrap dark:text-black font-extrabold font-serif" >BudgetX</p>
    </a>
    <div className="flex items-center lg:order-2">
        <button onClick={loginButton} className='text-xl mr-2 text-gray-500 hover:text-white hover:scale-110'>{profileButton}</button>
        <button type="button" className="flex mr-3 text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span className="sr-only">Open user menu</span>
          <button onClick={()=>setProfileMenu(!profileMenu)} className="relative w-10 h-10 overflow-hidden bg-transparent  hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

        </button>
        </button>
        {/* <!-- Dropdown menu --> */}
        
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-orange-500 rounded-lg lg:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="orange-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    
    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <div className="flex p-4 mt-1 border rounded-lg flex-col bg-appYellow bg-opacity-20 gap-4  lg:flex-row transition-all">
        <p className="px-2 py-1 text-gray-700 rounded hover:text-white bg-blue-700 lg:bg-transparent  lg:hover:text-blue-700 lg:text-white dark:text-white text-lg">
          Home
        </p>
        <p className="px-2 py-1 text-gray-700 rounded hover:text-white dark:text-gray-400  lg:hover:text-blue-700 hover:bg-orange-100 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700 text-lg  hover:scale-110">
          About
        </p>
        <p className="px-2 py-1 text-gray-700 rounded hover:text-white dark:text-gray-400  lg:hover:text-blue-700 hover:bg-orange-100 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700 text-lg  hover:scale-110">
          Services
        </p>
        <p className="px-2 py-1 text-gray-700 rounded hover:text-white dark:text-gray-400  lg:hover:text-blue-700 hover:bg-orange-100 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700 text-lg  hover:scale-110"> 
          Pricing
        </p>
        <p className="px-2 py-1 text-gray-700 rounded hover:text-white dark:text-gray-400  lg:hover:text-blue-700 hover:bg-orange-100 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700 text-lg  hover:scale-110">
          Contact
        </p>
      </div>
    </div>
    </div>
    {profileMenu && (
          <div className='bg-white rounded-2xl absolute right-2 flex-col'>
          {window.localStorage.getItem('email') && (
            <div className="px-4 py-3">
            <span className="block text-sm font-medium">{window.localStorage.getItem('email')}</span>
          </div>
          )}
          <div className="py-2 " aria-labelledby="user-menu-button">
            <Link to={"/dashboard/"+window.localStorage.getItem('id')} className='w-full text-left'>
              <p href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white  hover:scale-110">Dashboard</p>
            </Link>
            <br/>
            <button className='w-full text-left'>
              <p href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white  hover:scale-110">Settings</p>
            </button>
            <br/>
            <button className='w-full text-left'>
              <p href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white  hover:scale-110">Earnings</p>
            </button>
            <br/>
            {window.localStorage.getItem('name') && (
              <button onClick={logout} className='w-full text-left'>
              <p href="#" className="px-4 py-2 text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white  hover:scale-110">Logout</p>
            </button>
            )}
            <br/>
          </div>
          </div>
        )}
  </nav>
  </header>
  
  </>
    )
}