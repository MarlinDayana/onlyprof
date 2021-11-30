const fs = require('fs');

const a=6;

console.clear();
console.log ('==================================');
console.log (`Tabla del ${a}`);
console.log ('==================================');


let salida = '';

for (let i = 1; i<=10; i++) {
    salida += `${a}x${i}=${a*i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${a}.txt`, salida, (err )=> {
    if (err) throw err;

    console.log(`tabla-${a}.txt creado`);
})

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





