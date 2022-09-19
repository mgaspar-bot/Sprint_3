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

const readFileSync = require(`fs`).readFileSync;
var reqA = JSON.parse(readFileSync(`./data.json`));

const calcu = require(`./Calculadora.js`);
const Middles = require(`./Middles.js`);

//console log es el meu "respon al client"
var route = new Middles();


//el json nomes te els valors, afegeix sempre els middlewares a la ruta i mostra com req es va modificant
route.appendToRoute( function (req) {
    console.log(`Before first middleware(**3): ${req.values}`);
    req.values = req.values.map((num) => num**3)
    console.log(`After: ${req.values}`);
});
route.appendToRoute( function (req) {
    console.log(`Before 2nd middleware(**2): ${req.values}`);
    req.values = req.values.map((num) => num**2)
    console.log(`After: ${req.values}`);
});
route.appendToRoute( (req) => {
    console.log(`Before 3rd middleware(/2): ${req.values}`);
    req.values = req.values.map((num) => num/2)
    console.log(`After: ${req.values}`);
});

console.log(route.executeRoute(reqA, calcu.suma));

reqA = {values: [1,2,3,4,5]}; //si vaig passant el mateix objecte req els numeros es fan molt grans
console.log(route.executeRoute(reqA, calcu.multiplica));

reqA = {values: [7,3,9,2,6]};
console.log(route.executeRoute(reqA, calcu.resta));
