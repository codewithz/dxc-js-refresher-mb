console.log('Before');

getUser(1, (user) => {
    console.log("User:", user);

    //Get my repos..
    getRepositories(user.gitUser, (repos) => {
        console.log("Repos:", repos)
    })
});

console.log("After");



function getUser(id, callback) {
    console.log("inside user id before timeout")
    setTimeout(() => {
        console.log("Reading user from database ...");
        callback({ id: 1, gitUser: 'codewithz' });
    }, 2000)

}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log('Making call to github [' + user + '] for fetching repos...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 3000)
}
