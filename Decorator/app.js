/*
Crea un Decorator en un arxiu que retorni una funció.
 Aquesta funció efectuarà una conversió de moneda 
 a euros multiplicant pel coeficient de conversió del 
 fitxer adjunt currency_conversions.json en funció de 
 la divisa original.
Crea una petita aplicació que calculi el cost d'uns 
quants Articles en euros a partir de les seves divises
 inicials, aplicant diferents conversions que usin el 
 Decorator del punt anterior.
*/
const decoratorShowPrice = require('./decorator');

const product1 = {
    "name": "toy",
    "price":"450",
    "currency":"CNY"
}

const product2 = {
    "name": "car",
    "price":"4500",
    "currency":"GBP"
}

const product3 = {
    "name":"gelat",
    "price":"2",
    "currency":"EUR"
}

const product4 = {
}

const product5 = {
    "name": "hamaca",
    "price":"10",
    "currency":"CAD"
}

function showPrice(...arguments) {
    for(let arg of arguments)
        console.log(`${arg.name}-> ${arg.price} ${arg.currency}`);
}
let decoratedShowPrice = decoratorShowPrice(showPrice);

showPrice(product1, product2, product3, product4, product5);
console.log();
console.log();
decoratedShowPrice(product1, product2, product3, product4, product5)