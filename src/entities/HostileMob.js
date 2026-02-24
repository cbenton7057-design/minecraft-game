class HostileMob {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
    }

    attack(target) {
        target.takeDamage(this.attackDamage);
        console.log(`${this.name} attacks ${target.name} for ${this.attackDamage} damage!`);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage. Remaining health: ${this.health}`);
    }

    // AI behavior method
    wander() {
        console.log(`${this.name} is wandering aimlessly.`);
    }
}

// Example usage:
const zombie = new HostileMob('Zombie', 20, 5);
const skeleton = new HostileMob('Skeleton', 15, 4);
const spider = new HostileMob('Spider', 12, 3);

// Demonstrating behaviors
zombie.attack(skeleton);
skeleton.wander();
spider.attack(zombie);
