const path = require('path')

const filePath = path.join('public', 'dist', 'styles', 'main.css')

//path del archivo
console.log(filePath)
// solo el archivo
console.log(path.basename(filePath))
//path sin el archivo
console.log(path.dirname(filePath))
//misma info pero en forma de objeto
console.log(path.parse(filePath))
//trata de completar la ruta desde la ruta inicial del os ( alternativa a join )  
console.log(path.resolve('dist'))