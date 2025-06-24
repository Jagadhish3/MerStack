// // console.log(this);
// // var a;
// // a=10;
// // console.log(a);
// function get(){
//     var a;
//     a=10;
//     // if(true){
//     //     let c=20;
//     //     console.log(c);
//     // }
//     function print(){
//         let c = 20;
//         console.log(c);
//     }

//     print();

//     console.log(c);

//     console.log("Inside: ",a);
// }
// get();
// console.log("Outside: ",a);
//primitive datatype
// var a=5;
// var b=a;
// console.log("a = ",a);
// console.log("b = ",b);

// a=10;
// console.log("updated a = ",a);
// console.log("b = ",b);

// //Reference
// let obj1={
//     a:1,
//     b:2
// };

// let obj2=obj1;
// console.log("obj1 = ",obj1);
// console.log("obj2 = ",obj2);

// obj1.a=3;
// obj2.b=5;

// console.log("updated obj1 = ",obj1);
// console.log("obj2 = ",obj2);

//NOTE - Operators:

/*
1. Arithematic Operator

+, -, *, /, //, %

2. Comparision Operator

>, <, ==, ===, !=

3. Assignment Operator
=, +=, -=, *=, /=

4. Ternary Operator

expression ? statement: statement

5. Logical Operator
&&, ||, !, ?? 

6. Bitwise Operator

&, |, ^

7. typeof Operator

typeof

*/

let a = 3;
let b = "3";

console.log(a == b);
console.log(a === b);

console.log((a += 3)); //a = a+3

console.log(a > 3 ? "Hello" : "Hi");

a = null;

console.log(a ?? "hello");

console.log(typeof b);
