const EventEmiter = require('events').EventEmitter;
let em = new EventEmiter();

class Tema {
    constructor (titol) {
        this.titol = titol;
        this.postedMessages = [];
        this.subs = [];
    }
    subscribe (observer) {
        this.subs.push(observer);
        em.on(this.titol, (message) => {observer.notify(message) } );
    }
    postMessage(message, observer) {
        if (this.subs.includes(observer)){
            message = `In ${this.titol}-> ${observer.name} : ${message}`;
            this.postedMessages.push(message);
            em.emit(this.titol, message);
        }
    }
}

module.exports = Tema;