
let CURP = document.getElementById("CURP");
let evento = document.getElementById ("CURP");
const contenedor = document.getElementById ("tablero")
const expedientes = []

evento.addEventListener ("change", cambioCURP) 


obtenerInfo ()
permitirCambios (false)


function permitirCambios (indicador) {
    const cambios = document.getElementById('cambiarTelefono');
    if (indicador) {
        cambios.removeAttribute("hidden");}
    else {
        cambios.setAttribute("hidden", "hidden");}
}

function obtenerInfo () {
    fetch("./db/expes.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(exp => {
                expedientes.push(exp);
            })
        })
}

function cambioCURP () {
    CURP.value = (CURP.value).toUpperCase();
}

function buscarExpediente (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.CURP === exp);
    return usuarioActual;  
}

function limpiarTablero () {
    const tablero = document.getElementById ("tablero")
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
}

function llenarTablero () {
    const linea1 = document.createElement("h2");
    linea1.textContent = localStorage.getItem("nombre");
    contenedor.appendChild(linea1);
    const linea2 = document.createElement("h4");
    linea2.textContent = "Tu teléfono para contactarte es "
    contenedor.appendChild(linea2)
    const linea3 = document.createElement("h4");
    linea3.textContent = localStorage.getItem("telefono");
    linea3.classList.add('resaltar')
    contenedor.appendChild(linea3)
    permitirCambios (true)
    if ( localStorage.getItem("peticion") == "true" ){
        const linea1 = document.createElement("h4");
        linea1.textContent = "Tienes una petición con"
        linea1.classList.add('conInfo')
        contenedor.appendChild(linea1)
        const linea2 = document.createElement("h4");
        linea2.textContent = localStorage.getItem("compania");
        linea2.classList.add('resaltar')
        contenedor.appendChild(linea2)
        const linea3 = document.createElement("h4");
        linea3.textContent = "Fecha de inicio de temporada";
        contenedor.appendChild(linea3)
        const linea4 = document.createElement("h4");
        linea4.textContent = localStorage.getItem("fecha");
        linea4.classList.add('resaltar')
        contenedor.appendChild(linea4)

    }else {
        const linea1 = document.createElement("h3");
        linea1.textContent = "Hasta el momento no tienes peticiones"
        linea1.classList.add('sinInfo')
        contenedor.appendChild(linea1)   
    }
}


//función para guardar en local storage el expediente
function cargarUsuarioActual (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.CURP === exp);
    localStorage.setItem("curp", usuarioActual.curp)
    localStorage.setItem("nombre", usuarioActual.nombre)
    localStorage.setItem("peticion", usuarioActual.peticion)
    localStorage.setItem("compania",usuarioActual.compania)
    localStorage.setItem("telefono",usuarioActual.telefono)
    localStorage.setItem("fecha",usuarioActual.inicio)
}

buscar.onclick = () => {
    limpiarTablero();
    if ( buscarExpediente (CURP.value) ){
        cargarUsuarioActual(CURP.value);
        llenarTablero();

    }else {
        const linea1 = document.createElement("h2");
        linea1.textContent = "NÚMERO DE EXPEDIENTE NO EXISTE";
        linea1.classList.add('sinInfo')
        contenedor.appendChild(linea1);
    }
}
