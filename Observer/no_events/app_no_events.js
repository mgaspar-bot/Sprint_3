/*
Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear 
diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un 
missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho
mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema 
(rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i 
mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events.
*/

const Tema = require('./Tema');
const Usuari = require('./Usuari');

const u1 = new Usuari(`Pep`);
const u2 = new Usuari(`Pepa`);
const u3 = new Usuari(`Joan`);
const u4 = new Usuari(`Maria`);
const u5 = new Usuari(`Roc`);
const u6 = new Usuari(`Laia`);
const u7 = new Usuari(`Marc`);
const u8 = new Usuari(`Alba`);
const t1 = new Tema(`Taronjes`);

t1.subscribe(u1);
t1.subscribe(u2);
// t1.subscribe(u3);
t1.subscribe(u4);
t1.subscribe(u5);
t1.subscribe(u6);
t1.subscribe(u7);
t1.subscribe(u8);

u4.sendMessage(t1, `Ei soc la Maria`);
// console.log(u1.notify === u2.notify); //true, notify està al prototype
/*
El tema es que tot i que la funcio notify és la mateixa, el this 
es diferent segons qui la cridi, potser això és el que fa que 
tot i que al afegir listeners estigui afegint una vegada i una altra
la mateixa funcio, els usuaris son notificats correctament
*/ 


