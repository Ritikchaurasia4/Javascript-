 // setTimeout() method execute the function . Ittakes time always in milisecond 

console.log("Execute first ");
function hello(){
    console.log("hello , execute after 8 second");
}
setTimeout(hello,8000);
console.log("Execute second ");