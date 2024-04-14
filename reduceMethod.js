// reduce() method : The reduce() in js is used to accumulate or reduce an array in to a single value .

const productPrize = [100,200,300,400,500];
const totalPrize = productPrize.reduce((accum , currElem )=> {
    return accum + currElem;
},0);
console.log(totalPrize);