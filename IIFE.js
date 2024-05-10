// IIFE  :  Immediately Invoked Function Expression 

// IIfe is a function that is called immediately as soon as it is defined.

//   syntax  :     ( function(){..})();     Normal function 

//                 (()=>{ ....})();         Aero function

//                 (async ()=>{....})();    async function 

function getData(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("data",getData);
            resolve("success");
        },2000);
    });
}

// IIFE

(async function(){
    console.log("get data 1 .....");
    await getData(2);
    console.log("get data 2 ....");
    await getData(2);
    console.log("get data 3 ....");
    await getData(3);
})();

// There is no necessary for again call the function.