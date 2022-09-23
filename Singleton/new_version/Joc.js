/*
Boníssima feina amb el singleton, t'has complicat una mica 
més del que calia... podries haver fet els jugadors i el joc 
simulat afegint i treient punts "a mà".  Sobre el patró en si, 
el singleton està bé, però els mètodes haurien de ser del joc, 
de manera que inicialitzis més d'un joc, afegeixis jugadors als 
jocs i puguis afegir/treure punts i mirar qui es el guanyador 
de cada joc. Al marcador no s'hi hauria d'accedir 
directament, sino només tenir-hi acces els jocs.
*/


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
        // let maxPunts = estatMarcador.puntuacions.reduce((p,c) => p > c ? p : c);
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