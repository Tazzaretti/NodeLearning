
//async function loadData() {
//    try {
//        //throw new Error('Mi error al momento de consultar datos')
//        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//        const data = await res.json()
//        console.log(data)
//    } catch (error){
//        console.log(error)
//    }
//}

//loadData()

//podria ahcerlo tambien sin la funcion por una actualizacion de javascript de esta forma

try {
    //throw new Error('Mi error al momento de consultar datos')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
}catch (error) {
    console.log(error)
}