let prenom = "John"
let sante_mentale = 10
let liste_musiques = ["Anissa - Wejdene", "FE!N - Travis Scott feat. Playboi Carti", 
                    "Link Up - Bu$hi", "Derniere Danse - Indila", "MaDrug - menace Santana"]
let feux_rouges = 30
let changements = 0

function trajet(){
    radio = Math.floor(Math.random() * 5)
    feux_rouges = feux_rouges - 1
    if (liste_musiques[radio] === "Anissa - Wejdene"){
        sante_mentale = sante_mentale - 1
        changements = changements + 1
        
    }
    if (sante_mentale === 0){
            console.log("explosion")
    }if (feux_rouges === 0){
            console.log("John a atteint sa destination, il lui a fallu " + changements + " changements de taxis pour y arriver")
    }else{
        console.log("John écoute " + liste_musiques[radio] + ". Il lui reste " + feux_rouges + " feux rouges à parcourir avant d'arrvier chez lui")
    }
}

while (feux_rouges > 0 && sante_mentale > 0) {
    trajet();
}