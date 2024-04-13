const numbers = [1,2,3,4,6,5,6,7,8,9];
let uniqueValues = numbers.filter((curElem , index , arr)=>{
    // console.log(arr[index]); // it returns the same value of the numbers

    // console.log(curElem); 

    // console.log(arr.indexOf(curElem)); 

    return arr.indexOf(curElem) === index;
});
// console.log(uniqueValues);