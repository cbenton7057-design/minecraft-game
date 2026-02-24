class FriendlyMob {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.hunger = 10;
    }

    roam() {
        console.log(`${this.name} is roaming around.`);
        // AI behavior for roaming
    }

    eat() {
        if (this.hunger < 10) {
            this.hunger++;
            console.log(`${this.name} is eating.`);
        } else {
            console.log(`${this.name} is not hungry.`);
        }
    }

    die() {
        console.log(`${this.name} has died.`);
        // AI behavior for dying
    }
}

// Example usage:
const cow = new FriendlyMob('Cow');
cow.roam();
cow.eat();