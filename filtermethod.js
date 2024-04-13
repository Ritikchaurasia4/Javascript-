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

// let value = 6;
// const numbers = [1,2,3,4,6,5,6,7,8,9];
// let updateCart = numbers.filter((currentElement)=>{
//     // return currentElement === value;
//        return currentElement !== value;
// });
// console.log(updateCart);


const products = [
{name:'laptop',price:1200},
{name:'phone',price:800},
{name:'tablet',price:300},
{name:'smartwatch',price:150}
];
const filterProducts = products.filter((currentElement)=>{

    // console.log(currentElement.price);
    // console.log(currentElement.price <= 300);

    return currentElement.price <= 300;
});

console.log(filterProducts);