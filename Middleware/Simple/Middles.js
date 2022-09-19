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

class Middleware {
    constructor(){
        this.reqM = {}; //objecte on guardarem la req per passar-la
        this.route= [];
    }
    appendToRoute(fn){
        if (typeof fn === "function") {
            this.route.push(fn);
        }
    }
    executeRoute(reqA, func){
        this.reqM = reqA; //estic assignant una referencia al objecte request, quan transformo un transformo laltre pq reqA i reqM apunten al mateix objecte en memoria
        /* demostracio: 
        console.log(this.reqM === reqA);                true
        const r = {                                     
            values: reqA.values                                 r conte el mateix que reqA                          
        };
        console.log(r === reqA);                                false                            */
        for(let fn of this.route) {
            fn.call(this, this.reqM)
        }
        return func.call(this, this.reqM); //li posem el return pq torni el mateix que la original
    }
}

module.exports = Middleware;