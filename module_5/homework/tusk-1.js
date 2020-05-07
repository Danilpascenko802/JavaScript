"use strict";
// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.
// тут пиши функцию-конструктор
const Account = function(login, email){
  this.login = login;
  this.email = email;
}
// тут пиши метод конструктора в prototype 
          Account.prototype.getInfo = function (sdf){
            console.log(`Login: ${this.login}, Email: ${this.email}`);
          }
// тут проверка работоспособности кода
console.log(Account.prototype.getInfo); // function
const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account('Poly','poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
 

 
 
 
 
