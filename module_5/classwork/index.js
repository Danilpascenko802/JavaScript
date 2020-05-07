// "use strict";
// const test1 = 16;
// const test2 = 22;
// const test3 = 24;

// const score = (test1, test2, test3) => {
//     return console.log(test1 + test2+ test3);

// };

// score(test1, test2, test3);

// const totalScore ={
// test1: 16,
// test2: 22,
// test3: 24,
// toGetSum(){
//     return this.test1 + this.test2 + this.test3;
// },
// };
// console.log(totalScore.toGetSum());


// const Project = function(title, theme, clients){
//     this.title = title;
//     this.theme = theme;
//     this.clients = clients;
// };

// const project = new Project("habit's manager", "human", "all types");
// console.log(project);

// const project_fe = new Project("App", "to do list", "all types");
// console.log(project_fe);

// const Human = function(arms, leg, head , body ){
//     this.arms = arms;
//     this.leg = leg;
//     this.head = head;
//     this.body = body ;
// }
// const Danya = new Human(2, 2, 1, 1);
// console.log(Danya);


// // добавление методов
// const Movie = function(name, rate, category, countUser ){
// this.name = name;
// this.rate = rate;
// this.category = category;
// this.countUser = countUser;

// this.greet = function(userName){
//     console.log(`Hi ${userName}, welcome to ${this.name}`)
// };

// this.addUser = function(newUser){
//     this.countUser += newUser;
//     console.log(this.countUser)
// };
// this.removeUser = function(newUser){
//     this.countUser -= newUser;
//     console.log(this.countUser);
// };

// };

// const movi = new Movie("Hero", 9, 10);
// console.log(movi);





// const house = function(colour = "black"){
//     this.colour = colour;
//     this.floors = 4;
//     this.windows = 20;
//     this.doors = 2;
//     this.walls = 2.8;
// };
// const myHouse = new house();
// console.log(myHouse);

// const salesManeger_1 = {
//     name: "Olena",
//     sales:5,
//     sell(product){
//         this.sales +=1
//         return `Maneger ${this.name} sold ${product}`
//     },
// };
// console.log(salesManeger_1.sales);
// console.log(salesManeger_1.sell("Club card"));
// console.log(salesManeger_1.sell("Trainung Card"));
// console.log(salesManeger_1.sales);


// const salesManeger_2 = {
//     name: "Bond",
//     sales:10,
//     sell(product){
//         this.sales +=1
//         return `Maneger ${this.name} sold ${product}`

//     },
// }


// console.log(salesManeger_2.sales);
// console.log(salesManeger_2.sell("Club card"));
// console.log(salesManeger_2.sell("Trainung Card"));
// console.log(salesManeger_2.sales);



// const Maneger = function(name = "meneger", seles = 0){
//     this.name = name;
//     this.seles = seles;
//     this.sell = function (product){
//         this.sales += 1;
//         return `Maneger ${this.name} sold ${product}`
//     } ;
// };
// const maneger_1 = new Maneger("Danil", 3);
// console.log(maneger_1.name);
// console.log(maneger_1.sales);
// console.log(maneger_1.sell("Club card"));
// console.log(maneger_1.sell("Training card"));


// console.log(maneger_1.sales);



// const teacher = {lang_1: 'HTML'}
// const child = {lang_2: 'CSS'}
// console.log(child.lang_1);
// console.log(child.lang_2);
// // ****************************************************************
// child.__proto__ = teacher;
// //************************************************/**/*/*/*//*/**/*/*/ */ */ */
// console.log(child.lang_1);


// const child_2 = {lang_1: 'JS', lang_2: 'CSS'};

// console.log(child_2.lang_1);
// console.log(child_2.lang_2);


// const animal = {eats: true};
// const cat = Object.create(animal);
// console.log(cat);
// cat.barks = true;

// console.log(cat);

// console.log(cat.barks);
// console.log(cat.eats);


// const perentProd = {color: "red", count: 7};
// const childProd = Object.create(perentProd);
// childProd.price = 38;


// for (const key in childProd){
//     console.log("__proto__key:", key);

// }

// for (const key in childProd){
//     if (!childProd.hasOwnProperty(key)) continue;
// console.log("own property:" , key);
// }



// const childProdKeys = Object.keys(childProd);
// console.log(childProdKeys);


const Guest = function(name, room){
    this.name = name ;
    this.room = room;
};
console.log("object with method constructor", Guest.prototype);

const newGuest = new Guest("Danil", 30);
console.log(newGuest);

Guest.prototype.newMethod = function(){
    console.log(`метод функции-консруктора - name ${this.name} room: ${this.room}`);
    
}
newGuest.newMethod();

const Hero = function(name, xp){
    this.name = name;
    this.xp = xp;
};
Hero.prototype.gainxp = function(amount){
    console.log(`${this.name} gained ${amount} exp pints`);
    this.xp +=amount;
}
const mango = new Hero("Mango", 1000);
console.log(mango);
mango.gainxp(500);
console.log(mango);


const Warrior = function(name, xp, weapon){
    Hero.call(this, name, xp);
    this.weapon = weapon;

    
};
Warrior.prototype.attack = function(){
    console.log(`${this.name} arrack with ${this.weapon}`);

};
const poly = new Warrior("Poly", 200, "sword");

console.log(poly);
poly.attack();
// poly.gainxp();


const Warrior1 = function(name, xp, weapon){
    Hero.call(this, name, xp);
    this.weapon = weapon;
}

Warrior1.prototype = Object.create(Hero.prototype);
Warrior1.prototype.constructor = Warrior1;


Warrior1.prototype.attack = function() {
    console.log(`${this.name} attack with ${this.weapon}`);


};

const poly1 = new Warrior1("Poly", 200, "sword");
poly.attack();



