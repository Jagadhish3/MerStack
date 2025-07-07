import React, { useReducer } from "react";

const initialValue = {
    counter1: 0, 
    counter2: 0

}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
        return {...state,counter1:state.counter1+1};
    case "decrement1":
        return {...state,counter1:state.counter1-1};
    case "increment2":
        return {...state, counter2:state.counter2+1};
    case "decrement2":
        return {...state,counter2:state.counter2-1};
    case "reset":
        return initialValue
    default:
        return state;
  }
};

function RedMultiCounter() {
  const [count, dispatch1] = useReducer(reducer, initialValue);
  return (
    <main>
      <h1>a = {count.counter1}</h1>
      <button onClick={() => dispatch1({type: "increment1"})}>a++</button>
      <button onClick={() => dispatch1({type: "decrement1"})}>a--</button>
      <h1>a = {count.counter2}</h1>
      <button onClick={() => dispatch1({type:"increment2"})}>b++</button>
      <button onClick={() => dispatch1({type:"decrement2"})}>b--</button>
      <button onClick={() => dispatch1({type: "reset"})}>Reset</button>
    </main>
  );
}

export default RedMultiCounter;