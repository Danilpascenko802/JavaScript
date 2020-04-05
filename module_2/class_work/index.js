// "use strict";
// const arr = [];
// console.log(arr);
// const students = ["Danil", "David", "Polina", "Vika"];
// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[5]);

// students[0] = "Loh";
// console.log(students[0]);
// console.log(students);


// students[5] = "Nick";
// console.log(students[4]);
// console.log(students);
// console.log(students.length);

// students.length = 9;
// console.log(students);


// students.length = 4;
// console.log(students);

// for(let i = 0; i < students.length; i +=1){
//     console.log("students item", students[i]);
// }

// for ( let i = 0; i <= 9; i += 3){
//     students.push(`student-${i}`);
// }
// console.log("students list:", students);
// console.log(students.length);


// for (const student of students){
//     console.log(student);
// }


// const name = "Debil";
// console.log(name);
// for (const character of name) {
//     console.log(character);
// }

// const house = ["flat_1", "flat_2","flat_3","flat_4","flat_5"];
// for (const aFlat of house){
//     console.log(aFlat);
// }

// const week = ["monday", "hooiday", "PIZDEZday"];
// for( const aDay of week ){
//     console.log(aDay);
// }
// let studentName ;
// console.log("Имя студента",studentName);
// const studentNew = [
//         "Roy",
//         "Nick",
//         "Helen",
    
//     ];
//     console.log("Список студентов", studentNew);
//     studentName = prompt("enter name");
    
//     for (const student of studentNew){
//             if(student === studentName){
//                     massage = "Все нормас ты есть в базе данных";
//                     break;
//                 }
//                 massage = "Ты дыбиу тебя tута нету иди Атсюда!";
//             }
// console.log(`${studentName}, ${massage}`);


// let studentName = "Roy";

// // *******************************************/
// const carsList = [
//     "BMW",
//     "Toyota",
//     "Mersedes",
//     "Porshe",
//     "Audi",
//     "Lexus",
//     "Honda",
//     "Mazda",
//     "Land Rover",
//     "Nissan",
//     "Subaru"
// ];
// const carsList = [
//     "Land Rover",
//     "Nissan",
//     "Subaru"
// ];
// let massage;

// const myCar = ["Land Rover", "vw"];
// let mycar = carsList[Math.floor(carsList.length * Math.random())];
// console.log(mycar);
// for (const car of carsList){
//     if(car === myCar){
//         massage = "есть пробитие";
//         break;
//     }
//         massage = "Что это за машина?!?!?!";
// }
// console.log(massage)
// let newMessage = "Что это за машина?!?!?!";
// console.log(newMessage);



// // *********************************************************




// const nums = [ 1,2,3,6,78,9,111,54];
// const numMore = 32;
// for (let i = 0; i < nums.length; i +=1){
//     if(nums[i] < numMore) {
//         continue;
//     }
//     console.log(`This number bigger then ${numMore}: ${nums[i]}`);
// }


// const matrix = [
//     [1,2,3,[666,65,78]],
//     [11,22,33],
//     [111,222,333]
// ];
// console.log(matrix[0][3][2]) // 78
// console.log(matrix[2][2]) // 333
// console.log(matrix[1][2]) // 33
// console.log(matrix[2][1]) // 222
// console.log(matrix[2][0]) // 111


// // многомерные массивы
// const matrix = [
//     [1, 2, 3], // [0]
//     [11, 22, 33], // [1]
//     [111, 222, 333] // [2]
//   ];
  
//   console.log(matrix[0][0]); // 1
//   console.log(matrix[0][1]); // 2
//   console.log(matrix[0][2]); // 3
  
//   console.log(matrix[1][0]); // 11
//   console.log(matrix[1][1]); // 22
//   console.log(matrix[1][2]); // 33
  
//   console.log(matrix[2][0]); // 111
//   console.log(matrix[2][1]); // 222
//   console.log(matrix[2][2]); // 333
  
//   // // вложенные циклы для перебора вложенных массивов
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log("Вложенный массив ", matrix[i]);
//     for (let j = 0; j < matrix.length; j += 1) {
//       console.log("Элемент вложенного массива", matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
//   console.log(total);

// const qw = 5;
// const er = 2;
// let god;
// console.log(qw**er);








// // * ***************** 2 урок *******************************************

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(a);
// console.log(b);

// let lastName = "BlaBla";
// let newLastName = lastName;
// console.log(lastName);
// console.log(newLastName);
//  lastName = "13kl;d";
 
// console.log(lastName);
// console.log(newLastName);



// const units = [ "alfa", "beta", "gamma"];
// const newUnits = units;

// console.log(units);
// console.log(newUnits);

// units[0] = "1";
// console.log(units);
// console.log(newUnits);



// units.push("delta");
// console.log(units);
// console.log(newUnits);

// newUnits.unshift("epslion");
// console.log(units);
// console.log(newUnits);

// units.pop("")
// console.log(units);


// newUnits.shift();
// console.log(units);
// console.log(newUnits);

// console.log(units.join(", "));


// const massage = "Welcome to my world!";
// console.log(massage.split(" "));
// console.log(massage.split("w"));
// console.log(massage.split(""));

// console.log(units.indexOf("beta"));

// console.log(massage.includes("to"));
// console.log(massage.includes("WORLD"));


// const fruit = "apple";
// if (fruit === "apple" || fruit === "strwberry" ){
//     console.log.length("its a red fruit");
// }






// const redFruits = ["apple", "strawberry" , "chery"];
// const fruit2 = prompt("Enter a fruit");
// if (redFruits.includes(fruit)){
//     console.log("its a red fruit");
// }else{
//     console.log("its a not red fruit");
// }

// // !!!!!!!!!!!!!!!!!!!!!!!!!!*!*!*!*!*!**!*!***!*!*!**!*!****************!!!!
// // 
// const nuumList = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nuumList.slice(0, 3));
// console.log(nuumList.slice(1, 2));
// console.log(nuumList.slice(1, 5));
// console.log(nuumList.slice());
// console.log(nuumList.slice(3));
// console.log(nuumList.slice(5));
// console.log(nuumList.slice(-2));


// const newNumlist = nuumList.slice(-5);
// console.log("newNumlist", newNumlist);

// // .splice !!!!!!!!!!!!!!!

// УДОЛЯЕТ
// console.log("nuumList", nuumList);
// console.log(nuumList.splice(0, 2));
// console.log("nuumList", nuumList);

// const newNewNumList = nuumList.splice(3, 4);
// console.log("newNewNumList", newNewNumList)
// console.log("nuumList", nuumList);


// // ДОБОВЛЯЕТ ВСТАВЛЯЕТ
// console.log( "numList", nuumList.splice(0, 0, 12));
// console.log( "numList", nuumList)

// console.log( "numList", nuumList.splice(5, 0, 1, 45,));
// console.log( "numList", nuumList)

// console.log( "numList", nuumList.splice(9, 0, 1, 45, 35, 4546464,21));
// console.log( "numList", nuumList)

// // ЗАМЕНЯЕТ
// console.log( "numList", nuumList.splice(3, 1, "JS"));
// console.log( "numList", nuumList)

// console.log( "numList", nuumList.splice(3, 3, "JS", "C++", "C#"));
// console.log( "numList", nuumList)


// const arr1 = ["Hello"];
// const arr2 = ["World"];
// const lang = arr1.concat(arr2);
// console.log(lang.join(", "));


// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const test2 =["17", 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const test3 = ["20", 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];

// const allTests = test1.concat(test2).concat(test3);
// console.log(allTests)

// // ****************************************FUNCTION*********************************************

// const add = function(a, b, c){
//     return a + b + c;
// };

// const result = add(3, 5, 1);
// console.log(result);

// console.log(add(5, 7, 13));


// const fn1 = function(){
//     console.log("first fn");
//     fn2();
//     console.log("Продолжение 1-й fn");
// }

// const fn2 = function(){
//     console.log("second fn");

// }
                
// console.log("start reading main code");
// fn1();
// console.log("continue doing main code after exit from rirst fn");



// const count = function(a = 0, b= 10, c = 1) {
//     console.log(`countFrom = ${a}, countTo = ${b}, step = ${c}`);

//     for (let i = a; i <=b; i += c){
//         console.log(i);
//     }
// };
// count(1, 5);

// const myFunction = function(a,b,c){
//     return a + b + c ;
// }
// const myArrowFunction = (a,b,c) => {a+b+c;
// console.log(myArrowFunction);

// }

// const sum = function(){
//     total = 0;



// for (const argument of arguments ){
//     total += argument;
//     total = total + argument;
//     console.log(argument, total);
// }
// return total;
// console.log(sum(1, 2, 3, 4 ,5 ,6));
// }



// const functionName = function(d,b,c){

// }


// const arrowFunction = (parameters) => a + b + c; {

// };
// arrowFunction(arguments);

// condition ? 




