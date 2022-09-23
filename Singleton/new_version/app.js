const Joc = require('./Joc');

const j1 = "Alba";
const j2 = "Marc";
const j3 = "Aina";
const j4 = "Carmen"
const j5 = "Arnau";

const parxis = new Joc('parxis');
const uno = new Joc('uno');

uno.registrarTotsJugadors([j1,j2,j3,j5]);
uno.startJoc();
uno.ronda();
uno.ronda();
uno.quiGuanya();

parxis.registrarTotsJugadors([j1,j2,j3,j5]);
parxis.startJoc();
parxis.ronda();
parxis.ronda();
parxis.quiGuanya();

parxis.marcador.showAllGames();


//encara es poden fer trampes i canviar puntuacions des daqui
// parxis.marcador.jocs[0].puntuacions[0] += -5;
// parxis.marcador.showAllGames();
/*
He fet el paripe del getGameState pq nomes es modifiquessin coses
usant els metodes de Marcdador pero no serveix de res.
Si des d'aqui faig que els indexs de jugadors i puntuacions no corresponguin
em carrego Marcador:
*/

// parxis.marcador.jocs[0].jugadors.splice(0,1);
// parxis.marcador.showAllGames();
// uno.quiGuanya();







