const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Approach 1
const fileteredArray1 = [];

for (let number of numbers) {
    if (number % 2 == 0) {
        fileteredArray1.push(number);
    }
}

console.log("A1: ", fileteredArray1);

//Approach 2 

function evenFilter(number) {
    return number % 2 == 0;
}

const filteredArray2 = numbers.filter(evenFilter);
console.log("A2 :", filteredArray2);

//Approach 3

const filteredArray3 = numbers.filter(number => number % 2 == 0)

console.log("A3: ", filteredArray3);

//------------- Example 2 ------------

const jobs = [
    { id: 1, position: 'Developer', isActive: true },
    { id: 2, position: 'Tester', isActive: true },
    { id: 3, position: 'Devops', isActive: false },
    { id: 4, position: 'Manager', isActive: true }
]


// function activeJobs(job) {
//     return job.isActive;
// }

const filteredJobs = jobs.filter(job => job.isActive);

console.log("Source: ", jobs);
console.log("--------------------------");
console.log("Filtered:", filteredJobs);

