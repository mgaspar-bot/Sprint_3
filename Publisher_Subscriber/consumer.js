
const amqp = require('amqplib');

const Qname = 'chatRoom2';

(async function establishQ() {
    try {
        const conn = await amqp.connect('amqp://localhost:5672');
        const channel = await conn.createChannel();
        await channel.assertQueue(Qname);
        console.log(`Successfully established or connected to queue with name: ${Qname}`);
    } catch (error) {
        console.log(`

        Error establishing or connecting to queue:
        `);
        console.log(error);
    }
})();

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

module.exports = Qname;