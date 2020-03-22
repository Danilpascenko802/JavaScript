"use strict";
console.log("TUSK_3.1")
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

console.log("TUSK_3.2")
let val ;
console.log(val)
val = "River" ;
console.log(isNaN(val) , `river`);    /* true в каждом случае получается такой ответ потому что мы спашиваем val нот э намбер в этос случаэ тру потому что строка это не число */
console.log(typeof val);  /* string */
val = "Mountain" ;
console.log(isNaN(val) , `Mountain`); /* true аналогично прошлом примеру */
console.log(typeof val);  /* string */
val = 232;
console.log(isNaN(val), `232`);       /* false здесь фолс потому что это есть число. А мы спрашивали, это не число? */
console.log(typeof val);  /* number */
val = true;
console.log(isNaN(val) , `true`);     /* false здесь фолс потому что js использует бинарный код. Для него тру ровняеться 1 поетому это число и потому фолс */
console.log(typeof val); /* boolean */
val = null;
console.log(isNaN(val) ,`null`);      /* false* аналогично прошлому только здесь нуль читаеться как 0 */
console.log(typeof val);  /* object */

console.log("TUSK_3.3")
const alfa = 0.2;
const beta = 0.4;
console.log((alfa*10 + beta*10)/10);

console.log('TUSK_3.4');
let tetra = 12px ;
console.log(tetra);
tetra = 13.34em;
console.log(tetra);

console.log("TUSK_3.5");
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log('TUSK_3.6');
let random = (Math.random() * (19-3) + 3);
random = random.toFixed(2)
console.log(random)


