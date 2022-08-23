class Marcador { //si en comptes de class ho faig amb function no puc ficar funcions (metodes) a dintre? Ho haig de fer amb el prototype
	constructor() {
		if (Marcador.instance instanceof Marcador) {
			console.log(`Can't create a new instance of Marcador`);
            console.log(`I'm returning a reference to the same instance`);
            return Marcador.instance;
		}
		//Inicialitzem properties
		this.jugadors = [];
		this.punts = [];

		//Singleton
		Object.freeze(this);
        Marcador.instance = this; 
		
		/* Aquesta última línia és el punt clau per fer el Singleton: afegir una propietat static a la classe
		amb una referencia al objecte instanciat. D'aquesta manera faig "globalment accessible" la 
		referencia a aquesta instancia, la classe en si (el seu espai estatic de memoria) te info sobre la 
		instancia		
        
        El freeze hauria d'impedir que s'accedeixi des de fora a les properties, pero no ho fa :(
        volia impedir que (per exemple) es fes .jugadors.push() sense passar pel registrarJugador 
        que afegeix el corresponent punts.push(0) */
	}

	//"getters" "setters" i "toStrings"
	registrarJugador(jugador) {
		this.jugadors.push(jugador);
		this.punts.push(0);
	}
    addPuntsIndex(index, punt) {
        this.punts[index] += punt;
    }
	showState() {
		console.log(`Jugador		Punts
		`);
		for (let i = 0; i < this.jugadors.length; i++) {
			console.log(`${this.jugadors[i]}		${this.punts[i]}`);
		}
	}
    clearState() {
        Marcador.instance.jugadors.splice(0,Marcador.instance.jugadors.length);  //El this aqui no funciona, pq??
        Marcador.instance.punts.splice(0,Marcador.instance.punts.length);
    }
    /*destroyInstance() {
        Marcador.instance = null;
        //Perdem la referencia de una i ja s'encarregara el garbage collector
        
        //Aquesta funcio es la forma perfecta de carregar-te la idea de Singleton
        //perds la referencia que hi havia a Marcador, que es la que 
        //utilitzes de control i la resta de scripts encara poden:
        //1. accedir a la antiga instancia si s'han guardat una referencia
                (osigui no estas destruint la instancia)
        //2. utilitzar el new per instanciar-ne una de nova
    }*/
}

module.exports = Marcador;


//module.exports = new Marcador();
    /*sembla que hi ha una forma mes facil de implementar el Singleton en JavaScript que 
    aquesta: escrius la classe normalment i simplement exportes una instancia.
    Suposadament quan altres scripts facin el require només s'executarà el codi una vegada i 
    module.exports sempre contindra la mateixa instancia de Marcador.
    Com pots estar segur de que s'executa només un cop?
    Ho farà un cop i per sempre hi haurà la mateixa instància? No entenc
    */