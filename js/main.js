
// estos serían los expedientes que existen según su CURP 
const CURPexpedientes = ["GAHA771209MCHRRR08", "RETU870403HSOUYE76", "POLJ951108MDFUHS67"]
// se cargarían de una base de información ya existente


const expedientes= [
    {
        curp: "GAHA771209MCHRRR08",
        peticion: true, 
        empresa: "BRIGHT VIEW",
        telefono: "+526141423794" 
    },
    {
        curp: "RETU870403HSOUYE76", 
        peticion: false, 
        empresa: "",
        telefono: "+526394732334"
    },
    {
        curp: "ABC123", 
        peticion: false, 
        empresa: "",
        telefono: "+1234876546351"
    },
    {
        curp: "XYZ098", 
        peticion: false, 
        empresa: "",
        telefono: "+1234876546351"
    },
    {
        curp: "123", 
        peticion: true, 
        empresa: "ELEMENTARY",
        telefono: "+1234876546351"
    },
]


let existeCURP = false
let menu = 4


let CURP = document.getElementById("CURP");
let comunicarOpciones = document.getElementById("comunicarOpciones");
let peticion = document.getElementById("peticion");
let telefono = document.getElementById("telefono");
let evento = document.getElementById ("CURP");




evento.addEventListener ("change", CURPingresado) 

function CURPingresado () {
    CURP.value = (CURP.value).toUpperCase();
}

function buscarExp (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.curp === exp);
    return usuarioActual;


   
}
//función para guardar en local storage el expediente
function descargarInfo (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.curp === exp);
    localStorage.setItem("curp", usuarioActual.curp)
    localStorage.setItem("peticion", usuarioActual.peticion)
    localStorage.setItem("empresa",usuarioActual.empresa)
    localStorage.setItem("telefono",usuarioActual.telefono)
}

function mostrarPeticion (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.curp === exp);

    if (usuarioActual.peticion == true) {
        
        alert("si estas pedido por la compañía " + usuarioActual.empresa)
    }
    else {
        alert ("No estas pedido")
    }
}

function mostrarTelefono () {
    alert("Tu teléfono para contacto registrado es el " + localStorage.getItem("telefono"))

}



function cambiarTelefono (exp) {
    exp01[3] = exp
}




//ANTES DE DOM
/*let CURP = prompt("Ingresa tu CURP").toUpperCase();
//buscarExp (CURP)


if (!existeCURP == true) {
    alert ("No existe expediente para esa CURP en VisaCUU")
    menu = 4}
else {
    menu = parseInt(prompt(" 1-Revisar si estoy pedido \n 2-Revisar mi teléfono de contacto\n 3-Modificar mi teléfono de contacto \n 4-Salir"))
}



while ( (existeCURP) && (menu !=4) ) {
    
    switch(menu) {
        case 1:
            tienePeticion (CURP)
            break
        case 2:
            mostrarTelefono (CURP)
            break
        case 3:
            let nuevoNumero = prompt("Proporciona el nuevo teléfono ")
            //faltaría una validación de que se haya introducido correctamente
            cambiarTelefono (nuevoNumero)
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt(" 1-Revisar si estoy pedido \n 2-Revisar mi teléfono de contacto\n 3-Modificar mi teléfono de contacto \n 4-Salir"))
}

*/



buscar.onclick = () => {
    //console.log (CURP.value);   
    //console.log (existeCURP);  

    
    if ( buscarExp (CURP.value) ){
        comunicarOpciones.innerHTML = "Información principal"
        descargarInfo(CURP.value);
        mostrarPeticion(CURP.value);
        mostrarTelefono();

    }else {
        comunicarOpciones.innerHTML = "NO EXISTE EXPEDIENTE CON ESA CURP"

    }
}

