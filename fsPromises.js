//fs/promises me da las funciones de filesistem convertidas a promesas, 
//no necesito convertirlos, o sea no uso promisify
const {readFile} = require('fs/promises')

async function read() {
    //al terminar await me retornara el resultado de la ejecucion
    //el cual puedo guardar en una constante en este caso result
    try{
        const result = await readFile('./data/first.txt', 'utf-8');
        const result2 = await readFile('./data/second.txt', 'utf-8');
        console.log(result);
        console.log(result2);
    }//catch es una funcion y al pasarle el parametro error podemos obtener el mismo
    catch(error){
        console.log(error);
    }
    
}

read()

//es la version final final de promise jaja
