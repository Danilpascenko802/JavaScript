"use strict";
class Hero_1 {
    constructor(name, xp){
        this.name = name;
        this.xp = xp;
    }
};
const newHero_1 = new Hero_1("Sonia", 1000);
console.log(newHero_1);

console.log(
    "comparison",
    newHero_1.__proto__ === Hero_1.prototype
);

class Hero_2 {
    constructor(name, xp){
        this.name = name;
        this.xp = xp;
    }


GainXp(){
    console.log(`Hero ${this.name} , xp ${this.xp}`);
    }

};

const newHero_2 = new Hero_2("Sonia", 1000);
console.log(newHero_2);


class Hero_3 {
    static staticProp = "abc";
    static staticmMethod(){}

    constructor(name, xp){
        this.name = name;
        this.xp = xp;
         
    }
};


console.log(Hero_3.staticProp);

const newHero_3 = new Hero_3("Danil", 1000);
console.log(newHero_3);



class Hero_4 {
    constructor(name, xp){
        this.name = name;
        this.xp = xp;
    }
    changeName(name){
        this.name = name;
    }
    getName(){
        return console.log(this.name);
    }
}

const newHero_4 = new Hero_4("Danil", 1000);
console.log(newHero_4);
newHero_4.changeName("ALF");
newHero_4.getName();



class Hero_5 {
    constructor(name, xp){
        this.name = name;
        this.xp = xp;
    }
    changeName(name){
        this.name = name;
    }
    getName(){
        return console.log(this.name);
    }
    set name(newName){
        this.name - newName;
        console.log(this._name);
    };
    get name(){
        return console.log(this.name);
    
    }
}



class Hero_6 {
    constructor(name, xp){
        this.name = name;
        this.xp = xp;
    }
    a= 3;
    GainXp = (amount) => {
        this.xp += amount;
        console.log(this.xp);
    }
};
const newHero_6 = new Hero_6("Name", 1000);
console.log(newHero_6);
