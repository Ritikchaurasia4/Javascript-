const arr = [1,2,3,4,5,6,7];
const p = arr.reduce((acc , curElem , index , a) => {
    return acc + curElem ;
});
console.log(p);
