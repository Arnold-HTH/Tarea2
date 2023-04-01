/*      Ahora que conocemos todas las piezas del event loop,     veamos un poco de código para comprender el event loop en acción. */
console.log('Esta es la primera línea de código en app.js.');
// La linea de arriba se ejecuta primero. 
function usingsetTimeout() {
    console.log('Me pondré en cola en el event loop');
}
setTimeout(usingsetTimeout, 3000);
//la funcion de arriba se ejecuta despues 3 segundos y como usa el timeout pasa hacer la tercera linea, siendo que esta escrita en segunda linea.
console.log('Esta es la última línea de código en app.js.');
//la linea de codigo se ejecuta en segundo lugar