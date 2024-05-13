// ............API............

// fetch api provide an interface for (beginners) fetching resources.
// It use request and response object.

//  syntax  :  let promise = fetch(url,[option]);

const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async ()=>{
    console.log("getting data");
    let response = await fetch(URL);
    console.log(response);  // JSON format
    // let data = await response.json();
    
}


// json() method return a second promise that resolved with the result of parsing the response body  text as json ( Input is json , output is js object )