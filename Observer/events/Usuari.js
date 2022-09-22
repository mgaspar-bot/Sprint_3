
class Usuari {
    constructor (name) {
        this.name = name;
    }
    notify (message) {
        console.log(`${this.name} has been notified:
        ${message}`);
        console.log();
    }
    sendMessage(tema, message) {
        tema.postMessage(message, this);
    }
}

module.exports = Usuari;