// Object destructuring

// const person = {
//     name: 'Tim',
//     age: 32,
//     location: {
//         city: 'Columbus',
//         temp: 84
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
    title: 'Eog is the Enemny',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);

// Array destructuring

const address = ['319 Deer Trail Rd.', 'Reynoldsburg', 'Ohio', '43068'];

const [, city, state, zip] = address;

console.log(`You are in ${city}, ${state}!`)


const item = ['Coffee(hot)', '$2.00', '$2.50', '2.75'];

const [ coffeeHot, , cost ] = item;

console.log(`A ${coffeeHot} costs ${cost}`);