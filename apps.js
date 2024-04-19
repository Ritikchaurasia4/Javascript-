// Create object 

// const student = {
//     Fullname:"vishal", // prooerties
//     marks:90,
//     printName:function(){ // function
//         console.log("mark is",marks);
//     },
// };

// We can make prototype of its own

const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },

    // or,

    // calcTax2 : function() {
    //     console.log("tax rate is 10 %");
    // },
};

const ritik1 = {
    salary:50000,
};

const ritik2 = {
    salary:50000,
};

const ritik3 = {
    salary:50000,
};
const ritik4 = {
    salary:50000,
};
ritik1.__proto__ = employee; // with the help of this we can create of it's own prototype

ritik2.__proto__ = employee;
ritik3.__proto__ = employee;
ritik4.__proto__ = employee;


