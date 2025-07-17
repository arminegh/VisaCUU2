
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
let comunicarOpciones = document.getElementById("comunicados");
let peticion = document.getElementById("peticion");
let telefono = document.getElementById("telefono");
let evento = document.getElementById ("CURP");

const contenedor = document.getElementById("tablero"); 



evento.addEventListener ("change", CURPingresado) 

//inicialización de cierta info y variables
function CURPingresado () {
    const tablero = document.getElementById ("comunicados")
    CURP.value = (CURP.value).toUpperCase();

    console.log (tablero)
   if (tablero) {
       // tablero.remove();
  }

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
    const comunicacion = document.createElement("h3");


    if (usuarioActual.peticion == true) {
        comunicacion.textContent = "Tienes una petición de la compañía " + usuarioActual.empresa;
    }
    else {
        comunicacion.textContent = "No tienes ninguna petición hasta el momento";
    }

    
    comunicacion.id = "comunicados";
    console.log(contenedor)
    contenedor.appendChild(comunicacion);
}

function mostrarTelefono () {
    alert("Tu teléfono para contacto registrado es el " + localStorage.getItem("telefono"))

}



function cambiarTelefono (exp) {
    exp01[3] = exp
}




buscar.onclick = () => {
    //console.log (CURP.value);   
    //console.log (existeCURP);  

    
    if ( buscarExp (CURP.value) ){
        comunicarOpciones.innerHTML = "Información principal"
        cambios.disabled = false; 
        descargarInfo(CURP.value);
        mostrarPeticion(CURP.value);
        //mostrarTelefono();

    }else {
        comunicarOpciones.innerHTML = "NO EXISTE EXPEDIENTE CON ESA CURP"

    }
}


   const cambios = document.getElementById('cambiarTelefono');
   cambios.disabled = true; 



