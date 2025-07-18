
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

let CURP = document.getElementById("CURP");
let comunicarOpciones = document.getElementById("comunicados");
let evento = document.getElementById ("CURP");

const contenedor = document.getElementById ("tablero")


evento.addEventListener ("change", cambioCURP) 
function cambioCURP () {
    CURP.value = (CURP.value).toUpperCase();
}

function buscarExp (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.curp === exp);
    return usuarioActual;  
}

function borrarTablero () {
    const tablero = document.getElementById ("tablero")
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }


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
    const comunicacion = document.createElement("h3");


    if (usuarioActual.peticion == true) {
        comunicacion.textContent = "Tienes una petición de la compañía " + usuarioActual.empresa;
    }
    else {
        comunicacion.textContent = "No tienes ninguna petición hasta el momento";
    }

    
    comunicacion.id = "comunicados";
    contenedor.appendChild(comunicacion);
}

function mostrarTelefono (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.curp === exp);
    const comunicacion = document.createElement("h3");

    comunicacion.textContent = "Tu teléfono para contactarte es " + usuarioActual.telefono;
   
    comunicacion.id = "comunicados";
    contenedor.appendChild(comunicacion);

}



function cambiarTelefono (exp) {
    exp01[3] = exp
}




buscar.onclick = () => {
    borrarTablero();
    const comunicacion = document.createElement("h3");

    if ( buscarExp (CURP.value) ){
        comunicacion.textContent = "Resumen de tu expediente "
        cambios.disabled = false; 
        descargarInfo(CURP.value);
        mostrarPeticion(CURP.value);
        mostrarTelefono(CURP.value);

    }else {
        comunicacion.textContent = "NÚMERO DE EXPEDIENTE NO EXISTE"

    }
    comunicacion.id = "comunicados";
    contenedor.appendChild(comunicacion);
}


   const cambios = document.getElementById('cambiarTelefono');
   cambios.disabled = true; 



