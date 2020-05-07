"use strict";
console.log("TUSK_1");
const homeworkIsDone = function(pass){
  pass = Number(prompt());
  if(pass === 1){
    console.log("homework is done!");
   
  }else{
    console.log("You must to pass homework!");
  };
}
homeworkIsDone();


console.log("TUSK_2")

const homeworkIsDone2 = (pass2) => {
  pass2 = Number(prompt());
  pass2 === 1 ? console.log("homework is done!") : console.log("You must to pass homework")
}
homeworkIsDone2();


console.log("TUSK_3")

const findLongestWord = function(arrStr) {
  arrStr = arrStr.split(' ');
  // console.log(arrStr);
  let longestWord = arrStr[0];
  
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i].length > longestWord.length) {
      longestWord = arrStr[i];
      
    }
    
  }
  return longestWord;
};
console.log(
  findLongestWord(
    "And by opposing end them. To die—to sleep, No more; and by a sleep to say we end"
  )
); // opposing
 
console.log(
  findLongestWord(
    "The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation"
  )
); // consummation
 
console.log(
  findLongestWord(
    "Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub:"
  )
); // perchance




console.log("TUSK_4");
let string;

const formatString = function(string){  
  let string2 = string.split("");
  if(string.length >= 40){
    string2.splice(40, string2.length - 40, "...");
    string = string2.join("");
  }
  return string;
}
 
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка
 
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка
 
console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка
 
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка



