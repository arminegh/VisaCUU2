
// estos serían los expedientes que existen según su CURP 
const CURPexpedientes = ["GAHA771209MCHRRR08", "RETU870403HSOUYE76", "POLJ951108MDFUHS67"]
// se cargarían de una base de información ya existente
const exp01 = ["GAHA771209MCHRRR08", true, "BRIGHT VIEW", "+526141423794"]
const exp02 = ["RETU870403HSOUYE76", false, "", ""]
const exp03 = ["POLJ951108MDFUHS67", true, "LAWN SCAPES", "+13457687123"]


let existeCURP = false

function buscarExp (exp) {
    if (CURPexpedientes.includes(exp)){
        existeCURP = true;
    }
   
}

function tienePeticion (exp) {
    if (exp01[1] == true) {
        console.log (exp01[1])
        alert("si estas pedido por la compañía " + exp01[2])
    }
    else {
        alert ("No estas pedido")
    }
}

function mostrarTelefono (exp) {
    alert("Tu teléfono para contacto registrado es el " + exp01[3])
}

let CURP = prompt("Ingresa tu CURP").toUpperCase();
buscarExp (CURP)



let menu = parseInt(prompt(" 1-Revisar si estoy pedido \n 2-Revisar mi teléfono de contacto\n 3-Modificar mi teléfono de contacto \n 4-Salir"))
while(existeCURP && menu !=4 ) {
    switch(menu) {
        case 1:
            tienePeticion (CURP)
            break
        case 2:
            mostrarTelefono (CURP)
            break
        case 3:
            
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt(" 1-Revisar si estoy pedido \n 2-Revisar mi teléfono de contacto\n 3-Modificar mi teléfono de contacto \n 4-Salir"))
}



if (!existeCURP == true) {
    alert ("No existe expediente para esa CURP en VisaCUU")}