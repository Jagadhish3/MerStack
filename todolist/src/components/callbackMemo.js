import React from 'react'

const callbackMemo = () => {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const handleCounterOne=()=>{
        setCounterOne((prev)=>prev+1);
    }
    const handleCounterTwo=()=>{
        setCounterTwo((prev)=>prev+1);
    }

  return (
    <div>
      <h1>UseCallBack Demo</h1>
      <Title text={counter}/>
      <Button />
    </div>
  )
}

export default callbackMemo
