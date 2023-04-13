import { useState } from "react";
import React from 'react'

export default function CompoundIntrestCal() {

    const [principle, setPrinciple] = useState("");
    const [intrestRate, setIntrestRate] = useState("");
    const [time, setTime] = useState(""); 
    const [cdIntrest, setCdIntrest] = useState(""); 

    const calculate = () => {
        let p = principle;
        let r = intrestRate;
        let t = time;
        let n = 0.3;

        setCdIntrest("Compound Intrest = " + p * Math.pow((1 + (r / n)),(n * t)))
    }
  return (
    <>
        <div className='body'>
            <div className="wrap">
                <div className="outer-left">
                    <div className="inner">
                        <h1 style={{marginTop:10 + '%'}}>Investometer</h1>
                        <hr/>
                        <h2>Compound Interest<br/>Calculator</h2>
                        <div className="Wrapper">
                            <div className="Input">
                                <input name="principal" type="number" id="principal" value={principle} onChange={(e) => setPrinciple(e.target.value)} className="Input-text" placeholder="Principal Amount"/>
                                <label htmlFor="principal" className="Input-label">Principal Amount</label>
                            </div>
                        </div>
                        <div className="Wrapper">
                            <div className="Input">
                                <input name="rof" type="number" value={intrestRate} onChange={(e) => setIntrestRate(e.target.value)} id="rof" className="Input-text" placeholder="Interest Rate"/>
                                <label htmlFor="rof" className="Input-label">Interest Rate</label>
                            </div>
                        </div>
                        <div className="Wrapper">
                            <div className="Input" style={{marginBottom: 5 + '%'}}>
                                <input name="poy" type="number" id="poy" value={time} onChange={(e) => setTime(e.target.value)} className="Input-text" placeholder="Time period in years"/>
                                <label htmlFor="poy" className="Input-label">Time period in years</label>
                            </div>
                        </div>
                        <p id="result" className="text-2xl p-3">{cdIntrest}</p>
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
