"use strict";
console.log("TUSK_5");
let tests = [
    [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
    [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
    [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
];
for (let i = 0; i < tests.length; i += 1) {
  console.log(tests[i]);
  for (let j = 0; j < tests.length; j += 1) { 
    console.log(tests[i][j]);
  }
}
