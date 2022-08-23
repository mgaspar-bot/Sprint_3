/*
Construeix una aplicació que creï diversos Jugadors/es. 
Els jugadors/es podran ser afegits a un Joc, que mostrarà un 
marcador amb les puntuacions i el guanyador/a. L'aplicació ha
 de poder afegir o treure punts a cada jugador/a perquè el
  marcador canviï. La classe Marcador ha d'implementar 
un patró Singleton com a requisit indispensable.
*/

const Jugador = require('./Jugador.js');
const Marcador = require('./Marcador.js');

class Joc1 {
    constructor() {
        this.marcador = new Marcador();
        this.jugadors = [];
    }

    showState() {
        this.marcador.showState();
    }

    registrarJugador (jugador) {
        this.jugadors.push(jugador);
        this.marcador.registrarJugador(jugador);
    }
}

module.exports = Joc1;

