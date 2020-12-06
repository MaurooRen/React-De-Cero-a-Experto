const personajes = ['Goku', 'Vegeta', 'Trunks']
const [ , , p3 ] = personajes
// console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123]
}
const [ letras, numeros] = retornaArreglo()
// console.log(letras, numeros)

//Tarea

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
}   

const arr = useState('Daemon')
console.log(arr)

const [nombre, setNombre] = arr

console.log(nombre)
// arr[1]()
setNombre()