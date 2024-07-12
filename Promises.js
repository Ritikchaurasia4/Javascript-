// promises is for "eventual" completion of task.
// It is an object in javaScript.
// It is solution to callback hell.

// Syantax     let promises = new Promise( ( resolve , reject ) => { } );    here resolve and reject both are handlers

// let promises = new Promise((resolve , reject) => {
//     console.log("I am promise:");

//     //  resolve("Sucess");

//      reject("pending");
// });

// Here in below code He promises that after 4 second i will return you data and it's done .

function getData(dataId ,getNextData){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Data" , dataId);
            // reject("pending");
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },4000);
    });
}

// Here in below code He promises that after 4 second i will return you data but it fails (means , not return the data )

// function getData(dataId , getNextData){
//     return new Promise((resolve , reject ) =>{
//         setTimeout(() =>{
//             console.log("Data" , dataId);
//             reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }