// Event Handling in js

let btn1 = document.querySelector("#btn1"); // access button
btn1.onclick = ()=>{
    console.log("Btn was clicked");
    let a = 25;
    a++;
    console.log(a);//26
}
let box = document.querySelector("div"); // access div
box.onmouseover=()=>{
    console.log("you are inside the div");
}