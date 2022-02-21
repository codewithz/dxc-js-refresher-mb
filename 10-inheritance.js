class Person {

    constructor(firstName, lastName) {
        this.name = `${firstName} ${lastName}`;
    }

    walk() {
        console.log(this.name + " is Walking")
    }


}


class Trainer extends Person {

    constructor(firstName, lastName, qualification) {
        super(firstName, lastName);
        this.qualification = qualification;
    }

    train() {
        console.log(`${this.name} is training!!`);
        console.log(`Their qualification is ${this.qualification}`);
    }
}

const trainer = new Trainer("Zartab", "Nakhwa", "Masters in IT");
trainer.train();
