"use strict";
// const arr = [];
// console.log(arr);
// const students = ["Danil", "David", "Polina", "Vika"];
// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[5]);

// students[0] = "Loh";
// console.log(students[0]);
// console.log(students);


// students[5] = "Nick";
// console.log(students[4]);
// console.log(students);
// console.log(students.length);

// students.length = 9;
// console.log(students);


// students.length = 4;
// console.log(students);

// for(let i = 0; i < students.length; i +=1){
//     console.log("students item", students[i]);
// }

// for ( let i = 0; i <= 9; i += 3){
//     students.push(`student-${i}`);
// }
// console.log("students list:", students);
// console.log(students.length);


// for (const student of students){
//     console.log(student);
// }


// const name = "Debil";
// console.log(name);
// for (const character of name) {
//     console.log(character);
// }

// const house = ["flat_1", "flat_2","flat_3","flat_4","flat_5"];
// for (const aFlat of house){
//     console.log(aFlat);
// }

// const week = ["monday", "hooiday", "PIZDEZday"];
// for( const aDay of week ){
//     console.log(aDay);
// }
// let studentName ;
// console.log("Имя студента",studentName);
// const studentNew = [
    //     "Roy",
    //     "Nick",
    //     "Helen",
    
    // ];
    // console.log("Список студентов", studentNew);
    // studentName = prompt("enter name");
    
    // for (const student of studentNew){
        //     if(student === studentName){
            //         massage = "Все нормас ты есть в базе данных";
            //         break;
            //     }
            //     massage = "Ты дыбиу тебя tута нету иди Атсюда!";
            // }
// console.log(`${studentName}, ${massage}`);


// let studentName = "Roy";

// *******************************************/
// const carsList = [
//     "BMW",
//     "Toyota",
//     "Mersedes",
//     "Porshe",
//     "Audi",
//     "Lexus",
//     "Honda",
//     "Mazda",
//     "Land Rover",
//     "Nissan",
//     "Subaru"
// ];
// const carsList = [
//     "Land Rover",
//     "Nissan",
//     "Subaru"
// ];
// let massage;

// const myCar = ["Land Rover", "vw"];
// let mycar = carsList[Math.floor(carsList.length * Math.random())];
// console.log(mycar);
// for (const car of carsList){
//     if(car === myCar){
//         massage = "есть пробитие";
//         break;
//     }
//         massage = "Что это за машина?!?!?!";
// }
// console.log(massage)
// let newMessage = "Что это за машина?!?!?!";
// console.log(newMessage);



// *********************************************************




// const nums = [ 1,2,3,6,78,9,111,54];
// const numMore = 32;
// for (let i = 0; i < nums.length; i +=1){
//     if(nums[i] < numMore) {
//         continue;
//     }
//     console.log(`This number bigger then ${numMore}: ${nums[i]}`);
// }


// const matrix = [
//     [1,2,3,[666,65,78]],
//     [11,22,33],
//     [111,222,333]
// ];
// console.log(matrix[0][3][2]) // 78
// console.log(matrix[2][2]) // 333
// console.log(matrix[1][2]) // 33
// console.log(matrix[2][1]) // 222
// console.log(matrix[2][0]) // 111


// // многомерные массивы
// const matrix = [
//     [1, 2, 3], // [0]
//     [11, 22, 33], // [1]
//     [111, 222, 333] // [2]
//   ];
  
//   console.log(matrix[0][0]); // 1
//   console.log(matrix[0][1]); // 2
//   console.log(matrix[0][2]); // 3
  
//   console.log(matrix[1][0]); // 11
//   console.log(matrix[1][1]); // 22
//   console.log(matrix[1][2]); // 33
  
//   console.log(matrix[2][0]); // 111
//   console.log(matrix[2][1]); // 222
//   console.log(matrix[2][2]); // 333
  
//   // // вложенные циклы для перебора вложенных массивов
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log("Вложенный массив ", matrix[i]);
//     for (let j = 0; j < matrix.length; j += 1) {
//       console.log("Элемент вложенного массива", matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
//   console.log(total);

// const qw = 5;
// const er = 2;
// let god;
// console.log(qw**er);