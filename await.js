// function mydisplay(some) {
//     console.log(some);
// }



// async function myfunction(){
//     return "hey!"
// }
// myfunction().then(
//     function(valu){
//         mydisplay(valu)
//     },
//     function(error){
//         mydisplay(error)
//     }
// )



async function mydisplay(){
    let mypromise = new Promise(function(resolve,reject)
    {
        resolve("i ike you ");

    });
    await mypromise;
  
}
console.log(mydisplay());
