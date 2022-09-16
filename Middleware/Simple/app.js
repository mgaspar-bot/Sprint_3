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
const req = JSON.parse(readFileSync(`./data.json`));

const calcu = require(`./Calculadora.js`);
const Middles = require(`./Middles.js`);
var resp = "";

//console log es el meu "respon al client"
var route = new Middles();

console.log(`
Operacio: ${req.operacio} Middle: ${req.middlewares}
`);

if (req.middlewares === "cub"){
    route.appendToRoute( (numArray) => {
        console.log(`Before: ${req.values}`);
        req.values = req.values.map((num) => num**3)
        console.log(`After: ${req.values}`);
    });
} else if (req.middlewares === "quadrat"){
    route.appendToRoute( (numArray) => {
        console.log(`Before: ${req.values}`);
        req.values = req.values.map((num) => num**2)
        console.log(`After: ${req.values}`);
    });
}else if (req.middlewares === "div2"){
    route.appendToRoute( (numArray) => {
        console.log(`Before: ${req.values}`);
        req.values = req.values.map((num) => num/2)
        console.log(`After: ${req.values}`);
    });  

/*     Abans tenia "numArray" on ara hi ha req.values, i les crides no comartien info
        osigui els middles modificaven ero les oeracions no senteraven
        
        Ho he solucionat fent que tothom modifiqui un objecte en el scope de app i 
        que la crida es faci 
 */}

if (req.operacio === "suma"){
    route.appendToRoute( (numArray) => {
        resp = calcu.suma(req.values);
    });
} else if (req.operacio === "resta"){
    route.appendToRoute( (numArray) => {
        resp = calcu.resta(req.values);
    });
}else if (req.operacio === "multiplica"){
    route.appendToRoute( (numArray) => {
        resp = calcu.multiplica(req.values);
    });
}
route.executeRoute(this, req.values);
console.log(`Resp:`);
console.log(resp);