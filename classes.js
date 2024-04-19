// Classes provide the template for the creation of the objects.

// Class is the program-code template for creating an object.

// class is the bluprint for the creation of object.

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
// create object from class

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let swift = new ToyotaCar();
swift.setBrand("Swift");