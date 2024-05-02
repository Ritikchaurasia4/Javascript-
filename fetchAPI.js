let promise = fetch("http://goweather.herokuapp.com/weather/Ny")
promise.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((value2)=>{
    console.log(value2);

});