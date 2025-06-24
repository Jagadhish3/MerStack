// // //JS
// // const title = document.getElementsByTagName("h1")[0].innerHTML;

// // console.log("title: ", title);

// // function changeTitle() {
// //   const title = (document.querySelector("h1").innerText = "Student Form<");
// // }
 
// function formValidate(){
//     const first = document.getElementsByName("First Name")[0].value;
//     console.log("First name is: ",first);
//     if(first.length<1) {
//         alert(" First name Should not be empty!");
//         return;
//     }

//     const last = document.getElementsByName("Last Name")[0].value;
//     console.log("Last name: ",last);
//     if(last.length<1) {
//         alert(" Last name should not be empty!");
//         return;
//     }

//     const email=document.getElementsByName("Email")[0].value;
//     console.log("Email is :",email);
//     let res=false;
//     for(let i=0;i<email.length;i++){
//         if(email[i]=="@") {
//             res=true;
//             return;
//         }
//     }
//     if(!res){
//         alert("Enter a valid email");
//         return;
//     }

//     const passs = document.getElementsByName("Password")[0].value;
//     console.log("Password is : ",passs);
//     if(passs.length<8) {
//         alert("Password must be greater than 8 chars!");
//     }
//     let cap=false;
//     let sma=false;
//     let num=false;
//     let spe=false;

//     for(let i=0;i<passs.length;i++){
//         let pass=passs.charCodeAt(i);
//         if(pass[i]>=65&&pass[i]<=90){
//             cap=true;
//         }else if(pass[i]>=97&&pass[i]<=122){
//             sma=true;
//         }
//         else if(pass[i]>=48&&pass[i]<=57){
//             num=true;
//         }
//         else if(pass[i]>=32&&pass[i]<=47){
//             spe=true;
//         }
//     }
//     if(!(cap&&sma&&num&&spe)){
//         alert("password must satisfy all chars!!")
//     }
// }

//JS
function checkText(text) {
  let hasUpperCase = false,
    hasNumber = false;
  for (let i = 0; i < text.length; i++) {
    if (isUpperCase(text[i])) hasUpperCase = true;
    if (isNumber(text[i])) hasNumber = true;
    if (hasUpperCase && hasNumber) return true;
  }

  return false;
}

function isUpperCase(char) {
  if (char >= "A" && char <= "Z") return true;

  return false;
}

function isNumber(num) {
  if (Number(num) >= 0 && Number(num) <= 9) return true;
  else false;
}

function formValidate() {
  const firstName = document.getElementsByName("First Name")[0].value;
  const lastName = document.getElementsByName("Last Name")[0].value;
  const email = document.getElementsByName("Email")[0].value;
  const pass = document.getElementsByName("Password")[0].value;

  if (!firstName.length || !lastName.length || !email.length || !pass.length) {
    alert("Some Fields are Empty!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email is Invalid!");
    return;
  }

  if (!checkText(password)) {
    alert("Password not follows the rule!");
    return;
  }

  alert("Form Submitted Successfully!");
  return;
}

//style
// const form = (document.getElementsByTagName("form")[0].style.backgroundColor = "green");

//add class
// document.getElementsByTagName("form")[0].classList.add("myform");

//remove class
// document.getElementsByTagName("form")[0].classList.remove("myForm2");

//toggle class
// function toggle() {
//   const form = document.getElementsByTagName("form")[0];

//   form.classList.toggle("form2");
// }

function resetFormClasses(form) {
  form.classList.remove("form2", "form3", "form4", "form5");
}
function redcolor() {
  const form = document.getElementsByTagName("form")[0];
resetFormClasses(form)
  form.classList.add("form2");
}
function greencolor() {
  const form = document.getElementsByTagName("form")[0];
resetFormClasses(form)
  form.classList.add("form3");
}
function yellowcolor() {
  const form = document.getElementsByTagName("form")[0];
resetFormClasses(form)
  form.classList.add("form4");
}
function bluecolor() {
  const form = document.getElementsByTagName("form")[0];
resetFormClasses(form)
  form.classList.add("form5");
}
