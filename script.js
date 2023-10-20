var textArea = document.querySelector(".areaIngresoDeTexto");
var mensaje = document.querySelector(".textoResultado");



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {

    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < codigoMatriz.length; i++) {
        if (stringEncriptada.includes(codigoMatriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1])
        }

    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada) {

    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < codigoMatriz.length; i++) {
        if (stringDesencriptada.includes(codigoMatriz[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0])
        }

    }
    return stringDesencriptada
}








