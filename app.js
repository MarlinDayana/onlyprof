const {crearArchivo}= require('./helpers/mulltiplicacion');

console.clear();

const a = 9;

crearArchivo(a)
   .then(nombreArchivo => console.log (nombreArchivo, 'creado'))
   .catch(err=> console.log(err));



// function producto (a,b) => {

//     const a=5;
//     let b;
//     resultado= a*b;
    
//     for (let b=0; b>0;) {
//     return a*b;
//     }
    
//     console.log(`el producto de ${a} por ${b} es igual a: ${resultado}`);



// hice una calculadora, pero necesito es la tabla del 5


// let producto = (a,b) => a*b;
//     for (var b= 0; b>0;){
//         return a*b;
//     }

// console. log (producto (a,3))


// try again 





