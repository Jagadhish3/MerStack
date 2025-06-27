import React from "react";

// export function Greet(){
//     return <h1>Hello Lpu</h1>;
// }
// export function Greet1(){
//     return <h1>Hello Students</h1>;
// }

// export function Greet1() {
//   return <h1>Hello Students</h1>;
// }
// export default Greet;


// function Greet(props){
//     const { studentName, college, ...prop}=props;
//     return ( <h1>
//         Hello{studentName},{college}, {prop.branch}
//     </h1>);
// }


function Greet(props) {
  const { studentName, college, ...prop } = props;
  return (
    <h1>
      Hello {studentName}, {college}, {prop.branch}
    </h1>
  );
}

export default Greet;
