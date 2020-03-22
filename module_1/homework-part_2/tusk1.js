"use strict";
console.log("TUSK_1")
let var1 = 10;
let var2 = 20;
let var3 = 30;
console.log(var1 > var2);         /* false* var1 не больше var2*/
console.log(var1 > var3);         /* false* var1 не больше var3 */
console.log(var1 == var3);        /* false* var1 не var3 */
console.log(var1 != var3);        /* true* var1 не равен var3*/
console.log(var2 != var3);        /* true* var2 неравен var3*/
console.log(var1 > var2 == var3); /* false* потому что то что var1 не больше var2 не ровняется var3*/
console.log(var1 > var2 > var3);  /* false* потому что var1 не больше var2 и var2 не больше var3  */

