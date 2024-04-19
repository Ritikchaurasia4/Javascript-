// Q1. You are creating a website for your college. Create a clas user with 2 properties , name and email. It also has a method called viewData() that allows the user to view website data.

let DATA = " Secret Information";
class user {
    constructor(name , email){
       this.name = name;
       this.email = email;
    }
    viewData()
    {
       console.log("data = ", DATA);
    }
}
let student1 = new user("Ritik" , "ritik@gmail.com");
let student2 = new user("Rahul" , "rahul@gmail.com");

let teacher = new user("Dean" , "dean@gmail.com");
