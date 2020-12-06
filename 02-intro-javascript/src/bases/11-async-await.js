





// const getImagesPromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('http://algolcossdddw.com')
//     } )
//     return promesa
// }

// const getImagesPromesa = () => new Promise( (resolve, reject) => resolve('http://algolcossdddw.com') )

// getImagesPromesa().then( console.log )



const getImage = async() => {

    try {

        const apiKey = 'NTZhpJlCj4OKVkbIEpYKwkCvQ0BveWlh'
        const URL = 'http://api.giphy.com/v1/gifs/random'
    
        //El await le dice al programa "Espera a que yo (await) me ejecute, antes de ejecutar la siguiente linea de codigo"
        const respuesta = await fetch(`${URL}?api_key=${apiKey}`)
    
        //La unica condicion para trabajar con los await, es que tiene que estar dentro de un async
        const { data } = await respuesta.json()
    
        const { url } = data.images.original
        const img = document.createElement("img")
        img.src = url
        document.body.append( img )

    } catch (error) {
        //Manejo del error
        console.log(error)
    }




}

getImage()
