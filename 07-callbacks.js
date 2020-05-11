// API, REST API
// PROGRAMACION FUNCIONAL

/* function programacionFuncional(numero1, () => {}, 1) {

}*/

/// PRIMERA PARTE DEACUERDO A LAS FUNCIONES 
// PROGRAMACION ASINCRONA Y SINCRONA

/* function primeraFuncion() {
    setTimeout(
        ()=>{
           console.log('primera')
    }, 500
    )    
}

function segundaFuncion(){
    console.log('2')
}

  // primeraFuncion()
 // segundaFuncion()

function saluda(nombre, callback) {
    console.log('Saludo a', nombre)
    callback()


}

function funcionCallback(){    
    primeraFuncion()
    segundaFuncion()
console.log('ya salude')
}

saluda('Bryan', (as,s,a) => {
    console.log('saludaste')
}) */

////   SEGUNDA FORMA DE APLICAR EL CALLBACKS

/* function saludar(nombre){
    console.log(`Ejecuto saludo a ${nombre}`)
    return nombre
}

function peticionUsuario(nombre, callback){
    callback(nombre)

}
peticionUsuario('Bryan', saludar)

peticionUsuario('Bryan', (saludar) =>{
    console.log(saludar);
})*/

//// TERCERA FORMA DE UTILIZAR VARIOS POSICIONES DE SUSTITUCION DE NOMBRES

 /*var arreglo = ['Bryan', 'Bryan', 'Bryan']

var nombreNuevo = 'Bryan'

function anadirNombre(arreglo, nombre, indice,  cb) {
    // arreglo.push(nombre);
    arreglo[indice]= nombre
    cb(
        {
        mensaje: 'exito',
        arreglo
    }
    )
}
anadirNombre(arreglo, 'Cristina', 2, (mensaje) => {
    console.log(mensaje);
});*/

/// PROGRAMACION SECUENCIAL

var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {

    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})

// null
// undefined

// ===  '1' === '1'
// ==    '1' == '1'
 
/// Para instalar PAQUETES npm  
// npm install nombrePaquete
// npm install nombrPaquete@1.23
// npm install nombrePaquete@latest
