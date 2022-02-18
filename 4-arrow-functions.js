function sayHello() {
    console.log('Hello World');
}

let sayHelloAr = () => {
    console.log("Hello World from Arrow Function")
}

sayHello();
sayHelloAr();

//-------------Arrow funtions with args-------------------

function square(number) {
    return number * number;
}


let squareAr = (number) => {
    return number * number;
}

//Single Parameter -- get rid of paranthesis

let sqaureAr1 = number => {
    return number * number;
}

// If the function have only one statement, we can get rid of {} as well as return
// If the statement in the function is a executable function [console.log] 
//else if it as value, it returns it


let squareAr2 = number => number * number;


console.log(square(4));
console.log(sqaureAr1(5));
console.log(squareAr2(6));

////Multiple Parameters ()

function add(a, b, c) {
    return a + b + c;

}

let addAr = (a, b, c) => a + b + c;

//

function someCalculation(a, b, c) {
    const d = a + b;
    const e = a + c;
    return d - e;
}

const someCalcAr = (a, b, c) => {
    const d = a + b;
    const e = a + c;
    return d - e;
}