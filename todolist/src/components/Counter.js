import React, {useState} from "react"

function Counter(){
    const [timer,setTimer] = useState(0);
    const [interval,setInter] = useState(null);
    // function changeName(){
    //     setName(name+1);
    // }
    // function change(){
    //     setName(name-1); 
    // }
    // let interval = null; 
    function startTimer(){
        const i = setInterval(() =>{
            setTimer ((prev) => prev+1);
        },1000);

        setInter(i);
    }
    function stopTimer(){
        clearInterval(interval);
        setInter(null);
    }
    function resetTimer(){
        setTimer(0);
    }
    
    return (
         <main style={{textAlign: "center"}}>
            <h1>Timer: {timer} seconds</h1>
            <div>
            <button onClick={startTimer}>Start</button>
            &nbsp; &nbsp;
            <button onClick={stopTimer}>Stop</button>
            &nbsp; &nbsp;
            <button onClick={resetTimer}>Reset</button>
            </div>
        </main>
    )
}

export default Counter;