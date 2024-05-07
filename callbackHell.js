// function getData(dataId){
//     setTimeout(() => {
//         console.log("data",dataId)
//     },2000);
// }
// getData(1);
// getData(2);     // it is executing at a time , but if we want to execute at different time then we use callback hell

// It is not a good way for coding ( using promises -> it's a good way)

function getData(dataId , getnextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getnextData){
        getnextData();
    }
    },2000);
}
getData(1,() => {
    getData(2,() => {
        getData(3,() => {
            getData(4,()=> {
                getData(5)
            });
        });
    });
});
