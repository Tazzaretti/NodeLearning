//Manejo de archivos de forma sincronica
//fs abreviatura de file system
const fs = require('fs')


//lee un archivo si le paso una ruta
//usando utf-8 lo convierto a caracteres
//const first = fs.readFileSync('./data/first.txt', 'utf-8')
//aqui no utilizo utf-8 porque lo pasare a string con la funcion toString()
//const second = fs.readFileSync('./data/second.txt')

//console.log(first)
//console.log(second.toString())

//para crear un archivo, le paso la ruta con el archivo a crear y el contenido
//fs.writeFileSync('./data/third.txt', 'este es un tercer archivo')

// si vuelvo a ejecutar se sobreescribe


//para crear con una constante o variable como contenido
//const title = 'este es el contenido del archivo'
//fs.writeFileSync('./data/fourth.txt', title)

//para agregar contenido al archivo sin sobreescribir el anterior
//usamos flag:'a' que significa append como tercer parametro
//fs.writeFileSync('./data/fourth.txt', title, {
//    flag: 'a'
//})





//Manejo de archivos de forma asincrona
//utiliza mejor los recursos del sistema, basado en promises
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if(error){
        // si da error entra por aqui, podemos probarlo cambiando la ruta a una incorrecta
        console.log(error)
    }
    console.log(data)

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if(error){
            // si da error entra por aqui, podemos probarlo cambiando la ruta a una incorrecta
            console.log(error)
        }
        console.log(data)

        //esta no es la forma optima de escribir el codigo, resulta en callback hell
        fs.writeFile('./data/newFile.txt', 'archivo creado desde fs', (error, data) => {
            console.log(error)
            console.log(data)
        })
    })
})

