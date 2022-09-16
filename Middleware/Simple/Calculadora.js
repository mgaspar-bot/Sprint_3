/*
Crea en un fitxer inicial una petita aplicació que sumi, 
    resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi 
    middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, 
    el cub i la divisió entre 2 dels operands inicials en 
    cadascuna de les operacions. 
    Invoca les execucions de la suma, la resta i la 
    multiplicació, de manera que es vagin mostrant 
    per la consola les modificacions que es van fent als 
    valors abans del resultat final.
*/

class Calculadora {
    suma(values) {
        let resultat = 0;
        for (let value of values) {
            resultat += value;
            console.log(resultat);
        }
        return resultat;
    }
    resta(values) {
        let resultat = values[0]; //Cal que values sempre sigui array
        console.log(`Començem resta amb: ${resultat}`);
        for (let i = 1; i < values.length; i++) {
            resultat -= values[i];
            console.log(resultat);
        }
        return resultat;
    }
    multiplica(values) {
        let resultat = 1;
        for (let value of values) {
            resultat *= value;
            console.log(resultat);
        }
        return resultat;
    }
}

module.exports = new Calculadora();