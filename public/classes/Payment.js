export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return ` ${this.recipient} is  owed e${this.amount} for ${this.details}`;
    }
}
