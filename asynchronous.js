// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,8000); // in milisecond , timeout7

// ----------Asynchronous-------------- 

// console.log("hello");
// console.log("sir");

// // not waiting for this method

// setTimeout(() =>{
//    console.log("Hello");
// },4000);

// console.log("how are ");
// console.log("you");

// ---------------- callback---------------------------

function sum(a,b){
   console.log(a+b);
}
function calculator(a,b,sumCallback){
   sumCallback(a,b);
}
calculator(1,2,sum);

calculator(1,2,(a,b) => {
   console.log(a+b);
});