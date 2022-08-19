
class Marcador { //si en comptes de class ho faig amb function no puc ficar funcions (metodes) a dintre?
	constructor() {
		if (Marcador.instance instanceof Marcador) { //Si ja existeix una instancia, el constructor et torna una referencia a ella i prou
			return Marcador.instance;
		}
		//Inicialitzem properties
		this.jugadors = [];
		this.punts = [];

		//Singleton
		Object.freeze(this); //Aixo nomes impedeix que es pugui accedir a les properties des de fora amb Marcador.instance.punts
		Marcador.instance = this; 
		
		/* Aquesta última línia és el punt clau per fer el Singleton: afegir una propietat static a la classe
		amb una referencia al objecte instanciat. D'aquesta manera faig "globalment accessible" la 
		referencia a aquesta instancia, la classe en si (el seu espai estatic de memoria) te info sobre la 
		instancia		*/
	}

	//getters i setters
	registrarJugador(jugador) {
		this.jugadors.push(jugador);
		this.punts.push(0);
	}
	setPuntsNom(nom, punts) {
		let index = this.jugadors.indexOf(nom);
		this.punts[index] = punts;
	}
	setPuntsIndex(index, punts) {
		this.punts[index] = punts;
	}
	showState() {
		console.log(`Jugador		Punts
		`);
		for (let i = 0; i < this.jugadors.length; i++) {
			console.log(`${this.jugadors[i]}		${this.punts[i]}`);
		}
	}
}

let m1 = new Marcador();
console.log(Marcador.instance);
let m2 = new Marcador();
console.log(m1 === m2);

m1.registrarJugador(`Alba`); 
m1.showState();
m1.jugadors = `Hola`; //no fa res, ni tan sols llança error pq esta prohibit assignar properties del Marcador
m1.showState();
m1.setPuntsNom(`Alba`, 3); //amb el setter si que tinc dret a modificar coses tambe per aixo funciona el registrar
m1.showState();


s1 = new String();
s2 = new String();
console.log(s1 === s2);

module.exports = Marcador;