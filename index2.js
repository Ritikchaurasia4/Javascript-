// getAttribute value for any div then first of all we acces the div by the syntax

// For div 
let div = document.querySelector("div"); 
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let idName = div.getAttribute("name");
console.log(idName);

// For para we get the attribute
let para = document.querySelector("p");
console.log(para);
let para1 = para.getAttribute("class");
console.log(para1);
//or
//console.log(para.getAttribute("class"));

// if we want to change the attribute then we use setAttribute(attr,value) 
console.log(para.setAttribute("class", "newClass"));
