// //Call back
// function greet(name){
//     console.log('Hello ${name}');
// }

// function greetStudent(name,callback){
//     setTimeout(()=>{
//         callback(name);
//     }, 1000);
// }

// greetStudent("Sriram",greet);


//Grocery cart

// function createOrder(cb){
//     console.log("Order creation");
//     cb();
// }

// function payOrder(cb){
//     console.log("Payment Done");
//     cb();
// }

// function createOrderSummary(){
//     console.log("Created order summary");
// }

// createOrder(()=> payOrder(createOrderSummary));
// createOrder(()=> payOrder(()=>createOrderSummary()));

//Bad side of callback

/*
 1. Callback Hell
 2. Inversion of control
*/

//NOTE - Callback Hell

/*
1. User Login
2. Add items in cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

function login(cb) {
  console.log("User Logged in");
  cb();
}

function addItemToCart(cb) {
  console.log("Added items to cart");
  cb();
}

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("Payment Done..");
  cb();
}

function createOrderSummary(cb) {
  console.log("Created Order Summary");
  cb();
}

function updateWallet() {
  console.log("Update wallet");
}

login(()=> addItemToCart(()=>createOrder(()=>payOrder(()=>createOrderSummary(()=>updateWallet())))));