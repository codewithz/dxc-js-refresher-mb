let person = {
    name: 'Zartab Nakhwa',
    age: 31,
    blog: 'www.codewithz.com',
    walk() {
        console.log("Walking")
    },
    talk() {
        console.log("Talking")
    }
}

person.talk();

person.education = 'Masters in IT';
person['city'] = 'Mumbai';


let targetMember = 'car';
let targetValue = 'Honda City';

person[targetMember] = targetValue;

console.log(person)

function test() {

}

person['test'] = test;

console.log(person)