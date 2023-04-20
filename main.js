document.addEventListener('DOMContentLoaded', function() {
    function encriptar(){
        var text = document.querySelector("input").value.toLowerCase();
        if (text === "") {
            showAlert("Por favor ingrese un texto para encriptar.");
            return;
        }
        if(/[áéíóú]/.test(text)) {
            showAlert("No se pueden encriptar vocales con acento.");
            return;
        }
        //creo la variable cifrado con la sentencia i para que afecte tanto mayuculas como minusculas
        //añado la sentencia g para que afecte toda la linea y/u oracion
        //añado la sentencia n para que afecte multiples lineas y parrafos
        var txtCifrado = text.replace(/e/igm,"enter");
        txtCifrado = txtCifrado.replace(/o/igm,"ober");
        txtCifrado = txtCifrado.replace(/i/igm,"imes");
        txtCifrado = txtCifrado.replace(/a/igm,"ai");
        txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
        document.querySelector("#imgDer").style.display = "none";
        document.querySelector("#texto").style.display = "none";
        document.querySelector("#texto2").innerHTML = txtCifrado;
        document.querySelector("#btn-copiar").style.display = "block";
    }
    function desencriptar(){
        if (text === "") {
            showAlert("Por favor ingrese un texto para encriptar.");
            return;
        }
        if(/[áéíóú]/.test(text)) {
            showAlert("No se pueden encriptar vocales con acento.");
            return;
        }
        var text = document.querySelector("input").value.toLowerCase();
        //creo la variable cifrado con la sentencia i para que afecte tanto mayuculas como minusculas
        //añado la sentencia g para que afecte toda la linea y/u oracion
        //añado la sentencia m para que afecte multiples lineas y parrafos
        var txtCifrado = text.replace(/enter/igm,"e");
        txtCifrado = txtCifrado.replace(/ober/igm,"o");
        txtCifrado = txtCifrado.replace(/imes/igm,"i");
        txtCifrado = txtCifrado.replace(/ai/igm,"a");
        txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
        document.querySelector("#imgDer").style.display = "none";
        document.querySelector("#texto").style.display = "none";
        document.querySelector("#texto2").innerHTML = txtCifrado;
        document.querySelector("#btn-copiar").style.display = "block";
    }
    
    async function copiar(){
        var contenido = document.querySelector("#texto2");
        await navigator.clipboard.writeText(contenido.value);
        showAlert("Se copió el texto");
    }

    function showAlert(texto) {
        var alert = document.createElement("div");
        alert.className = "alert";
        alert.innerHTML = texto;
      
        document.body.appendChild(alert);
      
        setTimeout(function() {
          alert.parentNode.removeChild(alert);
        }, 3000);
      }
    
    var botonEncriptar = document.getElementById("btn-encriptar");
    var botonDesencriptar = document.getElementById("btn-desencriptar");
    var botonCopiar = document.getElementById("btn-copiar");
    
    
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.onclick = copiar;
  });