//document.write("<h1>hola mundo</h1>")

 var usuario = 'mdroid';

 /*usuarios
 
{
    "usuario" = 'mdroid';
    "contraseña" = 'casa123';
}
*/

//variables
var input = 'pepe';
 var usuario = 'MdroidHD';
 var surname = 'Youtube';
//Constante

const contraseña = true
 // Operaciones

 var numerOne = 96;
 var numberTwo = 349;

 let resul = numerOne + numberTwo;

 console.log(resul);

 let fullName = usuario + " " + surname;

 console.log(fullName);

let resultado = numberTwo < numerOne;

console.log(resultado);
// condicion
let user = usuario == input;

 if (user == true)
  {console.log("Bienbenido")
} else {console.log("Contraseña Incorrecta")

// Ejercicio de DNI
function CalculatorDNI() {
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var inputDNI = 65004204
  var resto = inputDNI % 23
  let LetraDNI = letras[inputDNI % 23];
        console.log("DNI=", inputDNI);
        console.log("y su letra es...")
        console.log(LetraDNI);

}


//switch
let tipoDePase = "vip";  //cambia el pase
console.log('--Instruccion switch--');

switch(tipoDePase) {
    case 'vip':
       console.log("VIP");
       break;
    case 'premium':
       console.log('Premium');
      break;
    default:
      console.log('No tienes pase, pero bienbenid');
} 


};

