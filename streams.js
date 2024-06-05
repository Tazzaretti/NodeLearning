//streams es el enviar archivos grandes por partes
//en este caso importamos writeFile para crearlo nosotros mismos
const {writeFile} = require('fs/promises')

//Creamos la funcion para crear el archivo con writeFile
//const createBigFile = async () => {
//    await writeFile('./data/BigFile.txt', 'hello world'.repeat(1000000))
//}
//
////llamada a la funcion
//createBigFile()

//importamos createReadStream que es un metodo por eventos, no es asincrono por lo que 
// no utilizamos filesistem promises sino que solo fs
const {createReadStream} = require('fs')

//me va  a dar un objeto con manejadores de eventos
const stream = createReadStream('./data/BigFile.txt', 'utf-8')

// esta funcion leera los chunks que son las porciones del archivo
// va a ir leyendo de a pedazos hasta terminar el archivo
stream.on('data', (chunk) => {
    console.log(chunk)
})

//el evento end se ejecuta al finalizar de leer los datos
stream.on('end', () => {
    console.log('Finalizo la lectura del archivo')
})


//el evento error se ejecuta si en algun momento de la lectura sucede un error
stream.on('error', ()=>{
    console.log(error)
})