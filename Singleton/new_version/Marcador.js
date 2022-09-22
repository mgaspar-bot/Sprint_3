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

class Marcador { 
	constructor() {
		if (Marcador.instance instanceof Marcador) {
			console.log(`Can't create a new instance of Marcador`);
            console.log(`I'm returning a reference to the same instance`);
            return Marcador.instance;
		}
		//Inicialitzem properties
		this.jocs=[]
            //Ara nomes tindrem una array de objects amb una estructura determinada que representa el estat de cada joc

		//Singleton
		Object.freeze(this);
        Marcador.instance = this; 

        /*
            this.joc = {
                "nom":"partxis",
                "marcador": {
                    "Marc":45,
                    "Carmen":57,
                    "Alba":78
                }
                                "marcador": {
                                    "jugadors":[
                                        "Marc",
                                        "Carmen",
                                        "Alba"
                                    ],
                                    "puntuacions": [
                                        45,
                                        57,
                                        78
                                    ]
                                }
            }
        */
	}
    registrarJoc(nomJoc) {
        if (this.jocs.every((joc) => (joc.nom != nomJoc))) {
            this.jocs.push({"nom":nomJoc});
        } else {
            console.log('Ja hi ha un joc registrat amb aquest nom, no es poden repetir!');
        }
    }
    afegirJugador(nomJugador,nomJoc) {
        let objecteJoc = this.jocs.filter((joc)=> (joc.nom == nomJoc))
        objecteJoc.marcador[nomJugador] = 0;                          //vaya puta fumada de linia espero que funcioni
        //objecteJoc[marcador][nomJugador]= 0;
    }
    addPunts(nomJugador, nomJoc, increment) {
        let objecteJoc = this.jocs.find((joc)=>(joc.nom==nomJoc))
        objecteJoc.marcador[nomJugador] += increment; //igual que la de dalt pero amb el find
    }
    getGuanyador(nomJoc) {
        let maxPoints = -Infinity;
        let nomGuanyador = "";
        
        let objecteJoc = this.jocs.find((joc)=>(joc.nom==nomJoc))
        let keysArray = Object.keys(objecteJoc.marcador); //Seria mes facil amb dues arrays pero si anem a key value pues a tope key value
        for (key of keysArray) {
            if (objecteJoc.marcador[key] > maxPoints) {
                nomGuanyador = key;
            }
        }
        return `Ha guanyat ${nomGuanyador} amb una puntuacio de ${objecteJoc.marcador[nomGuanyador]}`;
    }
}

module.exports = Marcador;
