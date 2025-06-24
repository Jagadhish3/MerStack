//Body
const body = document.body;
console.log("Body: ", body);

//getElementByTagName
const title = document.getElementsByTagName("h2");

console.log("title: ", title);

//getElementByClassName
const heading = document.getElementsByClassName("title")[1];
console.log({ heading });

//getElementById
const para = document.getElementById("para");
console.log("para: ", para);

//querySelector

//getElementByName
const paraWithName = document.getElementsByName("FirstName");
console.log("para with Name: ", paraWithName);

//QuerySelector
const titleWithQuery = document.querySelector("input.name");
console.log(titleWithQuery);

//querySelectorAll
const paraAll = document.querySelectorAll("p");
console.log("para :", paraAll);