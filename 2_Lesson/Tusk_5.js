"use strict"
console.log("Tusk_5");
let question = prompt("Enter password!");
const ADMIN_PASSWORD = "qwerty";
let massage;
if(question === null){
    massage = "Отменено пользователем!";
}else if (question===ADMIN_PASSWORD){
    massage = "Добро пожаловать!";
}else if (question!==ADMIN_PASSWORD){
    massage="Доступ запрещен, неверный пароль!";
}
console.log(massage);
alert(massage);

