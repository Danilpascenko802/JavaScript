 "use strict";
// // ==================== 1 ========================
// // Напиши скрипт, который, для объекта user, последовательно:
// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'coding'
// // заменяет значение premium на false
// // выводит с помощью функции toShowUpdatedUser(obj) содержимое переданного ей
// // объекта user, в формате пар (ключ:значение), используя Object.keys() и for...of
 console.log('Tusk_1');
const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
  };
  // console.log(user);
//   // твой код изменения объекта
   
  const toShowUpdatedUser = function (obj) {
    obj.mood = "happy";
    obj.hobby = "coding";
    obj.premium = false;

    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for(let i = 0; i < keys.length; i ++){
      console.log(`${keys[i]}: ${values[i]}`);
    }
  };


//   // вызови свою функцию и проверь результат
  toShowUpdatedUser(user);
// console.log(user);
//   // name: Semen
//   // age: 15
//   // hobby: coding
//   // premium: false
//   // mood: happy
   
   
//   // ==================== 2 ========================
  // Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  // Функция возвращает число - количество свойств.
  console.log('Tusk_2');
  const countProps = function (obj) {
    const entries = Object.entries(obj); 
    return entries.length;
  };

  // Вызовы функции для проверки работоспособности твоей реализации.
  console.log(countProps({})); // 0
   
  console.log(countProps({ name: "Mango", age: 2 })); // 2
   
  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
   


  // ==================== 3 ========================
  // Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
  // Функция считает общую сумму зарплаты работников и возвращает ее.
  // Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
  console.log('Tusk_3');
  const countTotalSalary = function (employees) {
    let valuesArray = Object.values(employees);
    let total = 0;
    for(let element of valuesArray){
      total += element;
    };
    return total;
  };
   
  // Вызовы функции для проверки работоспособности твоей реализации.
  console.log(countTotalSalary({})); // 0
   
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); // 330
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); // 400
   
   
//   // ==================== 4 ========================
  // Напиши функцию calculateTotalPrice(allProdcuts, productName),
  // которая получает массив объектов и имя продукта (значение свойства name).
  // Возвращает общую стоимость продукта (цена * количество).
console.log('Tusk_4');
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
  ];
const calculateTotalPrice = function (allProdcuts, productName) {
  let total;
  for(let i = 0; i < allProdcuts.length; i +=1 ){
    console.log(allProdcuts[i]);
    let newArray = Object.values(allProdcuts[i]);
    if(newArray[0] === productName){
      total = newArray[1] * newArray[2];
      return total;
    }

  }

};
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
   
  