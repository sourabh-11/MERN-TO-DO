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


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// 24
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);
// console.log(obj)
// console.log(obj);

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }




// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
//   };
  
//   const name = 'Lydia';
  
//   console.log(name.giveLydiaPizza())


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// console.log(a);

// a[b] = 123;
// a[c] = 456;
// console.log(b);

// console.log(a[c]);

// 
// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const item in person) {
//     console.log(item);
//   }

// const num = parseInt('7*6', 10);
// console.log(num);

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
//   });
//   console.log(num);




// map in java script
// let arr= [1,4,9,16,25];
// console.log(arr.map(Math.sqrt));

// let c = 23.3;
//  console.log(Math.round(c));


// const ages = [100, 33, 12, 40];

// let fun=(valu)=>{
//   return valu>15
// }
// console.log(ages.filter(fun));


// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }
// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }
// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));
// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }

// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));

// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));
// let fun2  = (total,first)=>{
//     return total-first;
// }
// console.log(ages.reduce(fun2));





// let data  ={
//     "status": "ok",
//     "totalResults": 10,
//     "articles": [
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Connie Loizos",
//     "title": "Investor Mark Suster says a \"handful\" of bad actors in VC destroyed Silicon Valley Bank",
//     "description": "\"Leave aside what this does to SVB. If the Fed didn't step up, how many bankruptcies would there be and other knock-on effects?\"",
//     "url": "https://techcrunch.com/2023/03/10/investor-mark-suster-says-a-handful-of-bad-actors-in-vc-destroyed-silicon-valley-bank/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/phone-payments-image-pexels.jpg?w=1200",
//     "publishedAt": "2023-03-11T01:33:21Z",
//     "content": "Yesterday at around noon in Los Angeles, investor Mark Suster of the venture firm Upfront Ventures began urging “calm” on Twitter. Silicon Valley Bank had bungled its messaging on Wednesday around an… [+7995 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Harri Weber",
//     "title": "Microsoft bets on algae to mitigate its growing carbon footprint",
//     "description": "Microsoft aims to be carbon negative by 2030, and its plan to get there hinges on the fate of carbon removal startups such as Running Tide.",
//     "url": "https://techcrunch.com/2023/03/10/microsoft-bets-on-algae-to-mitigate-its-growing-carbon-footprint/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-187243690-e1657643702255.jpg?resize=1200,676",
//     "publishedAt": "2023-03-11T01:21:54Z",
//     "content": "Like all of its peers in the tech industry, Microsoft has a carbon pollution problem.\r\nThe software giant’s emissions are on the rise, in spite of a pledge from the company to be carbon negative by 2… [+2515 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Rebecca Szkutak",
//     "title": "What does the collapse of SVB mean for venture debt?",
//     "description": "Private lenders that have traditionally focused on venture debt, including Hercules Capital and Runway Growth Capital, may see a flurry of opportunity.",
//     "url": "https://techcrunch.com/2023/03/10/silicon-valley-bank-venture-debt/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1178728033.jpg?resize=1200,800",
//     "publishedAt": "2023-03-10T22:32:58Z",
//     "content": "Earlier this week, venture investors and startups ran from Silicon Valley Bank, a financial institution that started the week solvent and closed it being shut down by regulators. While its failure af… [+405 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Rita Liao",
//     "title": "SVB's debacle is causing panic in China's startup industry",
//     "description": "The panic sparked by the collapse of Silicon Valley Bank is spreading to China, the world’s second-largest venture capital market. Across social media platforms, investors and startups are rushing to share news articles on the fiasco and thoughts on how to pr…",
//     "url": "https://techcrunch.com/2023/03/10/silicon-valley-banks-debacle-panics-chinas-tech-industry/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-451573019.jpg?resize=1200,800",
//     "publishedAt": "2023-03-10T21:54:42Z",
//     "content": "The panic sparked by the collapse of Silicon Valley Bank is spreading to China, the world’s second-largest venture capital market. Across social media platforms, investors and startups are rushing to… [+1560 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Haje Jan Kamps",
//     "title": "Daily Crunch: Silicon Valley Bank goes bust — regulators take control of $175B+ in deposits",
//     "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
//     "url": "https://techcrunch.com/2023/03/10/daily-crunch-silicon-valley-bank-goes-bust-regulators-take-control-of-175b-in-deposits/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1247968406.jpg?resize=1200,799",
//     "publishedAt": "2023-03-10T21:49:33Z",
//     "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\r\nHi, Crunchers,\r\nToday, theres only one story on everyones lips: Th… [+4102 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Natasha Mascarenhas",
//     "title": "How founders are reacting to Silicon Valley Bank’s collapse",
//     "description": "What happened to SVB? The ripple effect of SVB’s downfall is reverberating throughout the tech sector.",
//     "url": "https://techcrunch.com/2023/03/10/silicon-valley-bank-founders-reactions/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/svb-door-closed.jpg?resize=1200,811",
//     "publishedAt": "2023-03-10T21:36:42Z",
//     "content": "Engineers at Polymath Robotics were working late Wednesday night on multiple projects when co-founder and CEO Stefan Seltz-Axmacher noticed chatter about Silicon Valley Bank in a YC founder WhatsApp … [+13660 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Darrell Etherington",
//     "title": "SVB is already the talk of SXSW",
//     "description": "SXSW 2023 just kicked off today – and while it wasn't on the agenda, the collapse of SVB is already a central theme of the show.",
//     "url": "https://techcrunch.com/2023/03/10/svb-is-already-the-talk-of-sxsw/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/sxsvb.jpg?resize=1200,570",
//     "publishedAt": "2023-03-10T21:04:53Z",
//     "content": "Austin’s annual SXSW music, arts and tech festival just officially kicked off today, and it’s already clear that there’s going to be at least one central focus for the show: The ongoing collapse of S… [+2620 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Jacquelyn Melinek",
//     "title": "Uncertainty stands around multi-billion USDC empire as issuer Circle held reserves at Silicon Valley Bank",
//     "description": "Uncertainty stands around the $43.5 billion USDC empire as issuer Circle held reserves at Silicon Valley Bank",
//     "url": "https://techcrunch.com/2023/03/10/uncertainty-stands-around-multi-billion-usdc-empire-as-issuer-circle-held-reserves-at-silicon-valley-bank/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1362847684.jpg?resize=1200,800",
//     "publishedAt": "2023-03-10T20:53:13Z",
//     "content": "While the startup world digests the shocking implosion of well-known financial institution Silicon Valley Bank, the fallout may extend to the crypto world as well. One stablecoin in particular, USDC,… [+3275 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Alex Wilhelm",
//     "title": "With SVB locked up, how are startups going to pay for stuff?",
//     "description": "Things are tough right now. With their funds locked up, many startups won't be able to make full payroll for a two-week period on $250,000.",
//     "url": "https://techcrunch.com/2023/03/10/with-svb-locked-up-how-are-startups-going-to-pay-for-stuff/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/GettyImages-460689217.jpg?resize=1200,825",
//     "publishedAt": "2023-03-10T19:51:04Z",
//     "content": "TechCrunch is currentlybusy reporting the hell out of the SVB crisis, but as we sort out the competitive landscape and learn more about how founders and their VC partners are reacting, I have a quest… [+1156 chars]"
//     },
//     {
//     "source": {
//     "id": "techcrunch",
//     "name": "TechCrunch"
//     },
//     "author": "Walter Thompson",
//     "title": "TC+ roundup: Silicon Valley Bank fails, fintech VC survey, B2B growth tools",
//     "description": "Silicon Valley's favorite bank just failed. Sit with that for a moment.",
//     "url": "https://techcrunch.com/2023/03/10/tc-roundup-silicon-valley-bank-fails-fintech-vc-survey-b2b-growth-tools/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1460078838.jpg?resize=1200,899",
//     "publishedAt": "2023-03-10T18:35:40Z",
//     "content": "No one can predict the follow-on effects of a moment like this. We are in uncharted territory.\r\nI write this twice-weekly newsletter on a tight deadline, so when I saw a press release that started wi… [+6565 chars]"
//     }
//     ]
//     }
    // console.log(data.articles[0].description);


//     let myPromise = new Promise(function(myResolve, myReject) {
//         let x = 0;
      
//       // some code (try to change x to 5)
      
//         if (x == 0) {
//           myResolve("OK");
//         } else {
//           myReject("Error");
//         }
//       })
// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   )


// async function myDisplayer(){
//   let newpromise = new Promise(function(resolve,reject){
//   let   x=0;
//     if(x==0){
//       resolve("ok fine")
//       console.log("done");
//     }
//     reject("rejected")
//   })
//   await newpromise;
// }
// myDisplayer();
// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")





// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return 
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));



// class Person {
//     constructor() {
//       this.name = 'Lydia';
//     }
//   }
  
//   Person = class AnotherPerson {
//     constructor() {
//       this.name = 'Sarah';
//     }
//   };
  
//   const member = new Person();
//   console.log(member.name);



























