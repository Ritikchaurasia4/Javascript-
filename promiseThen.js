// Promise.then()  represents fullfill

// promise.catch() represents error 

// .then()

// const getPromise = () => {
//     return new Promise((resolve , reject) => {
//         console.log("I am a promise:");
//         resolve("Success");
//     });
// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fullfilled");
// });


// .catch()

const getPromise = () => {
    return new Promise((resolve , reject) => {
        console.log("I am a promise:");
        resolve("success");
    });
};
let promise = getPromise();
promise.catch(() => {
    console.log("Promise fullfilled");
});