console.log("TUSK_1")
let authors = [
    "William Shakespeare", 
    "Guy de Maupassant", 
    "Dante Alighieri", 
    "Mikhail Bulgakov", 
    "Albert Camus", 
    "Erich Maria Remarque"];

authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
console.log(authors);
authors.unshift("Charles Dickens", "Edgar Allan Poe, Gabriel Garcia Marquez");
console.log(authors.length) // дина масива = 11 индексов 10 



console.log("TUSK_2")
let nums = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
nums.shift();
nums.shift();
nums.pop();
nums.pop();
nums.pop();
console.log(nums);



console.log("TUSK_3")
let results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

const removeFromStart = results.splice(0, 2);
const removeFromEnd = results.splice(-3, 3);
console.log(results);
console.log(removeFromEnd);
console.log(removeFromStart);
 


console.log("TUSK_4")
let partOfResults = results.slice(2,7);
console.log(partOfResults);



console.log("TUSK_5")
const doubleResults = results.slice();
console.log(doubleResults);



console.log("TUSK_6")

let oldResults = [];
let evenResults = [];

for (let i = 0; i < doubleResults.length; i += 1){
    
doubleResults[i] % 2 != 0 ? oldResults.unshift(doubleResults[i]) : evenResults.unshift(doubleResults[i]);
    // if (doubleResults[i] % 2 != 0 ){
    //     oldResults.unshift(doubleResults[i]);
    // }else {
    //     evenResults.unshift(doubleResults[i]);
    // }
}
console.log(oldResults);
console.log(evenResults);

console.log("TUSK_7")

const allResults = oldResults.concat(evenResults);
console.log("allResults", allResults);

let includeOne = [];
for (let i = 0; i < allResults.length; i += 1){
    let item = allResults[i] + "";
    console.log(item);
    if (item.includes(1)) { 
        includeOne.push(+item)
    }
}
console.log("includesOne", includeOne);
