// Using map() method , write a function that takes an array of strings and returns a new array where each string is capatilized ?

const fruits = ["Apple" , "Banana" , "Cherry" , "Date"];
let result = fruits.map((currentElement)=>{
    return currentElement.toUpperCase();
});
console.log(result);
