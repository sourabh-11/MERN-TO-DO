// let mydisplay =(some) =>{
//     console.log(some);
// }


// let myfirst=()=>{
//     mydisplay("hello")
// }
// let mysecond =()=>{
//     mydisplay("good by")
// }
// myfirst();
// mysecond();

// let mydisiplay =(some)=>{
//     console.log(some);
// }
// let mycalculation =(num1,num2)=>{
//     let sum = num1 + num2;
//     return sum;
// }

// let result =mycalculation(2,3);
// mydisiplay(result);
// mydisiplay(mycalculation(23,2))




// function myDisplayer(something) {
    
//     console.log(something);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);



const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers);

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}