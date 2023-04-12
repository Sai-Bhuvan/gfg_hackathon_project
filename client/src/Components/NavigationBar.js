import { Link } from "react-router-dom";
import Card from "./Card";

export default function NavigationBar({active}) {
    const activePageClasses ="text-xl text-white text-center bg-pink-600 bg-opacity-60 rounded-lg -mx-2 py-2 my-4 font-bold";
  const inactivePageClasses = "text-xl text-gray-500 text-center hover:bg-pink-400 hover:bg-opacity-30 hover:scale-110 rounded-lg -mx-2 py-2 my-4 font-bold";
    return (
        <Card padding={"mx-4 my-8"}>
          <div href="#" className="flex items-center pt-4 justify-center">
        <img src={require('../images/logo.png')} className="h-6 mr-2" alt="budgetx Logo" />
        <p className="text-2xl font-extrabold font-serif" >BudgetX</p>
    </div>
        <div className="mt-16">
      <Link to={"/home/"+window.localStorage.getItem('id')}>
      <p className={active === "Home"? activePageClasses:  inactivePageClasses}>Home</p>
      </Link>
      <Link to={"/dashboard/"+window.localStorage.getItem('id')}>
      <p className={active === "Dashboard"? activePageClasses:  inactivePageClasses}>Dashboard</p>
      </Link>
      
      <Link to={"/expenses/"+window.localStorage.getItem('id')}>
      <p className={active === "Transactions"? activePageClasses:  inactivePageClasses}>Transactions</p>
      </Link>
      <p className={active === "Settings"? activePageClasses:  inactivePageClasses}>Settings</p>
      <Link to={"/add/expense/"+window.localStorage.getItem('id')}>
      <p className={active === "Add expense"? activePageClasses:  inactivePageClasses}>Add Expense</p>
      </Link>
      <Link to={"/add/income/"+window.localStorage.getItem('id')}>
      <p className={active === "Add income"? activePageClasses:  inactivePageClasses}>Add Income</p>
      </Link>
    </div>
          </Card>
    )
}