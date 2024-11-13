var numTurno = 0;
var vittorie = 0;
var sconfitte = 0;

function Gioca(mossa){

    if (numTurno==5){ return; }

    let radio = document.querySelector("input[name='mossa']:checked");
    if (radio && radio.value==mossa){
        let risposta;
        let player = mossa;
        let bot = generaMossa();
        document.querySelector("#Gioc").src="img/"+player+".png";
        document.querySelector("#Gioc").style.display = "block";
        document.querySelector("#Avv").src="img/"+bot+".png";
        document.querySelector("#Avv").style.display = "block";
        
        switch (player){
            case bot:
                risposta = "Pareggio";
                break;
            case "carta":
                if (bot=="sasso"){
                    risposta = "Vinto";
                    vittorie++;
                } else { //bot == "forbice"
                    risposta = "Perso";
                    sconfitte++;
                }
                break;
            case "forbice":
                if (bot=="sasso"){
                    risposta = "Perso";
                    sconfitte++;
                } else { //bot == "carta"
                    risposta = "Vinto";
                    vittorie++;
                }
                break;
            case "sasso":
                if (bot=="forbice"){
                    risposta = "Vinto";
                    vittorie++;
                } else { //bot == "carta"
                    risposta = "Perso";
                    sconfitte++;
                }
                break;
        }

        risposta += `\nPunteggio totale: ${vittorie} vittorie, ${sconfitte} sconfitte, ${numTurno+1-vittorie-sconfitte} pareggi`;

        if (numTurno==4){
            risposta += "\nIn totale tu hai " + (vittorie>sconfitte ? "vinto" : vittorie<sconfitte ? "perso" : "pareggiato");
        }

        document.getElementById("output").innerText = risposta;
        numTurno++;

    } else {
        document.getElementById("output").innerText = "Errore input";
    }
}

function generaMossa(){
    let n = Math.floor(Math.random()*3);
    switch (n) {
        case 0:
            return "carta";
        case 1:
            return "sasso";
        case 2:
            return "forbice";
    }
}