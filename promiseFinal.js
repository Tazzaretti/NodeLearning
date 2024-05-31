const {readFile} = require('fs') 
const {promisify} = require('util')


const readFilePromise = promisify(readFile)

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

read()


//asi es como se hace actualmente