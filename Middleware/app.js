/*
Crea en un fitxer inicial una petita aplicació que sumi, 
    resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi 
    middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, 
    el cub i la "divisió entre 2" dels operands inicials en
    cadascuna de les operacions. Invoca les execucions 
    de la suma, la resta i la multiplicació, de manera que 
    es vagin mostrant per la consola les modificacions que
     es van fent als valors abans del resultat final.
*/

const readFileSync = require('fs').readFileSync;
const request = JSON.parse(readFileSync('./data.json'));
// console.log(data.values.constructor.name);
// console.log(data.operacio.constructor.name);
/*
JSON.parse converteix molt convenientment un json qualsevol en un objecte
així que ara puc accedir a la array de valors amb data.values i tinc dues strings
que m'indiquen la ruta de middlewares que haig de seguir
*/
const calcu = require('./calcu.js');
var resultat;

console.log(`Original request values: ${request.values}`);

switch (request.middlewares) {
    case ('quadrat') :
        
}
switch (request.operacio) {
    case ('suma') :
        resultat = calcu.suma(request.values);
        console.log(resultat);
        break;
    case ('resta') :
        resultat = calcu.resta(request.values);
        console.log(resultat);
        break;
    case ('multiplica'):
        resultat = calcu.multiplica(request.values);
        console.log(resultat);
        break;       
}

