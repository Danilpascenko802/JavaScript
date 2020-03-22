"use strict";


let counrty;
let price = [100, 250, 170, 80, 120];
// China = 100;
// Chili = 250;
// Austalia = 170;
// India = 80;
// Jamaika = 120;
// switch ((counrty = prompt(toCamelCase("Введи страну")))) {
//   case "China":
//     alert(`Доставка в ${counrty} будет стоить ${price[0]} кредитов`);
//     break;
//   case "Chili":
//     alert(`Доставка в ${counrty} будет стоить ${price[1]} кредитов`);
//     break;
//   case "Austalia":
//     alert(`Доставка в ${counrty} будет стоить ${price[2]} кредитов`);
//     break;
//   case "India":
//     alert(`Доставка в ${counrty} будет стоить ${price[3]} кредитов`);

// }







let  country;
let cost = [100, 250, 170, 80, 120];

switch ((country = prompt(toCamelCase("Введи страну")))) {
    case  "Китай":
   alert(`Доставка в ${country} будет стоить ${cost[1]} кредитов`);
    break;

    case  "Чили":
    alert(`Доставка в ${country} будет стоить ${cost[2]} кредитов`);
    break;

    case  "Австралия":
        alert(`Доставка в ${country} будет стоить ${cost[3]} кредитов`);
    break;

    case  "Индия":
        alert(`Доставка в ${country} будет стоить ${cost[4]} кредитов`);
    break;

    case  "Ямайка":
        alert(`Доставка в ${country} будет стоить ${cost[5]} кредитов`);
    break;

    default:
     alert("В вашей стране доставка не доступна");
}

console.log(`В страну "${country}" достава не доступнa `);


alert(`В страну "${counrty}" достава не доступна ${cost}`);
alert("Доставка в" [country], "будет стоить", [cost], "кредитов");
