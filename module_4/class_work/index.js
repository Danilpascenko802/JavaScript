"use strict";
const highOrderFunc = function (callbackFunc){
    const message = "вот так работает кол бэк";
    callbackFunc(message);
};

const showMessage = function (show){ // 
    console.log(show);
};
highOrderFunc(showMessage);

const printMessage = function(message) {
    console.log(message);
  };
  
  const higherOrderFunction = function(callback) {
    const string = 'HOCs are awesome';
    callback(string);
  };
  
  higherOrderFunction(printMessage);
  
// *********



const showHeroes = function(heroes){
console.log(heroes);
};

const MainFunc = function(callback2){

    const heroes = ["Batman", "SuperMan"];
    for (const hero of heroes) {
      
        callback2(hero)
    }
};


MainFunc(showHeroes);
             




//*****************Абстрагирование повторения */
const repeatLog = function (n) {
    let result;
    for (let i =0; i < n; i +=1){
        result = i;
        console.log("Каждая итерация",i);
    }
    console.log("последняя итераци", result);
};
repeatLog(5);






const showResult = function (result2){
    console.log(result2);
};

const showResultWithComment = function(value){
console.log("comment to result:", value);

};
const repeat = function(num, action){
    for (let i = 0; i < num; i +=1){
        action(i);
    }
};
repeat(4, showResult);


repeat(4, showResultWithComment);


// стрелочная анонимна функция
const myArr = [];
console.log("array announced", myArr);

repeat(5, (value) => {
    myArr.push(`element${value + 1}`);

});
console.log("array after func", myArr)



//********************************************************************************************** */
const filterFunc = function (array, cbFunc){
    const filteredArr = [];
    for (const el of array){
        const ok = cbFunc(el);


        if (ok){
            filteredArr.push(el);
        }
    }
    return filteredArr;
};

          

const fruits = [
    {name: "apple", quantity: 200, isFresh: true},
    {name: "grapes", quantity: 150, isFresh: false},
    {name: "bananas", quantity: 100, isFresh: true},
];

const freshFruits = filterFunc(fruits, (fruit) => fruit.isFresh);
console.log("only fresh fruits:", freshFruits);

const fruitsWithQuantity = filterFunc(fruits, (fruit) => fruit.quantity >= 120);
console.log("Those that are more than 120", fruitsWithQuantity);
//********************************************************************************************************** */




// СТЕК ВЫЗОВОВ / КОНТЕКСТ ИСПОЛНЕНИЯ /hell katel


const firstChildFunc = function (){
    console.log("working 1-st nested func");
};

const secondChildFunc = function (){
    console.log("working 2-nd nested func");
};



const parentFunc = function(){
    console.log("start working parent func")
    firstChildFunc();
    secondChildFunc();
    console.log("finished working parent func");
};


parentFunc();




// **************LEXICAL ENVIROMENT ****************************
const x = 10;
const y = 20;
const sum = function(z){
    const x = 100;
    return console.log(x + y + z );
}
sum(30);





const createCounter = function(){
    let privateValue = 0;
    const increment = function(){
        privateValue +=1;
        console.log(privateValue)
    };
    return{
        increment
    };
};
const counterA = createCounter();
counterA.increment();
counterA.increment();
counterA.increment();

const counterB = createCounter();
counterB.increment();
counterB.increment();
counterA.increment();
