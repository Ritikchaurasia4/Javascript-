// Q1. Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

    // let modeBtn = document.querySelector("#mode");

    // let curMode = "light";
    // modeBtn.addEventListener("click",()=>{
    //     // console.log("You are trying to change mode ");
    //     if(curMode == "light"){
    //         curMode = "dark";
    //         document.querySelector("body").style.backgroundColor="black";
    //     }
    //     else{
    //         curMode = "light";
    //         document.querySelector("body").style.backgroundColor="white";
    //     }

    //     console.log(curMode);
    // });

// or,

    let modeBtn = document.querySelector("#mode");
    let body = document.querySelector("body");
    let curMode = "light";
    modeBtn.addEventListener("click",()=>{
        // console.log("You are trying to change mode ");
        if(curMode == "light"){
            curMode = "dark";
            body.classList.add("dark");
        }
        else{
            curMode = "light";
            body.classList.add("light");
        }

        console.log(curMode);
    });


  
