
function Joc(marcador) {
    console.log('Comença el joc!! \n\n');
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < marcador.punts.length; j++) {
            marcador.addPuntsIndex(j, (Math.floor(Math.random()*10 + 1)));
        }
        console.log(`Ronda ${i}`);
        marcador.showState();
        console.log('\n\n');
    }
    console.log('\n\nSha acabat el Joc!');
    //getGuanyador
    let maxP= 0;
    let indG = -1;
    for(let i = 0; i < marcador.punts.length; i++) {
        if (marcador.punts[i] > maxP) {
            maxP = marcador.punts[i];
            indG = i;
        }
    }
    if (indG != -1)
        console.log(`${marcador.jugadors[indG]} ha guanyat!`);

    console.log(`Fins la següent!`);
    
}

module.exports = Joc;