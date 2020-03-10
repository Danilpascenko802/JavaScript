// "use strict" ;



// const  a = 9.99; 
// a = "Javascript"

// console.log(a);
// console.log(typeof a);
// let b;
// b = "blabla";
// console.log(b);
// console.log(typeof b);


// console.log(c);
// var c = 10;
// c = 11;
// console.log(c)

// const f = 25;

// console.log(f)



// const isAuthenticated = true;
// console.log(isAuthenticated);
// console.log(typeof isAuthenticated);

// const isModalOpen = false;
// console.log(isModalOpen);
// console.log(typeof isModalOpen);


// const guest = null;
// console.log(guest);
// console.log(typeof guest);

// const massage = "aaaaaaaaaaaaaaaaaa_help meee";
// console.log(massage);
// let name = "Student";
// console.log(name);
// console.log(`${name}, ${massage}`);

// alert(`${name}, ${massage}`);

// console.log(typeof massage);

// const isReady = confirm("Скачать вирус?");
// console.log(isReady);

// const enterName = prompt("Your name");
// console.log(enterName);


const x = 100;
const y = 5;
const b = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(y ** b);
console.log((x - y) * b);
console.log((x - y)**2);

let value = 100;
value = value - y;
console.log(value);

value += 45;
console.log(value);


const r = 100;
const p = 3;
const t = 100;

console.log(p<r, p>t, r>=t)
console.log(r > p < t);
console.log(3 > 2 > 1);

console.log(p == r, p === r, r === t, );
console.log(3 == '3');
console.log( 3 === '3');
console.log(p!==t, t !==r) ;






const num1 = 5;
const num2 = 10;
const str1 = "5";
const str2 = "10";
console.log(num1 === str1, num1 == str1);

console.log(num1 + str1);
console.log(typeof (num1 + str1));
console.log(num1 + num2 + str1 +str2);
 

// const userAge = Number(prompt("Enter your age PLS"));
// console.log(userAge);
// console.log(typeof userAge);

// let userAge2 = prompt("enter name ");
// console.log(userAge2);
// console.log(typeof userAge2);
// userAge2 = Number(userAge2);
// console.log(userAge2);
// console.log(typeof userAge2);
const val1 = 17;
console.log( Number(val1));
console.log(typeof val1)

const val2 = "23";
console.log(Number(val2));
console.log(typeof Number(val2));

console.log(Number.parseInt("122px"));
console.log(Number.parseInt("11abc22"));
console.log(Number.parseInt("1.1xyi9"));
console.log(Number.parseInt("lndfb"));

console.log(  "xfmnl;vln"   );
console.log(Number.parseFloat("122px"));
console.log(Number.parseFloat("11abc22"));
console.log(Number.parseFloat("1.1xyi9"));
console.log(Number.parseFloat("lndfb"));

console.log(  "************"   );

const validNumber = Number("1024");
console.log(validNumber);
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("10nfks24");
console.log(invalidNumber);
console.log(Number.isNaN(invalidNumber));


const O = 0.1;
const P = 0.2;
console.log(O * P);
console.log(O + P);

console.log((O * 10 + P * 10)/ 10 )



console.log(Math.floor(1.99));
console.log(Math.floor(1.2));
console.log(Math.floor(1.4));


console.log(Math.ceil(1.99));
console.log(Math.ceil(1.2));
console.log(Math.ceil(1.4));


console.log(Math.round(1.99));
console.log(Math.round(1.2));
console.log(Math.round(1.4));


console.log(Math.max(3,5,6,7,8,9,3,4,5,6,7,8,3,4,6,7,9,7,6,5,4,5,6,7,8,9,89,89,89,89))
console.log(Math.min(3,5,6,7,8,-9,3,4,5,6,7,8,3,4,6,7,9,7,6,5,4,5,6,7,8,9,89,89,89,89))

console.log(Math.pow(5,2));

console.log(Math.random());
console.log(Math.random()* (10-1) +1);;



let animal = "tiger";
console.log(animal.length);
 animal = "pink panter!"
 console.log(animal.length);

 console.log(animal.indexOf("pink"));
 console.log(animal.indexOf("panter"));

 console.log(animal.indexOf(" "));
 console.log(animal.indexOf("p"));
 console.log(animal.indexOf("i"));


 console.log(animal.indexOf("hgjdkiec"));



 console.log(animal.includes("panter"));
 console.log(animal.includes("punk"));

 console.log(animal[0]);
 console.log(animal[1]);
 console.log(animal[2]);
 console.log(animal[3]);
 console.log(animal[4]);


 console.log(animal.toLocaleUpperCase());
 console.log(animal);

animal = "CAT";
console.log(animal.toLocaleLowerCase());
