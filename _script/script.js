var l1Escolhido = false;
var l2Escolhido = false;
        
function mostrarFotoL1 (foto, tipo) {
    if (tipo == 1 && l1Escolhido == false)
        document.getElementById("L1").src = "_imagens/L1/" + foto + ".png";
    else if (tipo == 2 && l1Escolhido == false){
        document.getElementById("L1").src = "_imagens/L1/" + foto + ".png";
        l1Escolhido = true;
    }                
}

function mostrarFotoL2 (foto, tipo) {
    if (tipo == 1 && l2Escolhido == false)
        document.getElementById("L2").src = "_imagens/L2/" + foto + ".png";
    else if (tipo == 2 && l2Escolhido == false){
        document.getElementById("L2").src = "_imagens/L2/" + foto + ".png";
        l2Escolhido = true;
    }
}

function escolherOutro (lutador) {
    if (lutador == 'L1'){
        l1Escolhido = false;
    }else{
        l2Escolhido = false;
    }
}