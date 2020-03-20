"use strict"
console.log("Tusk_4");
let ordered = prompt("Сколько вы хотите заказать?");
const total = 100 ;
let answer;
if (ordered <= total){
    answer = "Заказ оформлен, с вами свяжется менеджер";
}else{
    answer = "На складе недостаточно товаров!";
}
console.log(answer);
