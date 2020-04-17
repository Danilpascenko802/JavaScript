"use strict";
console.log("Tusk_1");
// ============== 1 =========================================
// Напиши функцию toPassTests как FUNCTION EXPRESSION 
// (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая выводит пользователю всплывающее окно с сообщением
// Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
const toPassTest = function(){
    let modalwindow = alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!")
};

// // ARROW FUNCTION
// // тут объяви функцию как ARROW FUNCTION
const toPassTest2 = () => alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!") ;

// вызов функции
// тут вызывай функцию


console.log(toPassTest());
console.log(toPassTest2());



console.log("TUSK_2");
// {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво};
// ============== 2 =========================================
// Напиши функцию checkAge как FUNCTION EXPRESSION 
// (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая проверяет значение возраста, которое пользователь ввел в модальное окно
// и выводит пользователю всплывающее окно с сообщением
// если возраст равен или более 18, то - Here you are! You are got access!
// в остальных случаях - Sorry, you can't to get access
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
 const chekAge2 = function(){
const modalWindow2 = prompt("Enter your age!");
modalWindow2 >= 18 ? alert("Here you are! You are got access!") : alert("Sorry, you can't to get access");
 }
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
 const chekAge3 = () => {
    const modalWindow2 = prompt("Enter your age!");
    modalWindow2 >= 18 ? alert("Here you are! You are got access!") : alert("Sorry, you can't to get access");    
 }
// вызов функции
// тут вызывай функцию
 
console.log(chekAge2());
console.log(chekAge3());



console.log("TUSK_3");

// ============== 3 =========================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию toGetCost(message, pricePerWord)
// как FUNCTION EXPRESSION и как ARROW FUNCTION
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении



let  modalWindow3;
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION

const toGetCost = function(message, pricePerWord){
    message = message.split(' ');
    let Price = message.length * pricePerWord;
    return Price;
}

// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
   const toGetCost2 = (message2, pricePerWord2) => {
    message2 = message2.split(' ');
    let Price2 = message2.length * pricePerWord2;
    return Price2;
   }
// вызов функции
// используй эти консоли для проверки своего кода
 
console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180
 
console.log(toGetCost2("To be, or not to be, that is the question", 10)); // 100
console.log(toGetCost2("Whether 'tis nobler in the mind to suffer", 20)); // 160
console.log(toGetCost2("The slings and arrows of outrageous fortune,", 40)); // 280
console.log(toGetCost2("Or to take arms against a sea of troubles", 20)); // 180


// ============== 4 ==========================================
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Banana', 'Ajax']
// с индексом 0 будет выведено '1 - Mango',
// а для индекса 2 выведет '3 - Ajax'.
// const array = ['Mango', 'Banana', 'Ajax'];
console.log("TUSK_4");
let j;
let i;
// // FUNCTION EXPRESSION
 const logItems = function(array){
    for (let i = 0; i < array.length; i++){

        console.log(`${i+1} - ${array[i]}`);

    }

 }

// Вызовы функции для проверки кода
logItems([
    "Wolverine",
    "Thor",
    "Iron Man",
    "Deadpool",
    "Nick Fury",
    "Colossus"
  ]);
   
  logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
   
  


  // ============== 5 =========================================
// Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов lose и not. Если нашли запрещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.
 console.log("TUSK_5");


// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
  const checkTheWord = function(message){
      message = message.split(" ");

      for(let i = 0; i < message.length; i++){
        i = message[i];

          if(message.includes("not")){
              return true
          };

          if(message.includes("lose")){
            return true
          };

          return false
      }
  }
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
 const checkTheWord2 = (message2) => {
    message2 = message2.split(" ");

    for(let i = 0; i < message2.length; i++){
      i = message2[i];

        if(message2.includes("not")){
            return true
        };

        if(message2.includes("lose")){
          return true
        };

        return false
    }
 }
// вызов функции
// используй эти консоли для проверки своего кода
console.log("checkTheWord")
console.log(checkTheWord("Than fly to others that we know not of?")); // true
console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
console.log(checkTheWord("And enterprises of great pitch and moment")); // false
console.log(checkTheWord("And lose the name of action")); // true
console.log("checkTheWord2")
console.log(checkTheWord2("Than fly to others that we know not of?")); // true
console.log(checkTheWord2("Thus conscience does make cowards of us all")); // false
console.log(checkTheWord2("And enterprises of great pitch and moment")); // false
console.log(checkTheWord2("And lose the name of action")); // true


// ============== 6 =========================================
// Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
// принимающую при вызове все аргументы в виде псевдомассива arguments,
// Функция суммирует все полученные аргументы, независимо от их количества при вызове.
// в переменную totalSum и выводит это значение в консоль
 console.log("TUSK_6");
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
const countTestsScore = function(){
    let totalsum = 0;
    for(let i = 0; i < arguments.length; i ++){
        totalsum += arguments[i];
        // console.log(i)
    }
    return console.log(totalsum);
}
// Вызовы функции для проверки кода

countTestsScore(16, 22, 23); // 61
countTestsScore(15, 20, 22, 20); // 77
countTestsScore(14, 19, 21, 20, 23); // 97 




 // ============== 7 =========================================
// Напиши функцию myNewArrowFunction() как ARROW FUNCTION,
// принимающую при вызове все аргументы с помощью ...rest ,
// и выводит массив этих аргументов в консоль
 console.log("TUSK_7");
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
const myNewArrowFunction = (...args) => {
return console.log("arguments:", args)
}
// Вызовы функции для проверки кода
myNewArrowFunction(1, 2, 3); // укажи результат 
myNewArrowFunction(100, 200, 300, 400, 500); // укажи результат 
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); // укажи результат 

