
let CURP = document.getElementById("CURP");
let evento = document.getElementById ("CURP");
const contenedor = document.getElementById ("tablero");
const cambiar = document.getElementById ("cambios");
const expedientes = []

evento.addEventListener ("change", cambioCURP) 


obtenerInfo ()
permitirCambios (false, false)


function permitirCambios (indicador1, indicador2) {
    const cambios = document.getElementById('cambiarTelefono');
    if (indicador1) {
        cambios.removeAttribute("hidden");}
        
    else {
        cambios.setAttribute("hidden", "hidden");}

    if (indicador2) {
        confirmarCambio.removeAttribute("hidden")}
        
    else {
        confirmarCambio.setAttribute("hidden", "hidden");}
}

function obtenerInfo () {
    fetch("./db/expes.json")
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("aplicantes", JSON.stringify(data))
            data.forEach(exp => {
                expedientes.push(exp);
            })
        })
        console.log(localStorage)
}

function cambioCURP () {
    CURP.value = (CURP.value).toUpperCase();
}

function modificarTelefono (exp, telefono){
    expedientes.forEach(expediente => {
        if (expediente.CURP === exp) { 
            expediente.telefono = telefono;
            Swal.fire({
                title: "Teléfono actualizado",
                text: "",
                icon: "success"
            });
        }
    })

}


function buscarExpediente (exp) {
    const usuarioActual = expedientes.find(expediente => expediente.CURP === exp);
    console.log(localStorage)
    return usuarioActual;  
}

function limpiarTablero () {
    const tablero = document.getElementById ("tablero")
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }

    const temporales = document.querySelectorAll('.temporal')
    temporales.forEach(elemento => {
        elemento.remove();
    });
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
        permitirCambios (false);
    }
}

cambiarTelefono.onclick = () => {
    const etiqueta = document.createElement("label")
    etiqueta.textContent ="Introduce tu nuevo número";
    etiqueta.classList.add ("temporal");
    cambiar.appendChild(etiqueta);
    const nuevoTel = document.createElement("input");
    nuevoTel.type = "text";
    nuevoTel.name = "nuevoTelefono";
    nuevoTel.id = "nuevoTelefono"
    nuevoTel.classList.add ("temporal");
    cambiar.appendChild(nuevoTel);
    permitirCambios (true, true)
}

confirmarCambio.onclick = () => {
    const nuevoTelefono = document.getElementById ("nuevoTelefono");
    if ( parseInt(nuevoTelefono.value)){
        console.log ( "es un numero")
        modificarTelefono (CURP.value, nuevoTelefono.value);
        limpiarTablero();
        cargarUsuarioActual(CURP.value);
        llenarTablero();   
    }else {
        Swal.fire({
            title: "Teléfono no válido",
            text: "Debes ingresar puros números",
            icon: "error"
        });
        nuevoTelefono.value = "";
        nuevoTelefono.focus();
    }
}

