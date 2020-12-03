// Functions

//This is not the way that we are gonna be creating functions:
//Why? because it can happend that we have the function *sayHey*
//but them we create another function with the same name, or a variable
//and we ended up over writing the original one.

// *DO NOT CREATED FUNCTIONS LIKE THIS*

// function sayHey(name) {
//     return `Hey ${name} !`
// }

// sayHey = 30;

// console.log(sayHey("Mauricio"))
// console.log(sayHey)


// *DO CREATE FUNCTIONS LIKE THIS*

const sayHey = function(name) {
    return `Hey ${name} !`
}

const sayHey2 = (name) => `Hey ${name} !`
const sayHey3 = () => `Hey U !`


console.log(sayHey("Mauricio"))
console.log(sayHey2("Andres"))
console.log(sayHey3())



const getUser = () => ({
        uid: 'ABC123',
        username: 'maurooren'
    })


console.log( getUser() )
