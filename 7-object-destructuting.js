const address = {
    city: "Some City",
    street: 'Some Street',
    country: 'Some Country'
}
//Traditional Way
// const city = address.city;
// const street = address.street;
// const country = address.country;
const country = 'India';
// console.log(city, street, country);
//ES 6 Way

const { city, street } = address;
console.log(city, street);

//Renaming 
const { country: ct } = address;
console.log("Country: ", ct);
