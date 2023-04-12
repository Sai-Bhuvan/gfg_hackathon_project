import { useState } from "react";

export default function ExpenseCard({slno, expense}) {
    const [DC, setDc] = useState("");
    const [amountClasses, setAmountClasses] = useState("");
    function isExpense(expenseType) {
        if (expenseType === "groceries" || expenseType === "travel" || expenseType === "education" || expenseType === "fuel") {
          return true;
        }
        return false;
      }

    useState(()=>{
        if (isExpense(expense.expenseType)) {
            setAmountClasses("bg-red-400 bg-opacity-40 p-1 rounded-lg text-red-800");
            setDc("Debit");
        }
        else{
            setAmountClasses("bg-green-400 bg-opacity-40 p-1 rounded-lg text-green-800");;
            setDc("Credit");
        }
    }, [DC]);
    return (
        <>
            <div className="grid grid-cols-6 mx-auto items-center my-4 border-b-2 border-gray-400 text-lg gap-8">
                <p className="ml-8">{slno}.</p>
                <div>
                    <p>{expense.date}</p>
                    <p>{expense?.time}</p>
                </div>
                <p>{expense.expenseType}</p>
                <div className="flex gap-2">
                    {DC === "Debit" && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>
                        </div>
                    )}
                    {DC === "Credit" && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

                        </div>
                    )}
                    
                    <p>{DC}</p>
                </div>
                <p className={amountClasses}>₹&nbsp;{isExpense(expense.expenseType)? "-" : "+"}{expense.cost}</p>
                <p>{expense.description}</p>
            </div>
        </>
    )
}