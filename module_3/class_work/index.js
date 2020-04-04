"use strict";
// // OBJECT 
// const odject = {
//     key: value,
//     key: vlaue,
// }

// const frontend = {
//     language_1: "HTML",
//     language_2: "CSS",
//     language_3:"JS",
// };
// console.log("frontend", frontend);

// const student = {
//     name: "Danya",
//     lastName: "Paschenko",
//     age: 14,
//     sex: "male",
//     course: frontend,
// }
// console.log("student", student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// console.log(frontend["language_1"]);
// console.log(frontend["language_2"]);
// console.log(frontend["language_3"]);

// student.lastName = "LOH!";
// console.log(student.lastName);
//  student["lastName"] = "LoH";
// console.log(student["lastName"]);


// student.address = "No where";
// console.log(student)

// delete frontend.language_1;
// console.log(frontend);



// // console.log(course);
// // console.log(console.log(console.log("hsdvhsbdvkbsd")))


// const myTheacher = "Sasha";
// const course = "frontend";

// const group_17 = {
//     myTheacher,
//     course,
//     count: 10
// };
// console.log(group_17);


// const key = "test";

// const getKey = function(){
//     return "score";
// };

// const testResult = {
//     [key]: "2", 
//     [getKey()]: 22
// };
// console.log(testResult);


// //МЕТОДЫ ОБЪЕКТА


// const myProducts = {
//     milk: 0.5,
//     eggs: 10,
//     apples: 5,
//     toCheck(){
//         console.log("check na sklade");
//     },
//     oranges: 10,
// };
// myProducts.toCheck();
// console.log(myProducts);

// myProducts.toBuySweets = function(){
//     console.log("Duy something sweet baby ");
// };
// myProducts.toBuySweets();
// console.log(myProducts);

// delete myProducts.toBuySweets;

// console.log(myProducts);

// const product = {
//     tupe: "lksdlk",
//     productName: "huinya",
//     price: 99999999999999.99,
//     showProdectName(){
//         console.log(this.productName);
//     },
//     changePrice(value){
//         this.price = value;
//     }
// };

// product.showProdectName();
// product.changePrice(392.3);
// console.log(product);


// //  ПЕРЕБОР ОБЪЕКТА

// const myCars = {
//     subaru: "Forester",
//     mazda: "626",
//     wolzvagen: "Golf",
//     tesla: "modelX",
//     product,
// };

// // for (const key in myCars){
// //     console.log("key: ", key);
// // }

// for (const key in myCars){
//     console.log("key: ", myCars[key]);
// }

// const hero = {
//     name: "Stalin",
//     power: "999999",
//     typeOfPower: "communism",
//     life:"without borders"
// };

// const keysOfHero = Object.keys(hero); //*******************************************************************************
// console.log(keysOfHero);

// for (const key of keysOfHero){
//     console.log("key: ", key)
//     console.log("value: ", hero[key]);

// }

// const entriesOfHero = Object.entries(hero);
// console.log("enteries of hero", entriesOfHero);
// for (const entry of entriesOfHero){
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);

// }
// const valuesOfHero = Object.values(hero);
// console.log("values of Hero", valuesOfHero);




const testsScore = {
test_1: 16,
test_2: 145,
test_3: 36,
test_4: 24,
}
const arrValues = Object.values(testsScore);
console.log(arrValues);
let totalScore = 0;
for (const value of arrValues){
    totalScore += value;
}
console.log(totalScore);
