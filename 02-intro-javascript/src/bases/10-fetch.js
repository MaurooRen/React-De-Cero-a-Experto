//GIPHY API
const apiKey = 'NTZhpJlCj4OKVkbIEpYKwkCvQ0BveWlh'
const URL = 'http://api.giphy.com/v1/gifs/random'


const peticion = fetch(`${URL}?api_key=${apiKey}`)

// peticion.then( res => {
//     res.json().then( data => {
//         console.log(data)
//     })
// })
// peticion.catch( console.warn )


peticion
    //Los siguientes .then se conocen como 'Promesas en cadena'
    //ya que uno regresa una promesa y esa promesa es pasada al siguiente .then
    .then( (res) => res.json() ) //Esto retorna una promesa
    .then( ({ data }) => { //Esto retorna la data
        const { url } = data.images.original
        console.log(url)

        const img = document.createElement("img")
        img.src = url

        //document.querySelector("body")
        document.body.append( img )
    })
    .catch( console.warn )