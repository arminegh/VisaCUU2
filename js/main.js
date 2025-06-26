
// estos serían los expedientes que existen según su CURP 
const CURPexpedientes = ["GAHA771209MCHRRR08", "RETU870403HSOUYE76", "POLJ951108MDFUHS67"]
let existeCURP = false

function buscarExp (exp) {
    if (CURPexpedientes.includes(exp)){
        existeCURP = true;
    }
   
}

let CURP = prompt("Ingresa tu CURP").toUpperCase();
buscarExp (CURP)
console.log (existeCURP)


let menu = parseInt(prompt("1-Revisar si estoy pedido \n 2-Agregar experiencia \n 3-Revisar mi teléfono de contacto\n 4-Modificar mi teléfono de contacto \n 5-Salir"))
while(existeCURP && menu !=5 ) {
    switch(menu) {
        case 1:
            
            break
        case 2:
            
            break
        case 3:
            
            break
        case 4:
            
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt("1-Revisar si estoy pedido \n 2-Agregar experiencia \n 3-Revisar mi teléfono de contacto\n 4-Modificar mi teléfono de contacto \n 5-Salir"))
}



if (!existeCURP == true) {
    alert ("No existe expediente para esa CURP en VisaCUU")}