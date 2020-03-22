"use strict"
const credits = 234580;
const pricePerDroid = 3000;
let massage_t6;
let question_t6 = Number(prompt("Сколько дроидов вам нужно?"));
let totalPrice = Number(question_t6 * pricePerDroid);
console.log(question_t6);
let balance = credits - totalPrice;
if (question_t6 === 0){
    massage_t6 = "Отменено пользователем!";
}else if (totalPrice > credits){
    massage_t6="Недостаточно средств на счету!";
}else{
    massage_t6= `Вы купили ${question_t6} дроидов, на счету осталось ${balance}, кредитов.`;
}
alert(massage_t6);

console.log(question_t6);
console.log(totalPrice);
