const readFileSync = require(`fs`).readFileSync;
var reqA = JSON.parse(readFileSync(`./data.json`));
/* var reqA = JSON.parse(`{
    "values": [
        3,4,5,6,7
    ]
}`) */

const calcu = require(`../Calculadora.js`);
const MiddleTop = require(`./Middlewares_top.js`);

var app = new MiddleTop(calcu);


app.use( function (req) {
    console.log(`Before first middleware(**3): ${req.values}`);
    req.values = req.values.map((num) => num**3)
    console.log(`After: ${req.values}`);
});
app.use( function (req) {
    console.log(`Before 2nd middleware(**2): ${req.values}`);
    req.values = req.values.map((num) => num**2)
    console.log(`After: ${req.values}`);
});
app.use( (req) => {
    console.log(`Before 3rd middleware(/2): ${req.values}`);
    req.values = req.values.map((num) => num/2)
    console.log(`After: ${req.values}`);
});

//Ara puc cridar els metodes de la classe calculadora directament des de app
console.log(app.suma(reqA));

reqA = {values: [1,2,3,4,5]}; //si vaig passant el mateix objecte req els numeros es fan molt grans
console.log(app.multiplica(reqA));

reqA = {values: [7,3,9,2,6]};
console.log(app.resta(reqA));