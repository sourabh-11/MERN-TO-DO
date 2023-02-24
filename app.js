// data type in java script

// 1.  Number
// let l = 34;
// let b=  23.3;


// 2.String
// let str = "sourabh";
// let str2 = "enter the number";

// 3.object 
// const obj  = {fname: "sourabh",age:23,city:"jaipur"}



// 4.array object
// const car = ["thar","aulto","volvo"]


// 5.bigInt
// let x = BigInt("23343432435435098767890");

// 6.booleans
// let x = 4;
// let  y= 5;
// console.log(y==x);    //false


// let x = null;
// console.log(x);
// console.log(typeof(x));


// let x = 23 + "sourabh"+23    
// console.log(x);   

// let x  = 23 + 3+ "string"      // x=26string
// let x  =  "string" + 23 + 3 // x=string233
// console.log(x);

// let z= 222e-5;
// console.log(z);


// variables

// let s = 45;{

//     var aa =44;
// }
// console.log(aa);
// var aa ="string"
// console.log(aa);





//     object

// const car  = {name:'Audi',
//              color:"black",
//              model:444,
//             fullname:function() {
//                 return this.name + " "+this.color;
                
//           }}
// console.log(car.fullname());


//   x= 4;
//   console.log(typeof(x));


// object 
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue",
//     Car: {
//         name:"sourabh",
//         class: 234,
//     }
//   };
// person.hight= 34;
// let txt = "";
// for (let x in person) {
//     txt += person[x];
//   }
//   document.getElementById("demo").innerHTML = txt;
//   document.getElementById("demo").innerHTML = person.Car.name;
// person.nationality  = "english"
// delete person.age;
//  person.age = 384;
// //   document.getElementById("demo").innerHTML = person.nationality ;
//   document.getElementById("demo").innerHTML = person.age;




// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }
// let x = "";
//   for (let i in myObj.cars) {
//     x +=  myObj.cars[i].name 
//     for (let j in myObj.cars[i].models) {
//       x += myObj.cars[i].models[j] 
//     }
//   }
//   for(let i in myObj.cars){
//       x += myObj.cars[i].name;
//       for(let j in myobj.cars[i].models){
//        x += myObj.cars[i].models[j];

//    }

// }
// document.getElementById("demo").innerHTML = x;



// function in java script
// function fun(w){
//     return w;
// }
// document.getElementById("demo").innerHTML = fun(3);


// string 
// let a = "this is an a string"
// let b = "this is an 2nd string"
// let c = "this is an 3rd string"


// console.log(a.length);

// let z  = "my name is \"sourabj\" ok fine"
// console.log(z);
// let a = 'it\'s alright'
// console.log(a);

// let a  = new String("i want to inset")
// console.log(typeof(a));

// let x = new String("John");
// let y = "john"
// console.log(x==y);


// string method 
// let a = "hey good morning "
// console.log(a.slice(2,12));
// console.log(a.substring(2,12));
// // console.log(a.substr(2,12));
// let  b= a.replace  ="good evening"
// console.log(b);
// let text = "                I love cats. Cats are very easy to love. Cats are very popular.       "
// // text = text.replaceAll("cats","dogs");
// // // text = text.replaceAll("cats","dogs")
// console.log(text.trimStart());
// console.log(text.trimEnd());


// 
// let a =23;
// console.log(a);
// b=a.toString();
// console.log(b);
// console.log(typeof(b));
// console.log(typeof(a));
let x = 9.656;
// x.toExponential(4);
// x.toExponential(6)
// console.log(x.toFixed(5));
// console.log(x.toPrecision(3));
// console.log(x.valueOf());

// console.log(x.parseInt);
// console.log( Number("10 33"));
// console.log(Number.isNaN(x));
// console.log(Number.isNaN("123"))
// console.log(Number(true),
// Number(false),
// Number("10"),
// Number("  10"),
// Number("10  "),
// Number(" 10  "),
// Number("10.33"),
// Number("10,33"),
// Number("10 33"),
// Number("John"))

// console.log(parseInt("-10"));