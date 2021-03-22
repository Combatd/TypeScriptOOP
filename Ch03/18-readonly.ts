export class Message {
    readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string) {
        this.id = id;
    }
}

const message = new Message('abc123');
message.id; // returns the value
message.id = '123abc'; // error!