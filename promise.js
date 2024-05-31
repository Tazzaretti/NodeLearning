//filesistem es bastante grande por lo que es conveniente
//extraer solo los modulos que necesitamos, en este caso readFile
const {readFile} = require('fs') 
const {promisify} = require('util')



//const getText = (pathFile) => {
//    //Una promesa puede resultar bien o mal, por lo que tomaremos los
//    //parametros resolve para un resultado exitoso o reject para un resultado
//    //de fracaso
//    return new Promise(function (resolve, reject){
//        readFile('./data/first.txt', 'utf-8', (err, data) => {
//            if (err){
//                reject(err)
//            }
//        
//            resolve(data)
//        })
//    })
//}

//esto hace lo mismo que todo el codigo justo arriba
const readFilePromise = promisify(readFile)


//llamada a la funcion getText
//de ser exitoso se continua con .then y de ser fracaso se hace un catch
//para obtener el error, se puede ejecutar varias acciones con .then
//hasta finalizar u obtener un error
//getText('./data/fourth.txt')
//    .then((result) => console.log(result))
//    .then(() => getText('./data/first.txt'))
//    .then(result => console.log(result))
//    .catch(error => console.log(error))


//la forma mas nueva es utilizar async-await


//async indica qque lo que esta dentro de la funcion contiene
//codigo asincrono
//async function read() {
//    //al terminar await me retornara el resultado de la ejecucion
//    //el cual puedo guardar en una constante en este caso result
//    try{
//        const result = await getText('./data/first.txt');
//        const result2 = await getText('./data/second.txt');
//        console.log(result);
//        console.log(result2);
//    }//catch es una funcion y al pasarle el parametro error podemos obtener el mismo
//    catch(error){
//        console.log(error);
//    }
//    
//}

//lo mismo que arriba pero con promisify
async function read() {
    //al terminar await me retornara el resultado de la ejecucion
    //el cual puedo guardar en una constante en este caso result
    try{
        const result = await readFilePromise('./data/first.txt', 'utf-8');
        const result2 = await readFilePromise('./data/second.txt', 'utf-8');
        console.log(result);
        console.log(result2);
    }//catch es una funcion y al pasarle el parametro error podemos obtener el mismo
    catch(error){
        console.log(error);
    }
    
}

//throw new Error('Esto es un error que no se esperaba') se puede utilizar para |
//ubicar errores donde quiera, por ejemplo un condicional que falla bajo cierta
//condicion
read()