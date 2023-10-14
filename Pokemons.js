class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        if (Math.random() < this.luck) {
            return true;
        } else {
            return false;
        }
    }

    attackPokemon(cible) {
        if (this.isLucky()) {
            let degats = this.attack - cible.defense;
            if (degats > 0) {
                cible.hp = cible.hp - degats;
            }
            console.log(this.name + " a attaqué " + cible.name + " et lui a infligé " + degats + " dégâts. " + cible.name + " a maintenant " + cible.hp + " points de vie.");
            if (cible.hp <= 0) {
                console.log(cible.name + " est mort");
            }
        } else {
            console.log(this.name + " a manqué son attaque contre " + cible.name + ".");
        }
    }
}

let Dracofeu = new Pokemon("Dracofeu", 50, 30, 400, 0.45);
let Amphinobi = new Pokemon("Amphinobi", 30, 40, 215, 0.80);

while (Dracofeu.hp > 0 && Amphinobi.hp > 0) {
    Dracofeu.attackPokemon(Amphinobi);
    if (Amphinobi.hp > 0) {
        Amphinobi.attackPokemon(Dracofeu);
    }
}

if (Dracofeu.hp <= 0) {
    console.log("Dracofeu a perdu le combat");
} else {
    console.log("Amphinobi a perdu le combat");
}

