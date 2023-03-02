// function myDisplayer(some) {
//    console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );



let newpro  = new Promise(function(myresole,myreject){
    setTimeout(function() {
        myresole("i  like you ")
        
    }, 20000);
})
newpro.then(function(valu){
    console.log(valu);
})