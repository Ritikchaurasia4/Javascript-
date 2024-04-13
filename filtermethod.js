// const numbers = [1,2,3,4,6,5,6,7,8,9];
// const result = numbers.filter((curElem)=>{
//    return curElem > 4;
// });
// console.log(result);

// let value = 6;
// const numbers = [1,2,3,4,6,5,6,7,8,9];
// let updateCart = numbers.filter((currentElement)=>{
//     return currentElement === value;
// });
// console.log(updateCart);

let value = 6;
const numbers = [1,2,3,4,6,5,6,7,8,9];
let updateCart = numbers.filter((currentElement)=>{
    // return currentElement === value;
       return currentElement !== value;
});
console.log(updateCart);