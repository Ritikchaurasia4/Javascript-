// DOM (data object model ) Manipulation

// if we want to add new element then first of all we will have to create the element by the syntax document.createElement("div")
//  as : if we want to access paragraph then we create paragraph 
//       if we want to access button then we create button  
//       .
//       .
//       so on

// if we want to add/create button then we have

    let newBtn = document.createElement("button");
    newBtn.innerText="click me"; // only create the button , now to add the button , we use the 4 method()  
    console.log(newBtn);

    let div = document.querySelector("div"); // access the div
    div.prepend(newBtn); //adds the end of the node
    div.append(newBtn);  // start of the node 
    div.before(newBtn);  // add before the node
    div.after(newBtn);   // add after the node

    //  let p = document.querySelector("p");
    //  p.remove();
    // p.append(newBtn);
    // p.prepend(newBtn);
    
    // p.before(newBtn);
    // p.after(newBtn);

// if we want to create heading 
 
let newHeading = document.createElement("h1");
newHeading.innerHTML="<i> this is new Heading !</i>";
document.querySelector("body").prepend(newHeading);
// newHeading.remove();


