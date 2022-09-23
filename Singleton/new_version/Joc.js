const Marcador = require("./Marcador");

class Joc {
    constructor (nom) {
        this.marcador = new Marcador();
        this.nom = nom;
        this.jugadors = [];
        this.guanyador;
    }
    registrarJugador(nomJugador) {
        this.jugadors.push(nomJugador);
    }
    registrarTotsJugadors(arrayJugadors) {
        this.jugadors = arrayJugadors;
    }
    startJoc() {
        this.marcador.registrarJoc(this.nom, this.jugadors);
        console.log(`Comenca el joc!`);
        console.log(this.marcador.getGameState(this.nom));        
    }
    ronda() {
        for(let jugador of this.jugadors) {
            this.marcador.addPunts(jugador, this.nom, (Math.floor(Math.random()*10 + 1)));
        }
        console.log(this.marcador.getGameState(this.nom));
    }
    quiGuanya() {
        let estatMarcador = this.marcador.getGameState(this.nom);
        let maxPunts = -Infinity;
        let indG;
        for (let i = 0; i < estatMarcador.puntuacions.length; i++){
            if (estatMarcador.puntuacions[i] > maxPunts) {
                maxPunts = estatMarcador.puntuacions[i];
                indG = i;
            }
        }
        console.log(`${estatMarcador.jugadors[indG]} ha guanyat!`);
    }
}

module.exports = Joc;