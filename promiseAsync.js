// function asyncFunction(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() =>{
//             console.log("Data 1");
//         },3000);
//     });
// }
// function asyncFunction(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() =>{
//             console.log("Data 2");
//         },3000);
//     });
// }
// console.log("fetching data .......")
// let p1 = asyncFunction();
// p1.then((res) =>{
//     console.log(res);
// });
// console.log("fetching data .......")
// let p2 = asyncFunction();
// p2.then((res) =>{
//     console.log(res);
// });

// From the above code we can fetch the data at a time .

//But if we fetch the data at the different time then we have 

function asyncFunction1(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            console.log("Data 1");
            resolve("Success");
        },3000);
    });
}
function asyncFunction2(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            console.log("Data 2");
            resolve("Success");
        },4000);
    });
}
console.log("fetching data1 .......");
let p1 = asyncFunction1();
p1.then((res) =>{
    // console.log(res);
    console.log("fetching data2 .......");
    let p2 = asyncFunction2();
    p2.then((res) =>{
        // console.log(res);
    });
});
// console.log("fetching data .......")
// let p2 = asyncFunction();
// p2.then((res) =>{
//     console.log(res);
// });