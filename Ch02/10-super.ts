export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    // when inheriting from base class, constructor does not need the same number of params
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}

const dog = new Dog();
const cat = new Cat( {age: 19, legs: 4, name: 'Baby'} );

console.log(dog instanceof Animal); // returns false, only implements an abstraction of Animal
console.log(cat instanceof Animal); // returns true, sub class of Animal