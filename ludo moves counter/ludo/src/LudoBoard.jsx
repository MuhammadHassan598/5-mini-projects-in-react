import { useState } from "react";
function Ludoboard() {
let [moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});


let movesBlue=()=>{
  
return setMoves((prevvalue)=>{
return {...prevvalue,blue:prevvalue.blue+1};
})
};

let movesRed=()=>{
    return setMoves((prevvalue)=>{
    return {...prevvalue,red:prevvalue.red+1};
    })
    };
    
let movesGreen=()=>{
    return setMoves((prevvalue)=>{
    return {...prevvalue,green:prevvalue.green+1};
    })
    };
    
let movesYellow=()=>{
    return setMoves((prevvalue)=>{
    return {...prevvalue,yellow:prevvalue.yellow+1};
    })
    };
    return (
        <>
            <div>
                <p>ludo</p>
                <div className="board">
                    <p>Blue moves:{moves.blue}</p> 
                    <button onClick={movesBlue} style={{backgroundColor:"Blue"}}>+1</button>
                    <p>Green moves:{moves.green}</p>
                    <button onClick={movesGreen} style={{backgroundColor:"Green"}}>+1</button>
                    <p>Yellow moves:{moves.yellow}</p>
                    <button onClick={movesYellow} style={{backgroundColor:"Yellow"}}>+1</button>
                    <p>Red moves:{moves.red}</p>
                    <button onClick={movesRed} style={{backgroundColor:"Red"}}>+1</button>
                </div>
            </div>
        </>
    )
}

export default Ludoboard;
