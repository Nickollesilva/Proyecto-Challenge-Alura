function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let evaluar = document.getElementById("evaluar");
    let copiar = document.getElementById("btn-copiar");
    let gif = document.getElementById("gif");
    
    if (/[A-ZÁÉÍÓÚÜÑ]/.test(texto)) {
        Swal.fire({
            title: "¡Lo siento!",
            text: "El texto no debe contener mayúsculas ni acentos.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
        return;
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length |=0) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "El texto fue encriptado con éxito"
        parrafo.textContent= "";
        evaluar.textContent = textoCifrado;
        muneco= muneco. remove();
        copiar = copiar.style.display="block";
        gif = gif.style.display="block";

    }else{
        muneco.src = "imagenes/Muñecolupa.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desea encriptar o desencriptar";
        Swal.fire({
            title: "¡Hey!",
            text: "Debes ingresar algún texto."
        });
    }

}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let evaluar = document.getElementById("evaluar");
    let copiar = document.getElementById("btn-copiar");
    let gif = document.getElementById("gif");

    let textoCifrado = texto .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length |=0) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "El texto fue desencriptado con éxito"
        parrafo.textContent="";
        evaluar.textContent = textoCifrado;
        muneco= muneco.remove();
        copiar = copiar.style.display="block";
        gif = gif.style.display="block";
        
    } else{
        muneco.src = "imagenes/Muñecolupa.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: "oops!",
            text: "Debes ingresar algún texto.",
            imageUrl: "imagenes/alerta.gif",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Custom image"
        });
    }
} 
function copiado(){
    let evaluar = document.getElementById("evaluar");

    navigator.clipboard.writeText(evaluar.value);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Texto copiado en el portapapeles",
        showConfirmButton: false,
        timer: 1500
    });
} 