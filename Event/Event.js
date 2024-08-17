// =============== Event ================= 

// let btn1 = document.querySelector("#btn1");   // select the node 
// btn1.onclick = (event) =>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX , event.clientY);
// }

let div = document.querySelector("div");
div.style.color="green";

// ============================= EventListner========================

//  Syntax :  node.addEventListner(event , callback);   here As soon as event will be occur , callback function will be ececuted , here callback is also known as handler

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener( "click" , (event) => {
     
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX , event.clientY);
    
// });

// -------------------------------------------------------

let btn1 = document.querySelector("#btn1");
btn1.addEventListener( "click" , (event) => {
     console.log("Button 1 was clicked - handler1");
    
});
btn1.addEventListener( "click" , () => {
    console.log("Button 1 was clicked - handler2");
});

const handler3 = () =>{ () => {
        console.log("Button 1 was clicked - handler3");
    }
};

btn1.addEventListener( "click" , () => {
    console.log("Button 1 was clicked - handler4");
});
btn1.addEventListener( "click" , handler3 );

// If we want to delete handler3 then we have the code ...........

btn1.removeEventListener("click" , handler3);

