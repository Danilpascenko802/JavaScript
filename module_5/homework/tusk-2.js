"use strict";
// MODULE 5    task-2.js
// Задание 1
// Напиши класс User для создания пользователя со следующим свойствами:
class User {
  constructor(name, age, followers){
      this.name = name;
      this.age = age;
      this.followers = followers;
      
  }
  getInfo(){
   return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
   
  };

};

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
const mango = new User('Mango', 2, 20);
console.log(mango);
mango.getInfo(); // User Mango is 2 years old and has 20 followers
const poly = new User('Poly', 3, 17);
poly.getInfo(); // User Poly is 3 years old and has 17 followers
// Задание 2
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:

class Storage {
  constructor(array){
   this.items = array;
  };

  getItems(){
    return this.items;
  };
  addItem(item){
    return this.items.push(item);
  };
  removeItem(item){ // У тебя не работает этот метод Давай исправляй !!!!
    let i;
    let indx = items.indexOf(item)

    for(i = 0; i < this.items.length; i +=1){
      
      if(this.items[i] === item){
        return this.items.splice(indx, indx);
      }
    };
  };
}
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Задание 3
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
class StringBuilder {
  constructor(str){
    this._value = [];
    this._value.push(str)
  };
  get value(){
    return this._value.join("");
  }
  append(str){
    this._value.push(str);
    this._value.join("") 
  }
  prepend(str){
   this._value.unshift(str)
   return this._value.join("") 
  }
  pad(str){
    this._value.unshift(str);
    this._value.push(str)

  }

}



const builder = new StringBuilder('.');
 
builder.append('^');
console.log(builder.value); // '.^'
 
builder.prepend('^');
console.log(builder.value); // '^.^'
 
builder.pad('=');
console.log(builder.value); // '=^.^='
// Задание 4
// Напиши класс Car с указанными свойствами и методами.
class Car {
  static getSpecs(car){
    console.log("maxSpeed:",car.maxSpeed)
    console.log("speed:",car.speed)
    console.log("isOn:",car.isOn)
    console.log("distance:",car.distance)
    console.log("price:",car.price)
  }
  // Добавь статический метод `getSpecs(car)`,
  // который принимает объект-машину как параметр и выводит
  // в консоль значения свойств maxSpeed, speed, isOn, distance и price.
 
  // Конструктор получает объект настроек.
  // Добавь свойства будущего экземпляра класса:
  //  speed - текущая скорость, изначально 0
  // price - цена автомобиля
  // maxSpeed - максимальная скорость
  // isOn - заведен ли автомобиль, значения true или false. Изначально false
  // distance - общий километраж, изначально 0
  constructor(maxSpeed, price, speed = 0, distance = 0,  isOn = false, ){
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get _price(){
    return this.price;
  };
  set _price(price){
    return this.price === price;
  }
  // Добавь геттер и сеттер для свойства price,
  // который будет работать с свойством цены автомобиля.
 
  // Добавь код для того чтобы завести автомобиль
  // Записывает в свойство isOn значение true
  turnOn(){
    return this.isOn = true;
  }
 
  // Добавь код для того чтобы заглушить автомобиль
  // Записывает в свойство isOn значение false,
  // и сбрасывает текущую скорость в 0
  turnOff(){
    this.isOn = false;
    this.speed = 0;
  }
 
  // Добавляет к свойству speed полученное значение,
  // при условии что результирующая скорость
  // не больше чем значение свойства maxSpeed
  accelerate(value){
    this.speed =+ value
    if(this.speed  <= this.maxSpeed){
      return this.speed 
    }else{
      return "ERROR!!! this speed is imposible for this car";
    }
  }
 
  // Отнимает от свойства speed полученное значение,
  // при условии что результирующая скорость не меньше нуля
  decelerate(value){
    this.speed === this.speed - value
    if(this.speed < 0){
      return "ERROR!!! this speed is imposible for this car"
    }else{
     return this.speed;
    }
  }
 
  // Добавляет в поле distance киллометраж (hours * speed),
  // но только в том случае если машина заведена!
  drive(hours){
    if(this.isOn === true){
      this.distance = hours * this.speed;
      return this.distance;
    };
    
  }

}
 
const mustang = new Car(200, 2000);
 
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
 
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
 
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
 console.log("")
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
 
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
