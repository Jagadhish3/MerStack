// import React, { useState } from 'react';
// import Counter from './counter.js';
// import Timer from './Timer.js';
// import Greet from './Greet.js';

// function Conditional() {
//     const [isUpdated, setIsUpdated] = useState(false);
//     const [isUpdated2, setIsUpdated2] = useState(false);

//     const handleShowCounter = () => {
//         setIsUpdated(true);
//     };

//     const handleShowGreet = () => {
//         setIsUpdated2(true);
//     };

//     return (
//         <main>
//             {isUpdated ? <Counter /> : isUpdated2 ? <Greet /> : <Timer />}
//             <button onClick={handleShowCounter}>Show Counter</button>
//             <button onClick={handleShowGreet}>Show Greet</button>
//         </main>
//     );
// }

// export default Conditional;

//Conditional

import React, { useState } from "react";
import Counter from "./Counter";
import Timer from "./Timer";
import Greet from "./Greet";

function Conditional(props) {
  const { handleParent } = props;
  const [isCounter, setIsCounter] = useState(false);
  //   if (isCounter) {
  //     return <Counter />;
  //   } else {
  //     return <Timer />;
  //   }

  const handleChange = () => {
    setIsCounter(true);
    handleParent(true);
  };

  return (
    <main>
      {/* {isCounter && <h1>Hello Lpu</h1>} */}
      {/* {isCounter ? <h1>Hello Lpu</h1> : <></>} */}
      {(() => {
        if (isCounter) return <Counter />;
        else return <Timer />;
      })()}

      <button onClick={handleChange}>Click here</button>
    </main>
  );
}

export default Conditional;
