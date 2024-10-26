

import "./Lottery.css";
import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3,winSum=15,onWin, onReset}) {
    let [ticket, setTicket] = useState([0,0,0]);
   
  let isWin=sum(ticket)===winSum;
  if (isWin) {
    onWin(); 
  }
let buyTicket=()=>{
    setTicket(genTicket(n));
}
const resetTicket = () => {
    setTicket([0, 0, 0]);
    onReset(); 
  };
    return (
        <>
         
           <div className="every">
                
                <h1 className="title">Lottery Game</h1>
                <button className="btn" onClick={buyTicket}>Generate Ticket</button>
             
                <Ticket ticket={[ticket]}/>

                <h3 className="cong">{isWin && "Congratulations you win!"}</h3>
                {isWin && <button  className="btn"  onClick={resetTicket}>Reset</button>}
                </div>
               
        </>
    )
}