// get Attribute value for any div , first of all we access the div by the syntax document.querySelector(" ")

// For div we get the attribute
    let div = document.querySelector("div");  //  div access
    console.log(div);
    let id = div.getAttribute("id");
    console.log(id); 

    let idName = div.getAttribute("name");
    console.log(idName);

// For para we get the attribute
    let para = document.querySelector("p"); // access the pararaph
    console.log(para);
    let para1 = para.getAttribute("class");
    console.log(para1);
//or
//console.log(para.getAttribute("class"));

// if we want to change the attribute then we use setAttribute(attr,value) 
    console.log(para.setAttribute("class", "newClass"));


// now if we want to access to the styling of the div in javaScript then we will do 

    let div1 = document.querySelector("div"); // access the div
    console.log(div1);
    div.style.backgroundColor="red";
    //div.style.backgroundColor="black";
    div.style.fontSize="25px";
    div.style.fontSize="25px";
    div.innerText="Hello!"; // Change the content 

// visibility hidden
    // div.style.visibility="hidden";