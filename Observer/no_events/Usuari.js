class Usuari {
    constructor (name) {
        this.name = name;
    }
    notify () {
        console.log(`${this.name} has been notified`);
    }
    sendMessage(tema, message) {
        tema.postMessage(message, this);
    }
}

module.exports = Usuari;