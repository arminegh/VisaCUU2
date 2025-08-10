let contenedorFormulario = document.getElementById("formulario")
let contenedor = document.getElementById("espacio")
let expData = localStorage.getItem("aplicantes")
expData = JSON.parse(expData)

llenaEspacio(expData)


function llenaEspacio(aplicantes) {
    aplicantes.forEach(expediente => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${expediente.CURP}</h3>
                            <h4>${expediente.nombre}</h4
                          <h4>${expediente.telefono}</h4>
                          <button class="editar" id="${expediente.CURP}">Editar</button>
                          <hr>`
        contenedor.appendChild(card)
    })

    editar (aplicantes)
}


function editar (aplicantesArray) {


    const editarButton = document.querySelectorAll(".editar")
    editarButton.forEach(button => {
        button.onclick = (e) => {
            const curp = e.currentTarget.id
            const aplicEditar = aplicantesArray.find(exp => exp.CURP == curp)
            //console.log(aplicEditar)
            limpiarFormulario ();
            creaFormulario (aplicEditar, aplicantesArray)

        }
    })
}



function creaFormulario (datosDefault, expData) {
 
    const etiqueta1 = document.createElement("label")
    etiqueta1.textContent ="Cambia el CURP ";
    etiqueta1.classList.add ("temporal");
    contenedorFormulario.appendChild(etiqueta1);
    const nuevoCurp = document.createElement("input");
    nuevoCurp.type = "text";
    nuevoCurp.name = "nuevoCurp";
    nuevoCurp.id = "nuevoCurp"
    nuevoCurp.defaultValue = datosDefault.CURP;
    nuevoCurp.classList.add ("temporal");
    contenedorFormulario.appendChild(nuevoCurp);
    
    let linea = document.createElement("hr")
    contenedorFormulario.appendChild(linea);
    
    const etiqueta2 = document.createElement("label")
    etiqueta2.textContent ="Cambia el nombre ";
    etiqueta2.classList.add ("temporal");
    contenedorFormulario.appendChild(etiqueta2);
    const nuevoNombre = document.createElement("input");
    nuevoNombre.type = "text";
    nuevoNombre.name = "nuevoCurp";
    nuevoNombre.id = "nuevoCurp"
    nuevoNombre.defaultValue = datosDefault.nombre;
    nuevoNombre.classList.add ("temporal");
    contenedorFormulario.appendChild(nuevoNombre);

    linea = document.createElement("hr")
    contenedorFormulario.appendChild(linea);

    const etiqueta3 = document.createElement("label")
    etiqueta3.textContent ="Cambia el teléfono ";
    etiqueta3.classList.add ("temporal");
    contenedorFormulario.appendChild(etiqueta3);
    const nuevoTelefono = document.createElement("input");
    nuevoTelefono.type = "text";
    nuevoTelefono.name = "nuevoCurp";
    nuevoTelefono.id = "nuevoCurp"
    nuevoTelefono.defaultValue = datosDefault.telefono;
    contenedorFormulario.appendChild(nuevoTelefono);

    linea = document.createElement("hr")
    contenedorFormulario.appendChild(linea);

    const aceptar = document.createElement('button');
    aceptar.textContent = 'Aceptar';
    aceptar.id = 'myDynamicButton';
    contenedorFormulario.appendChild(aceptar);
    aceptar.addEventListener('click', () => {
        const nuevosDatos = [nuevoCurp.value, nuevoNombre.value, nuevoTelefono.value]
        actualizarDatos (datosDefault.CURP, nuevosDatos, expData);
   
    });


    const cancelar = document.createElement('button');
    cancelar.textContent = 'Cancelar';
    cancelar.id = 'myDynamicButton';
    contenedorFormulario.appendChild(cancelar);
    cancelar.addEventListener('click', () => {
        limpiarFormulario ();
   
    })

    nuevoCurp.focus();
}

function limpiarFormulario (){
    const tablero = document.getElementById ("formulario")
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
}

function limpiarAplicantes (){
    const espacioAplicantes = document.getElementById("espacio")
    while (espacioAplicantes.firstChild) {
        espacioAplicantes.removeChild(espacioAplicantes.firstChild);
    }
}

function actualizarDatos (exp, nuevos, expData){    

    expData.forEach(expediente => {
        if (expediente.CURP === exp) { 
            expediente.CURP = nuevos[0];
            expediente.nombre = nuevos[1];
            expediente.telefono = nuevos[2];
            Swal.fire({
                title: "Datos actualizados",
                text: "",
                icon: "success"
            });
        limpiarAplicantes ()
        localStorage.clear();
        localStorage.setItem("aplicantes", JSON.stringify(expData))
        let actualizar = localStorage.getItem("aplicantes")
        actualizar = JSON.parse(actualizar)
        limpiarFormulario()
        //console.assert(actualizar)
        llenaEspacio(actualizar)
    
        }

    })
    
}


