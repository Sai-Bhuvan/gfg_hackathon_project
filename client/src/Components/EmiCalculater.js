import React, { useState } from 'react'
import './emiCalStyles.css'

export default function EmiCalculater() {

    const [loanAmt, setLoanAmt] = useState("");
    const [intrestRate, setIntrestRate] = useState("");
    const [time, setTime] = useState(""); 
    const [emi, setEmi] = useState(""); 
     
    
   
    const calculate = () => {
        let p = loanAmt;
        let r = intrestRate/100/12;
        let t = time

        setEmi("EMI = " + (p * r * (Math.pow((1+r),t ))/ (Math.pow((1+r),t-1))));
        setLoanAmt("");
        setIntrestRate("");
        setTime("");
    }
    return (
   <>
    <div className='body'>
        <div className="wrap">
                <div className="outer-left">
                    <div className="inner">
                        <h1 style={{marginTop:10 + "%"}}>Investometer</h1>
                        <hr/>  
                        <h2>EMI calculator</h2>
                        <div className="Wrapper">
                            <div className="Input">
                            <input name="loan" value={loanAmt} onChange={(e) => setLoanAmt(e.target.value)} type="number" id="loan" className="Input-text" placeholder='Loan Amount'/>
                            <label htmlFor="loan" className="Input-label">Loan amount</label>
                            </div>
                        </div>
                        <div className="Wrapper">
                            <div className="Input">
                                <input name="rof" type="number" value={intrestRate} onChange={(e) => setIntrestRate(e.target.value)} id="rof" className="Input-text" placeholder="Interest Rate"/>
                                <label htmlFor="rof" className="Input-label">Interest Rate</label>
                            </div>
                        </div>
                        <div className="Wrapper">
                            <div className="Input" style={{marginBottom: 5 + "em"}}>
                                <input name="poy" type="number" value={time} onChange={(e) => setTime(e.target.value)} id="poy" className="Input-text" placeholder="Tenure in months"/>
                                <label htmlFor="poy" className="Input-label">Tenure in months</label>
                            </div>
                        </div>
                        <div>
                            <p id="result" className='text-2xl p-3'> {emi} </p>
                        </div>
                        <div>
                            <button className="calc" onClick={calculate}>Calculate</button><br/>        
                        </div>    
                       
                        
                    </div>
                </div>
                <div className="outer-right"></div>
        </div>
    </div>
        
   </>
  )
}
