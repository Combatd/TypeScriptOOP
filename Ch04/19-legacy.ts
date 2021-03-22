export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) { }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

// prototype class using TypeScript
function UserLegacy(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    this.doesEmailMatch = function(email): boolean {
        return this.email === email;
    }
}

const user = new UserLegacy('Dylan', 'Israel', 'DylansEmail909@gmail.com');