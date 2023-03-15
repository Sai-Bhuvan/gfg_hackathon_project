export default function Header() {

    return (
        <>
        <header>
        <nav className="bg-white border-orange-200 px-2 sm:px-4 py-3 dark:bg-orange-300">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center">
        <img src={require('./images/logo.png')} className="h-6 mr-3 sm:h-9" alt="budgetx Logo" />
        <p className="self-center text-3xl whitespace-nowrap dark:text-black font-extrabold font-serif" >BudgetX</p>
    </a>
    <div className="flex items-center lg:order-2">
        <a href="/" style={{marginRight:'10px'}}>Login/Sign&nbsp;Up</a>
        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span className="sr-only">Open user menu</span>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-orange-100 rounded-lg shadow dark:bg-orange-900 dark:divide-orange-400" id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-white dark:text-white">User</span>
            <span className="block text-sm font-medium text-white truncate dark:text-white">id@email.com</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-orange-500 rounded-lg lg:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="orange-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col p-4 mt-4 border border-orange-100 rounded-lg bg-orange-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-orange-100 lg:dark:bg-orange-200 dark:border-orange-100">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-red-400 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:p-0 dark:text-white" style={{fontSize: '1.1rem'}} aria-current="page">Home</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700" style={{fontSize: '1.1rem'}}>About</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700" style={{fontSize: '1.1rem'}}>Services</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700" style={{fontSize: '1.1rem'}}>Pricing</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-orange-700" style={{fontSize: '1.1rem'}}>Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  </header>
  </>
    )
}