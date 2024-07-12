// Create object 

// const student = {
//     Fullname:"vishal", // prooerties
//     marks:90,
//     printName:function(){ // function
//         console.log("mark is",marks);
//     },
// };

// We can make prototype of its own

// Case 1 --------------------------

    // const employee1 = {
    //     calcTax(){
    //         console.log("tax rate is 10%");
    //     },

    //     // or,

    //     // calcTax2 : function() {
    //     //     console.log("tax rate is 10 %");
    //     // },
    // };

    // const ritik1 = {
    //     salary:50000,
    // };

    // const ritik2 = {
    //     salary:50000,
    // };

    // const ritik3 = {
    //     salary:50000,
    // };
    // const ritik4 = {
    //     salary:50000,
    // };
    // ritik1.__proto__ = employee1; // with the help of this we can create of it's own prototype

    // ritik2.__proto__ = employee1;
    // ritik3.__proto__ = employee1;
    // ritik4.__proto__ = employee1;

// Case 2 ------------------------------

// If the object and prototype have same method then object's method will be used . Example has shown below..

    const employee2 = {
        calcTax(){
            console.log("tax rate is 10%");
        },
    };

    const ritik1 = {
        salary:50000,
        calcTax(){
            console.log("tax is 20 %"); 
        }
    };
    ritik1.__proto__ = employee2;
