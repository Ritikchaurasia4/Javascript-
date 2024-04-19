// Classes provide the template for the creation of the objects.

// Class is the program-code template for creating an object.

// class is the bluprint for the creation of object.

//------ When we create an object from the classes by the syntax ' let fortuner = new ToyotaCar() ' then the new keyword find a constructor in th classes but if there is no any one constructor in classes then the javascript automaticaly created a constructor .
//  ------ Show below

    // class ToyotaCar {
    //     start() {
    //         console.log("start");
    //     }
    //     stop(){
    //         console.log("stop");
    //     }
    //     setBrand(brand) {
    //         this.brandName = brand;
    //     }
    // }
    // // create object from class

    // let fortuner = new ToyotaCar();
    // fortuner.setBrand("fortuner");
    // let swift = new ToyotaCar();
    // swift.setBrand("Swift");

    class ToyotaCar {
  
        // we can paas argument also in constructor

        constructor(brand,mileage) {
            console.log("creating new object");
            this.brand = brand;
            this.mileage = mileage;
        }

        start() {
            console.log("start");
        }
        stop(){
            console.log("stop");
        }
        // setBrand(brand) {
        //     this.brandName = brand;
        // }
    }
    // create object from class
    
    let fortuner = new ToyotaCar("fortuner",10); // constructor invoke 
    console.log(fortuner);
    let swift = new ToyotaCar("swift",12);  // constructor invoke 
    console.log(swift);
  