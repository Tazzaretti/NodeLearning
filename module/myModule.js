//exportar una variable
//const myWebAdress = "faztweb.com"
//
//module.exports = myWebAdress


const myWebAdress = 'faztweb.com'
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: 'ryan',
    lastName: 'ray'
}
//exportar un objeto
//const group = {
//    myWebAdress: myWebAdress,
//    myNumber: myNumber,
//    myArray: myArray,
//    user: user
//}
//
//module.exports = group

//exportar un objeto sin guardarlo antes en una variable
//module.exports = {
//    myWebAdress: myWebAdress,
//    myNumber: myNumber,
//    myArray: myArray,
//    user: user
//}
//otra forma mas corta de exportarlo, es la mas comun
//module.exports = {
//    myWebAdress,
//    myNumber,
//    myArray,
//    user
//}

//Otra forma de hacerlo
module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.myWebAdress= myWebAdress
