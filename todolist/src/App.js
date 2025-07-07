import "./App.css";
import React from "react";
// import Form from"./components/Form.js";
// import Uncontrolled from "./components/Uncontrolled.js";
// import List from "./components/List.js";
// import Draft from "./components/Draft.js";
// import MemoComp from "./components/MemoComp";
import RedMultiCounter from "./components/store/multiCounter";

function App() {
  // const [is, setIs] = useState();

  return (
    <div className="App">
       {/* <List/> */}
       {/* { is && <TimeWithEffect/>}
      <button onClick={()=> setIs((prev)=>!prev)}>Update</button> */}
      {/* <Cheating/> */}
      {/* <MemoComp/> */}
      {/* <Draft/> */}
      <RedMultiCounter/>
    </div>
  );
}

export default App;

