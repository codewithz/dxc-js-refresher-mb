const first = [1, 2, 3];
const second = [4, 5, 6];

const combinedTraditional = first.concat(second);
console.log(combinedTraditional);

// 1,2,3,a,b,4,5,6

const letters = ['a', 'b']

const combinedTr = first.concat(letters).concat(second);
console.log(combinedTr);

//--------- spreading the array------------------

const combined = [...first, 'a', 'b', ...second];
console.log(combined)

const firstClone = [...first];
console.log(firstClone)

//------------ Benefits of Spread Operator[...]----------------

const grades = ["C", "A", "B", "D"];
console.log("Before Sorting: ", grades);
const sortedGrades = [...grades].sort();
console.log("After Sorting: ", sortedGrades);
console.log("Source: ", grades);

//---------- Spread Operator [objects]---------------

const k1 = { name: 'Zartab Nakhwa', age: 31 };
const k2 = { job: 'Corporate Trainer' };

const combinedObject = { ...k1, ...k2, location: 'Mumbai', name: 'Tom', age: 35 };

console.log(combinedObject);


