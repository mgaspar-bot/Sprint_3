/*
Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear 
diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un 
missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho
mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran 
el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció 
dels missatges pels usuaris/es. Utilitza el mòdul events.
*/

const EventEmiter = require('events').EventEmitter;
let em = new EventEmiter();

class Usuari {
    constructor (name) {
        this.name = name;
    }
    notify (message) {
        console.log(`${this.name} has been notified:
        ${message}`);
        console.log();
    }
    sendMessage(tema, message) {
        if (tema instanceof Tema) {
            tema.postMessage(message, this);
        }
    }
}

class Tema {
    constructor (titol) {
        this.titol = titol;
        this.postedMessages = [];
        this.subs = [];
    }
    subscribe (observer) {
        if (observer instanceof Usuari) {
            this.subs.push(observer);
            em.on(this.titol, (message) => {observer.notify(message) } );
        }
    }
    postMessage(message, observer) {
        if (observer instanceof Usuari) {
            message = `In ${this.titol}-> ${observer.name} : ${message}`;
            this.postedMessages.push(message);
            em.emit(this.titol, message);
        }
    }
}

const u1 = new Usuari(`Pep`);
const u2 = new Usuari(`Pepa`);
const u3 = new Usuari(`Joan`);
const u4 = new Usuari(`Maria`);
const u5 = new Usuari(`Roc`);
const u6 = new Usuari(`Laia`);
const u7 = new Usuari(`Marc`);
const u8 = new Usuari(`Alba`);

const t1 = new Tema(`Taronjes`);
const t2 = new Tema(`Patates`);

t1.subscribe(u1);
// t1.subscribe(u2);
// t1.subscribe(u3);
// t1.subscribe(u4);

t2.subscribe(u5)
t2.subscribe(u6)
// t2.subscribe(u7)
// t2.subscribe(u8)


u4.sendMessage(t1, `Ei soc la Maria`); //es poden enviar missatges sense estar subscrit
console.log();
console.log();
u5.sendMessage(t2, `Hola soc el Roc`)



/*
console.log(u1.notify === u4.notify);
Aixo dona true

Tot i que sempre cridem a la mateixa instancia de la funcio
notify, que esta continguda al prototype de Usuari, el 
this canvia en cada crida, node sap des de quin objecte
es crida cada notify i per aixo funcionen les notis encara
que estem afeigint a la array de listeners sempre la mateixa
instancia de la funcio
*/

/*
Igual que passava a les Promises, els Events fan mal de cap
pq el proces d'execució està a trossos. Quan passa un event:

    ·.emit -> emet el event (crida tots els listeners de la Array) 
                però també els envia els arguments que calguin
                el .emit el poses en el lloc (moment?) on tens les
                dades que els listeners han d'utilitzar.

    ·.on ->el callback que li poses serà afegit a la array de listeners que el emitter cridarà quan 
            s'emeti el event.
            En aquest exemple el listener nomé crida al metode "handler" del observer però
            té dues parts importants pq "posa en contacte" la instància en
            concret que havia de ser notificada amb les dades que volia rebre:

            .on( `nomEvent` , (dades) => {instànciaInteressada.metodeHandler(dades)} )
            
            per alguna màgia, al escriure-ho així pots utilitzar el "this" de la instància en concret

    ·metodeHandler -> aqui simplement tens el codi amb el que vols que faci la instancia 
                            interessada en un event quan aquest es dispari.
*/