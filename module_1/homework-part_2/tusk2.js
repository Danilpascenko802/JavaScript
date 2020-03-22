"use strict";
console.log("TUSK_2")
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


