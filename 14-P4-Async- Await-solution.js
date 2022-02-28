
console.log('Before');

async function displayRepos() {
    const user = await getUser(1);
    console.log("User:", user);
    const repos = await getRepositories(user.gitUser);
    console.log("Repos:", repos);
}

displayRepos();

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
