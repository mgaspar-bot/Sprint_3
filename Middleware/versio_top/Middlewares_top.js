/*
La idea de la versio top es que una instancia de la classe middle contingui les mateixes
metodes que la classe original pero quan cridi els metodes, abans executi els 
middlewares que li hagis posat.
D'aquesta manera pots utilitzar el middleware de la mateixa manera que utilitzaves la
classe original, la instancia amb middlewares envolta ("wraps") la original
*/
class MiddlewareTOP {
    constructor (target) {
        this.target = target;
        this.req = {}; //objecte on guardaras els parametres de la request
        this.middlewareRoute = []; //En aquesta array van els middlewares a executar abans de fer la crida al mètode que sigui

        //Ara creem les funcions de la instancia Middle:
        let prototype = Object.getPrototypeOf(this.target); //Ojo pq els metodes de la classe estan al prototype i NO a la instancia
        let methodNamesArray = Object.getOwnPropertyNames(prototype);
        for (let methodName of methodNamesArray) {
            if (methodName != "constructor"){ //No volem sobreescriure el constructor d'aquesta classe
                this[methodName] = this.decorateMethodOfTarget(methodName);
            }
        }
    }

    decorateMethodOfTarget(methodName) { 
        return function (arg) {
            this.req = arg; //el argument que se li passa a la funcio original es la request, aixi que em guardo una referencia a ella en aquesta classe
            this.executeMiddlewareRoute();
            
             return this.target[methodName].call(this, this.req); //amb els corchetes puc utilizar el VALOR de la variable "methodName". Si fes target.methodName todo mal
            //recorda que amb el return, la decorada torna el mateix que la original
            /*
            Una funcio de la instancia middle ha de fer exactament el mateix que una funcio de la 
            original però executant abans la ruta de middles:
                Primer em guardo els arguments que li passin a la funcio original en el objecte this.req
                
                Després executo tots els middlewares que s'hagin afegit, que actuaran sobre i modificaran this.req
                
                Finalment faig la crida a la funcio original passant-li this.req, que es els arguments que hagi rebut
                pero "digerits" pels middles
            */
        }
    }
    executeMiddlewareRoute(i ){
        // for (let middle of this.middlewareRoute) {
        //     middle.call(this, this.req);
        // }
        console.log(i);
        if (i === undefined) i = 0;
        if (i === this.middlewareRoute.length -1) return;
        console.log(i);

        this.middlewareRoute[i].call(this, this.req, this.executeMiddlewareRoute(i +1))
    }
    use(func) {
        this.middlewareRoute.push(func);
    }
}

module.exports = MiddlewareTOP;