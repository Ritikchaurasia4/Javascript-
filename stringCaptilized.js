// Using map() method , write a function that takes an array of strings and returns a new array where each string is capatilized ?

//    const fruits = ["Apple" , "Banana" , "Cherry" , "Date"];
//    let result = fruits.map((currentElement)=>{
//        return currentElement.toUpperCase();
//    });
//    console.log(result);

   // Using map() method , write a function that takes an array of strings and returns a new array where each number is squared , but only if it's an even number

     const numbers = [1,2,3,4,5];
     const res = numbers.map((currentElement)=>{
           if(currentElement % 2 == 0)
           {
            return currentElement * currentElement;
           }
     }).filter((currentElement)=> currentElement !== undefined);
     console.log(res);