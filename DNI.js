var DNI = null;
var inputDNI = null;
var resto = null;
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     function sub() {
        DNI = document.getElementById("text1").value;
        if (DNI < 99999999) {
          inputDNI = DNI;
        resto = letras[inputDNI % 23];
        alert("Tu letra del DNI es:" + " " + resto);
        } else {
          alert("Numero de DNI, Invalida");
        }
        


      }