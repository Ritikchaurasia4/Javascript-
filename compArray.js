// const fruits = ["banana" , "Apple" , "Orange" , "Mango"];
const numbers = [1,2,3,4,6,5,6,7,8,9];
numbers.sort((a,b) => {

// for increasing 
    // if(a>b) return 1;
    // if(b>a) return -1;

// for decreasing 
    if(a>b) return -1;
    if(b>a) return 1;
});
console.log(numbers);