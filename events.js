//importo events
const EventEmitter = require('events')

//asi se crea un objeto de tipo EventEmitter que en este caso contiene los atributos de events
const customEmitter = new EventEmitter()

//EventEmitter o events contiene distintos metodos y uno de ellos es on que se utiliza para escuchar
//cuando un evento sucede, un ejemplo seria onClick aunque no se si pertenece a events pero asi funciona

//        evento que escucha / lo que recibe
customEmitter.on('response', (data) => {
    console.log('received')
    console.log(data)
})

//luego emit sirve para emitir un evento en este caso de tipo response que se correspondera con el
//listener que tenemos arriba entonces se ejecutara la accion indicada
//                  evento    /     datos
customEmitter.emit('response', 'Hello world')
customEmitter.emit('response', 'tomi')
customEmitter.emit('response', 30)
customEmitter.emit('response', [1,2,3,4])
customEmitter.emit('response', {name: 'Tomas'})


//El evento puede tener el nombre que quiera darle, tambien puede recibir mas de un dato
//por ejemplo 

customEmitter.on('evento1', (data1, data2) => {
    console.log('recibido')
    console.log(data1)
    console.log(data2)
})

//                  evento  /  dato1  /   dato2
customEmitter.emit('evento1', 'tomas', 'azzaretti')