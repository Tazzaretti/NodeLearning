//importar modulos
//const web = require('./module/myModule')
//
//console.log(web)

//importar modulos individualmente
//const {myArray, myNumber, myWebAdress, user} = require('./module/myModule')
//
//console.log(myArray);
//console.log(myNumber);
//console.log(myWebAdress);
//console.log(user);

//primer modulo math
const math = require('./math/index.js')

console.log(math)
console.log(math.add(10, 20))
console.log(math.sustract(10, 20))
console.log(math.multiply(10, 20))
console.log(math.divide(10, 20))