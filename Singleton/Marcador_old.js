function Marcador_old () {
    // throw new Error(`Use the getInstance() method to get a new instance`)
    if (Marcador_old.instance instanceof Marcador_old) {
        console.log(`I'm going this way`);
        return Marcador_old.instance;
    }
    this.jugadors = [];
    this.punts = [];
    
    Object.freeze(this);
    Marcador_old.instance = this;
};

Marcador_old.prototype.registrarJugador = (jugador) => {
        // console.log(Marcador_old.instance);
        // console.log(Object.getPrototypeOf(this)); //surt null prototype, es pq this es refereix aqui al Objecte global?
    Marcador_old.instance.jugadors.push(jugador);
    Marcador_old.instance.punts.push(0);
}
Marcador_old.prototype.setPuntsNom = (nom, punts) => {
    let index = Marcador_old.instance.jugadors.indexOf(nom);
    Marcador_old.instance.punts[index] = punts;
}
Marcador_old.prototype.setPuntsIndex = (index, punts) => {
    Marcador_old.instance.punts[index] = punts;
}
Marcador_old.prototype.showState = () => {
    console.log(`Jugador		Punts
    `);
    for (let i = 0; i < Marcador_old.instance.jugadors.length; i++) {
        console.log(`${Marcador_old.instance.jugadors[i]}		${Marcador_old.instance.punts[i]}`);
    }
}

module.exports = Marcador_old;

/* Marcador_old.prototype.getInstance = () => {
    
    if (Marcador_old.instance instanceof Marcador_old) {
        console.log(`Im gong this way`);
        return Marcador_old.instance;
    }
    this.jugadors = [];
    this.punts = [];
    
    Object.freeze(this);
    Marcador_old.instance = this;
} */

/*
Al escriure-ho aixi com a funció, sembla que no podem utilitzar el
el 'this' pq es refereix al Objecte global (crec que aixo passa a totes funcions)
Sigui com sigui el this no es refereix a la instància que estigui cridant 
a aquell mètode en concret, així que cal que utilitzem la nostra estimada
propietat instance.
Per alguna raó el this sí que funciona en el constructor (??)
*/
