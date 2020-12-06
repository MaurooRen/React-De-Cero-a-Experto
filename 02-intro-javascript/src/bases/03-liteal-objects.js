

const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    adress: {
        city: 'New York',
        zip: 33035,
        lat: 14.0380,
        lng: 82.0382
    }
}

// console.table(person)
console.log(person)


// const person2 = person //this is an asignation base on REFERENCE, so it's not a copy of person, person2 it's actually pointing to the space in memory of person

// person2.name = 'Peter' //You may think that u're changing just person2 but not! u're changing person

// console.log('person:', person)
// console.log('person2:', person2)


//The right way to make a copy of an object:
const person3 = {
    ...person //This is called: spread operator
}

console.log('person3:', person3)

person3.name = 'Thor'

console.log('person:', person)
console.log('person3:', person3)