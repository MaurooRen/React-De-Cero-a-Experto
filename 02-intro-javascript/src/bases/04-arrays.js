//Arrays JS

//const myArray = new Array(100)
const myArray = [1,2,3,4]
// myArray.push(1)
// myArray.push(2)
// myArray.push(3)
// myArray.push(4)


// let myArray2 = [...myArray, 5] //This is gonna result in this [[1,2,3,4], 5] an array inside an array

let myArray2 = [...myArray, 5] //Spread array

// let myArray3 = myArray2.map(function(item) {
//     return item = item * 2
// })

// let myArray3 = myArray2.map(item => {
//     return item * 2
// })

let myArray3 = myArray2.map(item => item * 2)


console.log(myArray)
console.log(myArray2)
console.log(myArray3)