export class Message {
    title: string;
    message: string;
    isSent: boolean;
}

export class Messages extends Array<Message> {
    public getValidMessages(messages: Messages[]: Message[]) {
        return this.filter( (value) => {
            return value.message.trim().length > 0;
        });
    }

    // static methods are always public, under the hood this is Messages.prototype.getValidMessages
    public static getValidMessages(messages: Message[]): Message[] {
        return messages.filter( (value) => {
            return value.message.trim().length > 0;
        });
    }
}

Messages.getValidMessages([]);