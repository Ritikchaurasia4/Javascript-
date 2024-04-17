let Name = " ritik Rahul Rahul";
 console.log(Name.indexOf("Rahul")); //7
console.log(Name.indexOf()); // -1
console.log(Name.lastIndexOf("Rahul"));
let strArr = Array.from(Name);
console.log(strArr);
let strMap = strArr.map((curElem,index)=>`${curElem}-${index}`);
console.log(strMap);