// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React from "react";

// import { Greet, Greet1 } from "./components/Greet";

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       <Greet1 />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React from "react";

import Greet from "./components/Greet";

function App() {
  const name = "Munit";
  return (
    <div className="App">
      <Greet studentName={name} college={"Lpu"} branch={"CSE"} />
    </div>
  );
}

export default App;



