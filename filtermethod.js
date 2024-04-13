const numbers = [1,2,3,4,6,5,6,7,8,9];
const result = numbers.filter((curElem)=>{
   return curElem > 4;
});
console.log(result);