const name = 'Mauricio'
const lastName = 'Rengifo'

// const fullName = name + ' ' + lastName
// const fullName = `
// ${name}
// ${lastName}
// ${ 1 + 1 }`

const fullName = `${name} ${lastName}`

console.log( fullName )

function sayHey(text) {
    return `Hey! ${fullName}, ${text}`
}

console.log(`This is a long text, but ${sayHey('how are u doing?')}`)