class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    attack() {
        // Logic for attacking with this weapon
        console.log(`${this.name} attacks for ${this.damage} damage!`);
    }
}

module.exports = Weapon;