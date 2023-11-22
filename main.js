function verificarPermissao() {
    var finalPlaca = document.getElementById("finalPlaca").value;
    var diaSemana = document.getElementById("diaSemana").value;
    const texto = document.querySelector('#gg')

    if(((finalPlaca == 1 || finalPlaca == 2) && diaSemana == "Segunda-feira") ||
        ((finalPlaca == 3 || finalPlaca == 4) && diaSemana == "Terça-feira" )||
        ((finalPlaca == 5 || finalPlaca == 6) && diaSemana == "Quarta-feira")||
        ((finalPlaca == 7 || finalPlaca == 8) && diaSemana == "Quinta-feira")||
        ((finalPlaca == 9 || finalPlaca == 0) && diaSemana == "Sexta-feira")){
        texto.innerHTML="Você não pode trafegar hoje.";
    } else{
       texto.innerHTML="Você pode trafegar hoje.";
    }
}

