const amqp = require('amqplib');
const Qname = require('./establishQ.js');
//el Qname que hem importat és un Buffer, l'hem de passar a 
//pura string pq sino no li agrada a la llibreria
console.log(Qname);
console.log(Qname.toString());
console.log(Qname.constructor.name);

(async function listen () {
    const conn = await amqp.connect('amqp://localhost');
    const chn = await conn.createChannel();
    chn.consume(Qname, (msg) => {
        if(!msg)  return console.log(`Something's wrong, i'm hanging up!`);
        console.log(`Receiver pid: ${process.pid}      time received:${Date.now()%100000}  msg-->
        ${msg.content}
    }`);
    chn.ack(msg);
    }); 


})();
//Consume es un listener que es quedar actiu esperant??