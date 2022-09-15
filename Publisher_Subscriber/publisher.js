const readline = require('readline');
const rl = readline.createInterface( {
	input : process.stdin,
	output : process.stdout
}); 
function ask (str) {
	return new Promise ( (res, rej) => {
		rl.setPrompt(str);
		rl.prompt();
		rl.on('line', (resposta) => {res(resposta)});
    })
}

const amqp = require('amqplib');
const Qname = require('./establishQ.js');

(async function send () {
    // await (function () {setTimeout(() => {process.exit()}, 10 ) }) (); la conexio es lo que tarda, si poso el timeout aqui el missatge no s'envia pero a la linia de sota si que arriba a enviar-se
    const conn = await amqp.connect('amqp://localhost');
    // await (function () {setTimeout(() => {process.exit()}, 10 ) }) ();
    const chn = await conn.createChannel();
    // let msg = await ask('Write below message to send:\n'
    let msg = `Sender pid: ${process.pid}       time sent: ${Date.now() % 100000}`;
    chn.sendToQueue(Qname, Buffer.from(msg));
    (function () {setTimeout(() => {process.exit()}) }) ();
    //es una mena de "envia el process.exit() a la cua" no cal que li posis temps
    //si el sendToQueue estava a la "cua d'execucio", amb el setTimeout posem 
    //el process.exit() al final de la "cua"

    //posar un await davant de sendToQueue no funcionava pq no torna una
    //promise

    /*
Flow control
Channels act like stream.Writable when you call publish or sendToQueue: they 
return either true, meaning “keep sending”, or false, meaning “please wait for a
 ‘drain’ event”.

Those methods, along with ack, ackAll, nack, nackAll, and reject, do not have
 responses from the server. This means they do not return a promise in the 
 promises API. The ConfirmChannel does accept a callback in both APIs, called
  when the server confirms the message; as well as returning a boolean.
    */
})();

