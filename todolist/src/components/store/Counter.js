import React, { useReducer } from "react";

const a = 0;
const b=0;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function RedCounter() {
  const [count1, dispatch1] = useReducer(reducer, a);
  const [count2, dispatch2] = useReducer(reducer, b);
  return (
    <main>
      <h1>a = {count1}; b = {count2}</h1>
      <button onClick={() => dispatch1("increament")}>a++</button>
      <button onClick={() => dispatch1("decreament")}>a--</button>
      <button onClick={() => dispatch1("reset")}>Reset_a</button><gap>   </gap>
      <button onClick={() => dispatch2("increament")}>b++</button>
      <button onClick={() => dispatch2("decreament")}>b--</button>
      <button onClick={() => dispatch2("reset")}>Reset_b</button>
    </main>
  );
}

export default RedCounter;



