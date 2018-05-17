var countAdulto = 1;
var countCrianca = 0;
var countQuarto = 1;

function countMenor(){
    countAdulto--;
    document.getElementById("adultos").value = countAdulto;
    if(countAdulto <= 0){
        alert("A reserva precisa ter ao menos um adulto selecionado");
        document.getElementById("adultos").value = 1;
        countAdulto = 1;
    }
}

function countMaior(){
    countAdulto++;
    document.getElementById("adultos").value = countAdulto;
    if(countAdulto > 8){
        alert("A reserva não pode ser feita para mais de 8 adultos");
        document.getElementById("adultos").value = 8;
        countAdulto = 8;
    }
}

function countMenorCriancas(){
    countCrianca--;
    document.getElementById("criancas").value = countCrianca;
    if(countCrianca < 0){
        document.getElementById("criancas").value = 0;
        countCrianca = 0;
    }
}

function countMaiorCriancas(){
    countCrianca++;
    document.getElementById("criancas").value = countCrianca;
    if(countCrianca > 8){
        alert("A reserva não pode ser feita com mais de 8 crianças");
        document.getElementById("criancas").value = 8;
        countCrianca = 8;
    }
}

function countMenorQuartos(){
    countQuarto--;
    document.getElementById("quartos").value = countQuarto;
    if(countQuarto <= 0){
        alert("A reserva precisa ter ao menos um quarto selecionado");
        document.getElementById("quartos").value = 1;
        countQuarto = 1;
    }
}

function countMaiorQuartos(){
    countQuarto++;
    document.getElementById("quartos").value = countQuarto;
    if(countQuarto > 5){
        alert("A reserva não pode ser feita para mais de 5 quartos");
        document.getElementById("quartos").value = 5;
        countQuarto = 5;
    }
}
