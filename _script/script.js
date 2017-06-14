var l1Escolhido = false;
var l2Escolhido = false;
        
function mostrarFotoL1 (foto, tipo) {
    if (tipo == 1 && l1Escolhido == false)
        document.getElementById("L1").src = foto;
    else if (tipo == 2 && l1Escolhido == false){
        document.getElementById("L1").src = foto;
        l1Escolhido = true;
    }                
}

function mostrarFotoL2 (foto, tipo) {
    if (tipo == 1 && l2Escolhido == false)
        document.getElementById("L2").src = foto;
    else if (tipo == 2 && l2Escolhido == false){
        document.getElementById("L2").src = foto;
        l2Escolhido = true;
    }
}