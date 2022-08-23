const Marcador = require('./Marcador.js');
const Marcador_old = require('./Marcador_old.js');

let m1 = new Marcador_old();
console.log(Marcador_old.instance);
let m2 = new Marcador_old();
console.log(m1 === m2);
// console.log(Object.getOwnPropertyNames(m1));

m1.registrarJugador(`Alba`); 
m1.showState();
m1.jugadors = `Hola`; //No fa res ni tan sols llança error. Es per el Object.freeze o pq jugadors es Array i estic provant de reassignar-lo amb string?
m1.jugadors.push(`Hola`); //Aquest si que afegeix un Jugador que es diu Hola :( Com ho fem pq nomes es pugui usar getters i setters?
m2.showState();
m1.setPuntsNom(`Alba`, 3);
m1.showState();


