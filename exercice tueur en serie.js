class Survivant {
    constructor(liste_prenom_masculin, liste_prenom_feminin, personnage, survavibilite, derniere_volonte) {
        this.liste_prenom_masculin = liste_prenom_masculin || ["Tyler", "Caleb", "Adam", "Logan", "Jackson", "Cooper", "Blake"];
        this.liste_prenom_feminin = liste_prenom_feminin || ["Fiona", "Sharon", "Meredith", "Beverly", "Elizabeth", "Madison", "Courtney", "Ashley"];
        this.personnage = personnage;
        this.survavibilite = survavibilite;
        this.derniere_volonte = derniere_volonte;
    }
}

class Tueur {
    constructor(JasonPV) {
        this.JasonPV = JasonPV || 100;
    }

    attack(liste_survivants) {
        const cible = liste_survivants[Math.floor(Math.random() * liste_survivants.length)];
        const frappe = Math.random();
        if (frappe > cible.survavibilite) {
            const dernier_coup = Math.random();
            if (dernier_coup > cible.derniere_volonte) {
                this.JasonPV -= 15;
                console.log("Jason a tué " + cible.personnage + " mais a perdu 15 hp");
                liste_survivants.splice(liste_survivants.indexOf(cible), 1);
            } else {
                liste_survivants.splice(liste_survivants.indexOf(cible), 1);
                console.log(cible.personnage + " a été assassiné par Jason");
            }
            Morts.push(cible);
        } else {
            this.JasonPV -= 10;
            console.log(cible.personnage + " est parvenu à esquiver l'assaut de Jason et lui a fait perdre 10 hp");
        }
    }
}

const liste_prenom_masculin = ["Tyler", "Caleb", "Adam", "Logan", "Jackson", "Cooper", "Blake"];
const liste_prenom_feminin = ["Fiona", "Sharon", "Meredith", "Beverly", "Elizabeth", "Madison", "Courtney", "Ashley"];

const Geek = new Survivant(liste_prenom_masculin, null, "Geek", 0.8, 0.2);
const Pompom_girl = new Survivant(null, liste_prenom_feminin, "Pompom girl", 0.5, 0.5);
const Footballeur_americain = new Survivant(liste_prenom_masculin, null, "Footballeur américain", 0.6, 0.5);
const Gothique = new Survivant(null, liste_prenom_feminin, "Gothique", 0.3, 0.9);
const Policier = new Survivant(liste_prenom_masculin, null, "Policier", 0.65, 0.4);

const liste_survivants = [Geek, Pompom_girl, Footballeur_americain, Gothique, Policier];

const Jason = new Tueur(100);

const Morts = [];

while (Jason.JasonPV > 0 && liste_survivants.length > 0) {
    Jason.attack(liste_survivants);
    }

if (Jason.JasonPV <= 0) {
    console.log("L'équipe des survivants a réussi à tuer Jason mais " + Morts.length + " l'ont payé de leur vie");
}

if (liste_survivants.length === 0) {
    console.log("Tous les survivants sont morts, Jason ressort vainqueur de ce combat");
}

