let contatore = 0;

function aumenta(){
    contatore++;
    document.getElementById("numero").innerHTML = contatore;
}

function diminuisci(){
    if(contatore != 0){
        contatore --;
    }
    document.getElementById("numero").innerHTML = contatore
}