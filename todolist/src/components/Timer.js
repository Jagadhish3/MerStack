import React, {useState} from "react"

function Timer(){
    const [time,setTime] = useState(0);
    const [interval,setInter]=useState(null);
    function startTimer(){
        if(interval==null){
            const i=setInterval(()=>{
                setTime((prev)=>prev+1);
            },1000);
            setInter(i);
        }else{
            console.log("Timer Already started");
        }
    }
    function stopTimer(){
        clearInterval(interval);
        setInter(null);
    }
    function resetTimer(){
        setTime(0);
    }
    
    return (
        <main style={{textAlign: "center"}}>
            <h1>Timer: {time} seconds</h1>
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

export default Timer;
