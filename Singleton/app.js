//Crear Jugadors per tenir-los guardats

//Afegir-los a un Joc on es mostrara el Marcador

//L'aplicació pot canviar els punts dels jugadors durant el Joc

//Marcador es Singleton

const readline = require('readline');
const rl = readline.createInterface( {
	input : process.stdin,
	output : process.stdout
}); 
const Jugador = require('./Jugador.js')

function menu () {
	return new Promise((resolve, reject) => {
	   rl.question(`Què voleu fer? 
		1. Registrar Jugadors
		2.Començar un Joc nou
		3. Veure Jugadors registrats
		0. Adéu!`, (input) => {
		console.log(`I got your input! ${input}`);
		if (input == 1 )     //Recorda! input és string, per aixo amb === NO FUNCIONA pq tambe compara el tipus, 2 === '2' => false
			console.log(`Here would be a call to register Jugadors`);
		else if (input == 2)   //Si només coloques dos iguals ==, intenta fer conversions entre tipus i si que troba la igualtat, 2 == '2' => true
			console.log(`Here would be a call to start a game`);
		else if (input == 3)
			console.log(`Coses`);
		resolve(input);
		});
	});
}

(async function tot () {
	var resp;
	do {
		resp = await menu();
	} while (resp != 0);
	rl.close();
})();
