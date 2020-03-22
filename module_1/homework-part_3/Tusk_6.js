"use strict"
const credits = 234580;
const pricePerDroid = 3000;
let massage;
let question = Number(prompt("Сколько дроидов вам нужно?"));
let totalPrice = Number(question * pricePerDroid);
console.log(question);
if (question === null){
    massage = "Отменено пользователем!";
}else if (totalPrice > credits){
    massage="Недостаточно средств на счету!";
}else{
    massage= "Вы купили",  question, "дроидов, на счету осталось",credits-totalPrice, "кредитов.";
}
alert(massage);

console.log(question);
console.log(totalPrice);
// console.log(massage);

// console.log(massage);
   