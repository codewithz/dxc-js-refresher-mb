//--------------var--------------------------------------------------

function sayHello() {

    for (var i = 1; i <= 5; i++) {
        console.log("Inside the for [i]:", i);
    }

    console.log("Outside the for loop [i]:", i);
}

sayHello();

//-----------------let-----------------------------------------------

function sayHi() {
    for (let i = 1; i <= 5; i++) {
        console.log("Value of [i] in for loop:", i);
    }

    // console.log("Outside the for loop [i]:", i);
    // Due to scope issues i is not available outside
}

sayHi();

///---------------------const ---------------------------------

const someValue = "Test";

// someValue = "Test JS";