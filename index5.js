// Event Handling in js

    // let btn1 = document.querySelector("#btn1"); // access button
    // btn1.onclick = ()=>{
    //     console.log("Btn was clicked");
    //     let a = 25;
    //     a++;
    //     console.log(a);//26
    // }
    // let box = document.querySelector("div"); // access div
    // box.onmouseover=()=>{
    //     console.log("you are inside the div");
    // }

// Event Listener bye the syntax node.addEventListener(event,callback)

// There are some drawback in event handler inside javascript , hence we use addEventListener()

    let btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click",()=> {
        console.log("button 1 was click");
    });
    btn1.addEventListener("click",()=> {
        console.log("button 1 was click - handler 1");
    });

// or,

    //  let btn2 = document.querySelector("#btn1");
    // btn2.addEventListener("click",()=> {
    //     console.log("button 1 was click - handler 2");
    // });

    
    // btn1.addEventListener("click",(event)=> {
    //     console.log("button 1 was click - handler 2");
    //     console.log(event);
    // });

    
    btn1.addEventListener("click",()=> {
        console.log("button 1 was click - handler 2");
    });

    const handler3 = ()=>{
        console.log("button 1 was click - handler 3");
    }
    btn1.addEventListener("click",handler3);
    
    btn1.addEventListener("click",()=> {
        console.log("button 1 was click - handler 4");
    });

    // if want to remove the listener above then we use 

    btn1.removeEventListener("click",handler3);