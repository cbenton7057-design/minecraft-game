// Tool.js
// This module handles the mining tools and their effectiveness on different block types.

class Tool {
    constructor(name, effectiveness) {
        this.name = name;
        this.effectiveness = effectiveness; // mapping of block types to effectiveness
    }

    mine(block) {
        if (this.effectiveness[block.type] !== undefined) {
            console.log(`Mining ${block.name} with ${this.name} yields effectiveness: ${this.effectiveness[block.type]}`);
        } else {
            console.log(`${this.name} is not effective on ${block.name}`);
        }
    }
}

// Example usage:
// const pickaxe = new Tool('Pickaxe', { 'stone': 2, 'diamond': 4 });
// pickaxe.mine({ name: 'Diamond Ore', type: 'diamond' });

module.exports = Tool;