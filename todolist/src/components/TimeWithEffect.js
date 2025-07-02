// import React , {useEffect,useState} from "react";

// function TimeWithEffect(){
//     const [status,setStatus]=useState("stop");
//     const [interval,setInter]=useState(null);
//     const [timer,setTimer] = useState(0);

//     useEffect(()=> {
//         if(status==="start"){
//             let interval=setInterval(()=>{
//                 setTimer((prev)=>prev+1);
//             },1000);
//             setInter(interval);
//         }
//         if(status==="stop"){
//             clearInterval(interval);
//             setInter(null);
//         }

//         if(status==="reset"){
//             setTimer(0);
//         }
//     },[status]);

//     return(
//         <main>
//         <h1>stop watch</h1>
//         <h1>{timer}</h1>
//         <div>
//         <button onClick={()=>setStatus("start")}>start</button>
//         <button onClick={()=>setStatus("stop")}>stop</button>
//         <button onClick={()=>setStatus("reset")}>reset</button>
//         </div>
//         </main>
//     );
// }
// export default TimeWithEffect;


// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [status, setStatus] = useState("stop");
//   const [interval, setInter] = useState(null);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     if (status === "start") {
//       let interval = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);

//       setInter(interval);
//     }

//     if (status === "stop") {
//       clearInterval(interval);
//       setInter(null);
//     }

//     if (status === "reset") {
//       setTimer(0);
//     }
//   }, [status]);

//   return (
//     <main>
//       <h1>Stop Watch</h1>
//       <h1>{timer}</h1>
//       <div>
//         <button onClick={() => setStatus("start")}>Start</button>
//         <button onClick={() => setStatus("stop")}>Stop</button>
//         <button onClick={() => setStatus("reset")}>Reset</button>
//       </div>
//     </main>
//   );
// }

// export default TimerWithEffect;

// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [interval, setInter] = useState(null);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//       let inter = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);

//       console.log("hello");
//       setInter(inter);
//       return ()=>clearInterval(inter);
//   }, []);


//   const handleStop = () => {
//       clearInterval(interval);
//       setInter(null);
//   };

// return (
//     <main>
//       <h1>Stop Watch</h1>
//       <h1>{timer}</h1>
//       <div>
//         <button onClick= {handleStop}>Stop</button>
//       </div>
//     </main>
//   );
// }

// export default TimerWithEffect;

// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [interval, setInter] = useState(null);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     let inter = setInterval(() => {
//       console.log("Hello from LPU");
//       setTimer((prev) => prev + 1);
//     }, 1000);

//     console.log("hello");
//     setInter(inter);

//     return () => {
//       clearInterval(inter);
//     };
//   }, []);

//   const handleStop = (interval) => {
//     clearInterval(interval);
//     setInter(null);
//   };

//   return (
//     <main>
//       <h1>Stop Watch</h1>
//       <h1>{timer}</h1>
//       <button onClick={() => handleStop(interval)}>Stop</button>
//     </main>
//   );
// }

// export default TimerWithEffect;

// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [status, setStatus] = useState("stop");
//   const [interval, setInter] = useState(null);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     if (status === "start") {
//       let interval = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);

//       setInter(interval);
//     }

//     if (status === "stop") {
//       clearInterval(interval);
//       setInter(null);
//     }

//     if (status === "reset") {
//       setTimer(0);
//     }
//   }, [status]);

//   return (
//     <main>
//       <h1>Stop Watch</h1>
//       <h1>{timer}</h1>
//       <div>
//         <button onClick={() => setStatus("start")}>Start</button>
//         <button onClick={() => setStatus("stop")}>Stop</button>
//         <button onClick={() => setStatus("reset")}>Reset</button>
//       </div>
//     </main>
//   );
// }

// export default TimerWithEffect;


import React, { useEffect, useState } from "react";

function TimerWithEffect() {
  const [interval, setInter] = useState(null);
  const [timer, setTimer] = useState(0); // timer in seconds

  useEffect(() => {
    let inter = setInterval(() => {
      setTimer((prev) => prev + 1);
      console.log("Hello from LPU");
    }, 1000);

    setInter(inter);

    return () => {
      clearInterval(inter);
    };
  }, []);

  const handleStop = () => {
    clearInterval(interval);
    setInter(null);
  };

  // 👉 Convert seconds to HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <main>
      <h1>Stop Watch</h1>
      <h1>{formatTime(timer)}</h1>
      <button onClick={handleStop}>Stop</button>
    </main>
  );
}

export default TimerWithEffect;
