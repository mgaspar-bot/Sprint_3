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
const calcu = require('./calcu.js');

class Middleware {
    constructor(routeName) {
        this.routeName = routeName;
        this.middlewares = [];
    }
    
    
}


/*
Tal com ho estic entenent la gracia d'aquest exercici es imitar la implementacio de middlewares que fa express.js

Un "middleware" és una funció que s'executa entre que el server rep la request i envia la resposta, ja sigui per
processar la request, comprovar dades o el que sigui abans d'enviar la resposta.

En express.js el patró s'implementa amb les funcions app.use(funcioMiddleware) i amb uns callbacks especifics que contenen
tres arguments (request, response, next)  on request i response son dos objectes que et permeten fer coses amb la request i la
response i next és una funció que quan la crides (next()) se'n va al següent middleware.

Imagino doncs que el que cal fer és rebre el json de la request i segons la operació que ens demani seguir una ruta o una altra
de processat de la request per tornar la response adequada (caldra doncs definir "rutes" enllaçant middlewares d'alguna manera).

La aplicació "basica" que ens demana el primer apartat del enunciat te la suma la resta i la multiplicació, en base a les quals podem
construir les altres operacions
    · 1 rebre parametres en json. Desempaquetar-los per saber quina operació em
        demanes i ficar els numeros en una array 
        Normalment la calcu rebria la request i enviaria la response sumant, restant o multiplicant
        tots els parametres però:
    · 2 crear una classe que emagatzemi middlewares
    · 3 afegir a la invocació de la response normal middlewares que "pre-processin" els numeros i acabes tornant la sua, resta o multi
        de tots els valor pero cadascun al quadrat, cub o /2
*/

