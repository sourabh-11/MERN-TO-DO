// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';  //undefined
//     let age = 21;            //reference error
//   }
  
//   sayHi();




// 2
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// 3
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());

// 4
// const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
//   console.log(mouse[bird.size]);


// 5
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// console.log(c.greeting);
// c.greeting = 'Hello';
// console.log(d.greeting);

// 6
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b == c);
// console.log(b);



// 7
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// 8
// class Person {
//   constructor() {
//     this.name = 'Lydia';
//   }
// }

// Person = class AnotherPerson {
//   constructor() {
//     this.name = 'Sarah';
//   }
// };

// const member = new Person();
// console.log(member.name);

// [1, 2, 3, 4].reduce((x, y)=>
//  console.log(x, y));


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());