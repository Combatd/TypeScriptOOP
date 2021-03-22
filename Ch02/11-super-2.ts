export class Animal {
    age: number;
    legs: number;
    name: string;
    lives: number = 1;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    meow(): string {
        return 'ROAR! ROAR! ROAR!';
    }
}

export class Cat extends Animal {
    lives: number = 9;

    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        super.meow();
        super.lives; // returns 9, overrides property

        return 'MEOW! HISS! HISS!';
    }
}
