"use strict";
// OBJECT 
const odject = {
    key: value,
    key: vlaue,
}

const frontend = {
    language_1: "HTML",
    language_2: "CSS",
    language_3:"JS",
};
console.log("frontend", frontend);

const student = {
    name: "Danya",
    lastName: "Paschenko",
    age: 14,
    sex: "male",
    course: frontend,
}
console.log("student", student);
console.log(student.name);
console.log(student.age);
console.log(student.course);

console.log(frontend["language_1"]);
console.log(frontend["language_2"]);
console.log(frontend["language_3"]);

student.lastName = "LOH!";
console.log(student.lastName);
 student["lastName"] = "LoH";
console.log(student["lastName"]);


student.address = "No where";
console.log(student)

delete frontend.language_1;
console.log(frontend);



// console.log(course);
// console.log(console.log(console.log("hsdvhsbdvkbsd")))


const myTheacher = "Sasha";
const course = "frontend";

const group_17 = {
    myTheacher,
    course,
    count: 10
};
console.log(group_17);


const key = "test";

const getKey = function(){
    return "score";
};

const testResult = {
    [key]: "2", 
    [getKey()]: 22
};
console.log(testResult);


//МЕТОДЫ ОБЪЕКТА


const myProducts = {
    milk: 0.5,
    eggs: 10,
    apples: 5,
    toCheck(){
        console.log("check na sklade");
    },
    oranges: 10,
};
myProducts.toCheck();
console.log(myProducts);

myProducts.toBuySweets = function(){
    console.log("Duy something sweet baby ");
};
myProducts.toBuySweets();
console.log(myProducts);

delete myProducts.toBuySweets;

console.log(myProducts);

const product = {
    tupe: "lksdlk",
    productName: "huinya",
    price: 99999999999999.99,
    showProdectName(){
        console.log(this.productName);
    },
    changePrice(value){
        this.price = value;
    }
};

product.showProdectName();
product.changePrice(392.3);
console.log(product);


//  ПЕРЕБОР ОБЪЕКТА

const myCars = {
    subaru: "Forester",
    mazda: "626",
    wolzvagen: "Golf",
    tesla: "modelX",
    product,
};

// for (const key in myCars){
//     console.log("key: ", key);
// }

for (const key in myCars){
    console.log("key: ", myCars[key]);
}

const hero = {
    name: "Stalin",
    power: "999999",
    typeOfPower: "communism",
    life:"without borders"
};

const keysOfHero = Object.keys(hero); //*******************************************************************************
console.log(keysOfHero);

for (const key of keysOfHero){
    console.log("key: ", key)
    console.log("value: ", hero[key]);

}

const entriesOfHero = Object.entries(hero);
console.log("enteries of hero", entriesOfHero);
for (const entry of entriesOfHero){
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);

}
const valuesOfHero = Object.values(hero);
console.log("values of Hero", valuesOfHero);




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


// console.log(Math.min(...testsScore));



const marvelHeroes = [
  "Captain Marvel",
  "Thanos",
  "Black Panter",
  "Goose the Cat",
  "Black Widow",
  "Captain America"
]
console.log("marvel pidors", marvelHeroes);
const copyOfMarvelHeroes = [...marvelHeroes, "Hulk", "spider"];

console.log("copy of marvel pidors", copyOfMarvelHeroes);


const nums1 = [1,2,3,4,5,6];
const nums2 = [ 7,8,9,0];
const allNums = nums1.concat(nums2);
console.log(allNums);

const allNums1 = [...nums1, ...nums2];
console.log(allNums1);

const notAllNums = [...nums1.splice(0,1), 666, ...nums2.slice((-1))];
console.log(notAllNums);
const updateNums = [
    ...nums1.slice(0,2),
    "JS is the best",
    ...nums2.slice(-2)
];
console.log("updateNums", updateNums);


const mod_1 = {test: 2, hw: 3, addit: 2};
const mod_2 = {test: 4, hw: 9, };
const mod_3 = Object.assign({}, mod_1, mod_2);
console.log(mod_3);


const a = { x: 1, y: 3} ;
const b = {x:0, z:8};
const c = {x:5, j: 10, x:90, ...a , z: 15, ...b};
console.log(c)
const z = { ...a , ...b, x:90, j: 10, z: 15};
console.log(c);







const add1 = function(...args){
    console.log("add1 args", args);

};
add1(17, 22, 23, );
add1(34, 56, 34, 666);

const add2 = function(value, ...args){
    console.log("add2 value", value);
    console.log("add2 args", args);
};
add2("Number of test", "Student", 10,1,2,3);
add2("Number of test", "Student", 15,45,3,6,8,3);


const hotel = {
    hotelName: "klasnyi hotelelele",
    stars: 666,
    capacity: 100,
}
const {hotelName,stars, status,} = hotel;
console.log(hotelName,stars,status);




const hotel2 = {
    hotelName2: "klasnyi hotelelele",
    stars2: 666,
    capacity2: 100,
    
};

// const { name3: hotelName2, stars2, status3: hotelStatus2 = "empty"} = hotel3;

// console.log(hotel3);



const hotel4 = {
    name4: "blabla",
    stars4: 9,
    capacity: 999,
    gfffgf: ""
};
const { name4, ...rest} = hotel4;
console.log(name4);
console.log(rest);



const rgb = [200, 255, 100];
const [red, green, blue] = rgb;
console.log(`red: ${red}, Green: ${green}, BLue: ${blue}`);


const rgb1 = [200, 205, 100];
let red1 , green1, blue1;
[red1, green1, blue1] = rgb1;
console.log(`red: ${red1}, Green: ${green1}, BLue: ${blue1}`);



const hotel = {
    hotelName:5,
    stars:5,
    capacity: 99
};
console.log(hotel);
const {hotelName, stars,  status = 5} = hotel;
console.log(hotel);



console.log(hotelName, stars, status);
let myProducts = {fruits: "apples", vegetable: "tomatoes",};
console.log(myProducts.fruits);
console.log(fruits);
cosole.log(vegetable);





const myTheacher = "lfdlkdflkdflk";
const course = "front";
const group ={

};

const hotel9 = {
    name9 ="sdfdsf",
    star9: 5,
    fgfg: ""
};
console.log(hotel9);

const {name9, ...rest} = hotel9;

console.log(hotel9);

const rgb = [200, 455, 100];
const [red, green, blue] = rgb;


const rgb2 = [200, 100, 255];
const [ red2, green2, blue2, alfa2 =5 ] = rgb2;
console.log(alfa2);


const rgb3 = [233, 254, 999];
const [red3, ...colors] = rgb3;
console.log(red3);
console.log(colors);
console.log(rgb3);
const rgb4 = [111, 222, 333];
const [ , , blue4] = rgb4;
console.log("blue4", blue4);
