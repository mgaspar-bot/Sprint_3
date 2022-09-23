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
/*
Decidim doncs que la classe Marcador només tindrà la lògica de
Singleton i guardarà els jocs i puntuacions
    registerJoc: build Json
    addPuntsJugador(joc, jugador, punts): search index of jugador, change that index puntuacions
    returnJSON(joc): search joc, return its JSON

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
	}
    registrarJoc(nomJoc, arrayNomsJugadors) {
        if( !(this.jocs.every((joc) => (joc.nom != nomJoc)) ) || !(arrayNomsJugadors instanceof Array) || new Set(arrayNomsJugadors).size !== arrayNomsJugadors.length ) {
            return console.log('Necessito un nom de joc únic i una array amb els noms de jugadors, tambe unics entre ells');
        }
        let newJoc = {
            "nom":nomJoc,
            "jugadors":arrayNomsJugadors,
        }
        newJoc["puntuacions"] = [];
        for (let i = 0; i < arrayNomsJugadors.length; i++){
            newJoc.puntuacions.push(0);
        }
        this.jocs.push(newJoc);
    }
    addPunts(nomJugador, nomJoc, increment) {
        let objecteJoc = this.jocs.find((joc)=>(joc.nom ===nomJoc)) //buscar joc
        let i = objecteJoc.jugadors.findIndex((jugador)=> (jugador === nomJugador)) //buscar jugador
        objecteJoc.puntuacions[i] += increment; //incrementar puntuacio al index del jugador
    }
    //podria ficar els checks de coses a Joc
    getGameState(nomJoc) {
        let objecteJoc = this.jocs.find((joc) => (joc.nom === nomJoc) );
        
        return (JSON.parse(JSON.stringify(objecteJoc)));
            //et torno una copia del objecte pero no una referencia a ell
            //el meu objecte nomes el modifico jo, que soc el arbit
    }
    showAllGames() {
        console.log('Show all games:');
        for (let joc of this.jocs) {
            console.log(joc);
        }
        console.log('\n\n');
    }
}

module.exports = Marcador;
