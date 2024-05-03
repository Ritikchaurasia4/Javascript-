// --------------- Inheritance -----------------

// ------- If child and parent have same method , child's method will be used.  --------
// This method is known as --- Method Overriding ---

    // class parent{
    //     hello() {
    //     console.log("Hello");
    //     }
    // }

    // class child extends parent {}

    // let obj = new child();






    class person {                // class 
       
        constructor() {     // constructor 
            this.species = "Homo sapiens";
        }

        eat() {
           console.log("eat");
        }
        sleep() {
        console.log("sleep");
        }

        work() {
            console.log("do nothing");
        }
    }

    class Engineer extends person {        // inherit base class
        work() {
            console.log("Solve problems");
        }
    }
    class doctor extends person {
       
        work() {
            console.log("Treat person");
        }
    }

    let ritikObj = new Engineer()

    

    