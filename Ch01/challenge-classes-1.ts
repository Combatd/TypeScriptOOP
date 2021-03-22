/**
 * -----------------------------
 * Challenge 1: Classes
 * -----------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a get to return fullName.
 * 4. Add a method to check if your email param matches the user's current email.
 */

class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set setEmail(email: string) {
        this.email = email;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    checkEmailMatches(email: string) {
        return this.email === email;
    }
}