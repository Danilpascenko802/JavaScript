"use strict";
//imperative
const array = [1, 2, 3, 14, 22, 36];
const filterArray = [];
for (let i = 0; i < array.length; i +=1){
    if(array[i] > 3) {
        filterArray.push(array[i]);
    }
}
console.log('imperative', filterArray);

// declarative

const filteredNumber = array.filter((value) => {
    return value > 3;
});
console.log('declarative', filteredNumber);


///**********clean func */

//impretive dirty func

const dirtyMultiply = (arr, value) => {
    for ( let j = 0; j < arr.length; j +=1){
     arr[j] *= value;
    }
};
dirtyMultiply(array, 5);
console.log("changed array ", array);

//clean func = 
const cleanMultiply = (arr, value) =>{
    const result = [];
    for(let k = 0; k < arr.length; k ++){
     result.push(arr[k] * value);
    }
    return result;
}

console.log("cleanMultiply",cleanMultiply(array, 2));



// ********************************************************

const allNum = [1, 45, 32, 65,];
for (let i = 0; i < allNum.length; i ++){
    console.log(allNum[i]);
};

allNum.forEach((num) => console.log("forEach", num));
allNum.forEach((num, idx) =>
console.log(`forEach index ${idx} value ${num}`)
);



const tests = ["test-1","test-2","test-3","test-4","test-5","test-6"];
tests.forEach((test) => console.log(test));


console.log(allNum);
const doubleNum = allNum.map((num) => num * 2);
console.log("map", doubleNum);
console.log("initial array:", allNum);



const users = [
    {name: "Name1", isActive: true},
    {name: "Name2", isActive: false},
    {name: "Name3", isActive: true},
];
const names = users.map((user) => user.name);
console.log("map", names);




// filter
console.log(allNum);
const filterArray2 = allNum.filter((el) => el >10);
console.log("filter-1", filterArray2);


//example 2 
const activeUsers = users.filter((user) => user.isActive);
console.log("filter:", activeUsers);


const inActiveUsers = users.filter((user) => !user.isActive);
console.log("filter:", inActiveUsers);





//********* find */

const newArr = [1, 2, 3, 2, 1,];
const nextToThree = newArr.find((el) => el > 3);
console.log("find", nextToThree);

const boforeThree = newArr.find((num) => num < 2);
console.log("find", boforeThree);


const five = newArr.find((num) => num === 5);
console.log("find", )



const newUsers = [
    { id: "000", name: "Mango", isActive: true },
    { id: "001", name: "Poly", isActive: false },
    { id: "002", name: "Ajax", isActive: true },
    { id: "003", name: "Chelsey", isActive: false },
];

const user = newUsers.find((user) => user.id === "002");
console.log(user);

const getUserById = (array, id) => array.find((obj) => obj.id === id);



console.log(getUserById(newUsers, "003"));
console.log(getUserById(newUsers, "002"));





//   every / some 

const sumNums = [ 1, 20, 43, 31, 666];
const isBig = (val) => val >= 10;
console.log(sumNums.every(isBig));
console.log(sumNums.some(isBig));



const isBig1 = (val) => val >= 1;
console.log(sumNums.every(isBig1));
console.log(sumNums.some(isBig1));


const isBig2 = (val) => val >= 667;
console.log(sumNums.every(isBig2));
console.log(sumNums.some(isBig2));




// example 2

console.log("example 2")
const fruits = [
    { name: "apples", amount: 3 },
    { name: "bananas", amount: 10 },
    { name: "oranges", amount: 1 },
  ];

  const allAvaible = fruits.every((andrei) => andrei.amount > 0);
  console.log(allAvaible);



  /// reduse

  console.log("initil array", sumNums);
  const newSum = sumNums.reduce((acc, value) => acc + value, 0);
  
  console.log("acc",newSum);

  let total = 0;
  

  const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];


  const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  console.log(likes);


  const countLikes = (tweets) => tweets.reduce((totalLikes, tweet ) => totalLikes = tweet.likes, 0);
  console.log(countLikes(tweets));

  const getTags = tweets => 
  tweets.reduce((allTags, tweet) => {
      allTags.push(...tweets.tags);
      return allTags;

  }, []);



  // === Array.prototype.sort() === Позволяет сортировать элементы массива на месте.
// Помимо возврата отсортированного массива метод sort также отсортирует массив,
// на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// Перебирает
// Изменяет
// Возвращает коллекцию

const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

console.log("before sort:", alpha);
console.log("after sort", alpha.sort());

const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
console.log("before sort:", clients);
console.log("after sort", clients.sort());