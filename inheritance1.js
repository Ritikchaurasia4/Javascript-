// class person {                 
       
//     constructor() {   // constructor 
//         console.log("Enter parent constructor"); 
//         this.species = "Homo sapiens";
//     }

//     eat() {
//        console.log("eat");
//     }
  
// }

// // When we create a constructor in derive class then it is very necessary to call the base class constructor through the keyword 'super'

// class Engineer extends person {    
//     constructor (branch) {
//         console.log("Enter child constructor");
//         super(); // to invoke parent class constructor
//          this.branch = branch;
//          console.log("Exit  child constructor");
//     }   
//     work() {
//         console.log("Solve problems");
//     }
// }


// let engObj = new Engineer("chemical Engineer");


// ---------------------- super() ---------------------

class person {                 
       
    constructor(name) {   // constructor 
        
        this.species = "Homo sapiens";
        this.name = name;
    }

    eat() {
       console.log("eat");
    }
}
class Engineer extends person {    
    constructor (name) {
        
        super(name); // to invoke parent class constructor
    }   
    work() {
        super.eat();
        console.log("Solve problems");
    }
}
let engObj = new Engineer("Ritik");