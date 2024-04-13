const numbers = [1,2,3,4,6,5,6,7,8,9];
const result = numbers.find((curElem)=>{
    return curElem>5;
});
console.log(result);