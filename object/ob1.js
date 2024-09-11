// const obj = {
//     name : "Ritik Chaurasia" ,
//     age : 21 ,
//     branch : "CSE" ,
// };
// console.log(obj.age , obj.branch);

// ================================================================================

// const obj2 = {
//     name : ["Ritik" , "Shabbir" , "Ravi" , "Akhand" , "Akash"] ,
//     age : 21 ,
//     branch : "CSE" ,
// }
// console.log(obj2.name[0]);

//============================ we can Pass object within an object ================================================

// const obj2 = {
//     name : ["Ritik" , "Shabbir" , "Ravi" , "Akhand" , "Akash"] ,
//     age : {
//         test : "pass" ,
//         Name : [ "Rahul" , "Chaurasia" , "Prisha Chaurasia" ] ,

//     } ,
//     branch : "CSE" ,
// }
// console.log(obj2);
// console.log(obj2.age);
// console.log(obj2.age.test);

// console.log(obj2.age.Name);

// console.log(obj2.age.Name[2]);

// ======================================= We can pass Object within array also =======================================

const arr = [
    {name : "Ritik Chaurasia" , age : 21 , branch : "CSE"} ,
     20 ,
    {college : "Bansal" , Branch : "Cse"},
    {address : "Deoria" , passingYear : 2017} , 
    {dist : "Gorakhpur" } ,
];

 arr.forEach((curElem) => {
    console.log(curElem);

});


// console.log(arr[0].name);

// console.log(arr[0].age);

// console.log(arr[0].branch);

// console.log(arr[1]);

// console.log(arr[2]);

// console.log(arr[2].college);

// console.log(arr[2].Branch);

// console.log(arr[3]);

// console.log(arr[3].address);

// console.log(arr[3].passingYear);

// console.log(arr[4]);

// console.log(arr[4].dist);


