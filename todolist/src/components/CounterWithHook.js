import React,{useEffect,useState} from 'react'

function CounterWithHook () {
    const [update,setUpdate] = useState(false);
    console.log("Counter with Hook Rendered");
    useEffect(()=>{
        console.log("Component Mounted");
    },[update]);
  return (
   <main>
    <h1>Counter</h1>
    <p>Hello LPU</p>
    <button onClick={()=>setUpdate((prev)=>!prev)}>Render Component</button>
   </main>
  )
}

export default CounterWithHook
