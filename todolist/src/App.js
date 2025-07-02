import "./App.css";
import React from "react";
// import Form from"./components/Form.js";
// import Uncontrolled from "./components/Uncontrolled.js";
// import List from "./components/List.js";
import Cheating from "./components/Cheating.js";

function App() {
  // const [is, setIs] = useState();

  return (
    <div className="App">
       {/* <List/> */}
       {/* { is && <TimeWithEffect/>}
      <button onClick={()=> setIs((prev)=>!prev)}>Update</button> */}
      <Cheating/>
    </div>
  );
}

export default App;

