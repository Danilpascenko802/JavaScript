"use strict";
console.log("TUSK_1")
let var1 = 1;
let var2 = 0;
let var3 = true;
console.log(var1 > var2);         /* true* var2 меньше var1*/
console.log(var1 > var3);         /* false* потому что true = 1 */
console.log(var1 == var3);        /* true* потому что 1  тоже булеан var3 */
console.log(var1 != var3);        /* false* потому что var1 равен var3*/
console.log(var2 != var3);        /* true* var2 неравен var3*/
console.log(var1 > var2 == var3); /* true* потому что типы данных var3*/
console.log(var1 > var2 > var3);  /* false* потому что var2 не больше var3 поскольку var3 = true = 1 */

// console.log(typeof(var1)); // number
// console.log(typeof(var2)); // number
// console.log(typeof(var3)); // boolean