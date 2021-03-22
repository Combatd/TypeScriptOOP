// class
export class Message {
    title;
    message;
    id;
}

// prototype
function Message2(title, message, id) {
    this.title = title;
    this.message = message;
    this.id = id;
}

const message2 = new Message2('Hello', 'Wpr;d', 'Infinity');