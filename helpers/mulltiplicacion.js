const fs = require('fs');

const crearArchivo =(a=5) =>{
    try{
        return new Promise((resolve, reject) =>{
            console.clear();
            console.log ('==================================');
            console.log (`Tabla del ${a}`);
            console.log ('==================================');
            
            
            let salida = '';
            
            for (let i = 1; i<=10; i++) {
                salida += `${a}x${i}=${a*i}\n`;
            }
            
            console.log(salida);
            
            fs.writeFileSync (`tabla-${a}.txt`, salida);
            
           resolve(`tabla-${a}.txt creada`);
    
            
    
        })
    }catch{
        reject(new Error('err'));
    }
    


}


module.exports = {
   crearArchivo
} 

