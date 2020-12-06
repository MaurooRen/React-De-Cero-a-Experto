import {getHeroById, getHeroByOwner} from './bases/08-imp-exp'


//Las promesas se crean con un callback
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         //Tarea
//         const p1 = getHeroById(2)
//         resolve(p1) //resolve le tranfiere a .then
//         // reject('No se pudo encontrar el heroe')
//     }, 2000)
// })

// promesa.then( (res) => {
//     console.log('Heroe', res)
// })
// promesa.catch( (err) => {
//     console.warn(err)
// })


const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroById(id)
            p1 ? resolve(p1) : reject('No se pudo encontrar el heroe')
            // console.log(p1)
            // resolve(p1)
        }, 2000)
    })
}

getHeroByIdAsync(3)
    // .then( (res) => console.log(res))
    .then( console.log )
    // .catch( (err) => console.log(err))
    .catch( console.warn )
        