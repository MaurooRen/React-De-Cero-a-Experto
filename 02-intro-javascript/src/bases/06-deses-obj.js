//Desestructuracion
//Asignacion Desestructural

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const { nombre, edad, clave } = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const useContext = ( {nombre, edad, clave, rango = 'Vengador'} ) => {
    // console.log(nombre)
    // console.log(rango)

    return {
        nombreClave: clave,
        annios: edad,
        latLng: {
            lat: 14.324,
            lng: -13.345
        }
    }

}

const { nombreClave, annios, latLng:{lat, lng} } = useContext(persona)
console.log(nombreClave, annios)
console.log(lat, lng)