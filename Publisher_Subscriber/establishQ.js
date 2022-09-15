/*
Utilitzant RabbitMQ com a element imprescindible crea una 
queue on una classe Publisher publiqui missatges que siguin
 llegits per una classe Subscriber. Mostra l'emissió i recepció 
 de cada missatge en consoles diferents.
*/

const amqp = require('amqplib');
/*Així tens funcions que tornen promises

const amqp = require('amqplib/callback_api');
aixi importes funcions que tenen darrere un callback:
(
    amqp.connect('url', (error, connection) => {
        if (err) throw err;
        connection.createChannel((error, channel) => {
            if (error) throw error;
            channel.assertQueue(queue);
            channel.send... /channel.consume...
        })
    })
)
i fas les coses ficant callbacks dins de callbacks
*/

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

module.exports = Qname;