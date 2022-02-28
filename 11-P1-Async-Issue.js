console.log('Before');

const user = getUser(1);
console.log(user)

console.log("After");

// Three Ways to deal with asynchronous code 

//Callbacks
//Promises
//Async Await

function getUser(id) {
    setTimeout(() => {
        console.log("Reading user from database ...");
        return { id: 1, gitUser: 'codewithz' };
    }, 2000)

    return 1;
}
