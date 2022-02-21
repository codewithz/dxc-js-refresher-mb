//Objects, functions --> camelCasing
//class --> Pascal Casing 

//camelCasing --> oneTwoThreeFour
//PascalCasing --> OneTwoThreeFour

class Person {

    constructor(firstName, lastName) {
        this.name = `${firstName} ${lastName}`;
    }

    walk() {
        console.log(this.name + " is Walking")
    }

}

const person1 = new Person('Zartab', 'Nakhwa');

console.log(person1.name)
person1.walk()

const person2 = new Person("Tom", "Smith");
console.log(person2.name);
person2.walk()
