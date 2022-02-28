// const p = new Promise((resolve, reject) => {
//     //Kick some async work
//     //....
//     setTimeout(() => {
//         console.log("Some Async Work....");
//         //resolve(1)
//         reject(new Error('Some Error'))
//     }, 2000)
// })

// p
//     .then(result => {
//         console.log("Output from promise resolve:", result)
//     })
//     .catch(error => {
//         console.log("Issue from promise reject:", error)
//     })

//     //--------------------------

console.log('Before');

const p = getUser(1);

p
    .then((user) => {
        return getRepositories(user.gitUser);
    })
    .then(repos => {
        console.log("Repos:", repos);
    });


console.log("After");



function getUser(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Reading user from database ...");
            resolve({ id: 1, gitUser: 'codewithz' });
        }, 2000)
    })


}

function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Making call to github [' + user + '] for fetching repos...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 3000)
    })

}
