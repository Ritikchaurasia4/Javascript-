const numbers=[1,2,3,4,6,5,6,7,8,9];
const result = numbers.map((curElem)=> curElem * 5);
console.log(result);
const result1 = result.findIndex((curElem)=>{
    return curElem > 10;
});
console.log(result1);