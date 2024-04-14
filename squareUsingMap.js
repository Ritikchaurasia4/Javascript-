// Using map() to square each number and create a new array?

const numbers = [1,2,3,4,5];
// let result = numbers.map((curElem)=>curElem * curElem);

// or

let result = numbers.map((curElem)=>{
     return curElem * curElem;
});
console.log(result);