const readFileSync = require(`fs`).readFileSync;
var reqA = JSON.parse(readFileSync(`./data.json`));
const { nextTick } = require("process");
/* var reqA = JSON.parse(`{
    "values": [
        3,4,5,6,7
    ]
}`) */

const calcu = require(`../Calculadora.js`);
const MiddleTop = require(`./Middlewares_top.js`);

var app = new MiddleTop(calcu);




app.use( function (req, next) {
    console.log(`Before first middleware(**3): ${req.values}`);
    req.values = req.values.map((num) => num**3)
    console.log(`After: ${req.values}`);
    console.log(`start 1`);
    setTimeout(() => console.log(`finish 1`), 1000)
    next();
});
app.use( function (req, next2) {
    console.log(`Before 2nd middleware(**2): ${req.values}`);
    req.values = req.values.map((num) => num**2)
    console.log(`After: ${req.values}`);
    console.log(`start 2`);
    setTimeout(() => console.log(`finish 2`), 1000)
    next();
});
app.use( (req, next3) => {
    console.log(`Before 3rd middleware(/2): ${req.values}`);
    req.values = req.values.map((num) => num/2)
    console.log(`After: ${req.values}`);
    console.log(`start 3`);
    setTimeout(() => console.log(`finish 3`), 1000)
    next();
});

//Ara puc cridar els metodes de la classe calculadora directament des de app
console.log(app.suma(reqA));

reqA = {values: [1,2,3,4,5]}; //si vaig passant el mateix objecte req els numeros es fan molt grans
console.log(app.multiplica(reqA));

reqA = {values: [7,3,9,2,6]};
console.log(app.resta(reqA));