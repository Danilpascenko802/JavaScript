"use strict";
console.log("TUSK_1");
let pass;
let homework = [];


const homeworkIsDone = function(){
    return pass = Number(confirm("Ну чо там с дз?"));
};
homeworkIsDone(pass, homework);
if(pass === 1){
    homework.push("homework is done!")
}else{
    homework.push("You must to pass the homework!");
}
console.log(homework);
console.log(pass);

console.log("TUSK_2");

const homeworkIsDone2 = () => {
    pass = Number(confirm("Ну чо там с дз?"));
    pass === 1 ? homework.splice(0, 1,"homework is done!") : homework.splice(0, 1,"You must to pass the homework!");
};
homeworkIsDone2(pass , homework);
console.log(homework); 
console.log(pass);




// ============== 3 ========================================
// Напиши функцию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.


// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(
  // var strSplit = str.split(' ');



console.log("TUSK_3");
const findLongestWord = function(str) {
  let arrStr = str.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 1; i < arrStr.length; i += 1) {
    wordLength = arrStr[0].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];
      
      return longestWord;
    }

  }
};
console.log(
  findLongestWord("And by opposing end them. To die—to sleep, No more; and by a sleep to say we end") // все норм
); 
console.log(
  findLongestWord("The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation") // не фурычит
); 
console.log(
  findLongestWord("Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub:") // все норм
); 



console.log("TUSK_4");
let string;

const formatString = function(string){     // 1 вариант не фурычит :(
  string.substr(0,40);
}
string.push("...");



const formatString = function(string){ // 2 выриант тоже не фурычит :(
  if(string.length > 40){
    string.push("...");
    console.log(string);
  }else{
    console.log(string);

  }





console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis purus nec pulvinar iaculis."));

console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
