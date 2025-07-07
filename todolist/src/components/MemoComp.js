// import React,{useState} from 'react'

// const MemoComp = () => {
//     const [counter,setCounter] = useState(0);

//     const handleCounter1=()=>{
//         setCounter((prev)=>prev+1);
//     };
//     const handleCounter2=()=>{
//         setCounter((prev)=>prev+2);
//     };
//   return (
//     <main>
//         <h1>Counter App</h1>
//         <h2>count: {counter}</h2>
//         <button onClick={handleCounter1}>counter 1</button>
//         <button onClick={handleCounter2}>counter 2</button>
//     </main>
//   )
// }

// export default MemoComp
import React, { useMemo, useState } from "react";

function MemoComp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleResult = useMemo(() => {
    console.log("Function called..");
    let a = count;
    for (var i = 0; i < 2000000000; i++) {
      a++;
    }
    return a;
  }, [count]);

  return (
    <main>
      <h1>{handleResult}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>
      <button onClick={() => setCount2((prev) => prev + 2)}>Update Count2 {count2}</button>
    </main>
  );
}

export default MemoComp;
