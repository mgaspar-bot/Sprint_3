class Tema {
    constructor(titol) {
        this.titol = titol;
        this.postedMessages = [];
        this.subs = [];
    }
    subscribe(observer) {
        this.subs.push(observer);
    }
    notifyObserver(observer) {
        observer.notify();
    }
    notifyAllObservers() {
        this.subs.forEach((observer) => {this.notifyObserver(observer)} );
    }
    postMessage(message, sender) {
        console.log(`${sender.name}: ${message}`);
        this.postedMessages.push(`${sender.name}: ${message}`);
        // this.notifyAllObservers();
        this.subs.filter((sub) => {return (sub !== sender)}).forEach((subThatIsNotSender) => {this.notifyObserver(subThatIsNotSender)});
                //notify all but the sender
    }
}

module.exports = Tema;