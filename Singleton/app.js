const readline = require('readline');
const rl = readline.createInterface( {
	input : process.stdin,
	output : process.stdout
}); 

const Marcador = require('./Marcador.js');
const Joc = require('./Joc.js');

function askPlayer (str) {
	return new Promise ( (res, rej) => {
		rl.setPrompt(str);
		rl.prompt();
		rl.on('line', (resposta) => {res(resposta)}); //Sembla ser que estic afegint listeners a lo loco pel mateix event cada cop que crido askPlayer, node em diu
															//que puc generar leaks, com checkejo si ja existeix un listener? Puc reutilitzar-lo?
	})
}

(async function execute () {
	var resp;
	var jugadors = [];
	var marcador = null;
	do {
		resp = await askPlayer(`Què voleu fer? 
		1. Començar un Joc nou
		2. Registrar Jugadors
		3. Veure Jugadors esperant pel següent joc
		4. Esborrar un Jugador
		0. Adéu!
`);
		if (resp == 2 ) {   //Recorda! input és string, per aixo amb === NO FUNCIONA pq tambe compara el tipus, 2 === '2' => false
			let nj = await askPlayer('Com es diu el jugador a afegir?\n');  //Si només coloques dos iguals ==, intenta fer conversions 
			jugadors.push(nj);                                                         //entre tipus i si que troba la igualtat, 2 == '2' => true
		}    
		else if (resp == 1) {
			if (marcador) {
				marcador.clearState(); //Com que sempre es la mateixa instancia, haig de borrar les puntuacions abans de fer un joc nou
            }
			marcador = new Marcador();
			for (j of jugadors) {
				marcador.registrarJugador(j);
			}
			marcador.showState();
			await Joc(marcador);
			jugadors.splice(0,jugadors.length);
		}
		else if (resp == 3) {
			console.log('\n\nJugadors registrats pel següent joc:\n');
			for (j of jugadors) {
				console.log(j);
			}
			console.log('\n');
		}
		else if (resp == 4) {
			let dj = await askPlayer('Com es diu el jugador que no jugarà?\n');
			let index = jugadors.indexOf(dj);
			if (index == -1)  {
				console.log('No hi ha cap jugador amb aquest nom');
			} else {
				jugadors.splice(index, 1);
			}
		}
	} while (resp != 0);
	rl.close();
    console.log(`Vagi bé :)`);
})();
