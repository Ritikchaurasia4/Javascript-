// when we pass a function as an argument in to another function 

function sum(a,b){
    console.log(a+b);
}
function calculateSum(a,b,sumcallback){
    sumcallback(a,b);
}
calculateSum(1,2,sum);