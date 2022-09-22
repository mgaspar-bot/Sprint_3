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
        this.marcador.afegirJugador(nomJugador, this.nom);
    }
    jugar() {
        for (let nomJugador of this.jugadors){
            this.marcador.afegirJugador(nomJugador, this.nom);
        }
    }
    quiGuanya() {
        console.log(this.marcador.getGuanyador());
    }
}

module.exports = Joc;