// ......................... async-await.....................

// async function always returns a promise.

// await pauses the execution of it's surrounding async function until the promise is settled.

// await use only in async function .

// async-await is very simple and very understandable code as comparision to promise chain and callBack hell .


// syntax :   async function my_function(){....}

// function api(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

// await api();  //  SyntaxError : await is only valid in async functions and the top level bodies of modules.

// here we use await only in async function as below-

// async function getweatherData(){
//     await api();
// }


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve(200);
        },2000);
    });
}
async function getAllData(){
    console.log("fetching data 1 ...");
    await getData(1);
    console.log("fetching data 2...");
    await getData(2);
    console.log("fetching data 3...");
    await getData(3);
}
getAllData();

// If we use async-await function then we do not use   .then() method and .catch() method also.