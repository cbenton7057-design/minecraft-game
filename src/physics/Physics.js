class Physics {
    constructor() {
        // Initialize physics properties
        this.gravity = 9.81; // Simulated gravity
        this.entities = []; // List of entities to handle
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    applyGravity(deltaTime) {
        this.entities.forEach(entity => {
            if (!entity.isGrounded) {
                entity.velocity.y -= this.gravity * deltaTime;
            }
        });
    }

    handleCollisions() {
        for (let i = 0; i < this.entities.length; i++) {
            for (let j = i + 1; j < this.entities.length; j++) {
                const entityA = this.entities[i];
                const entityB = this.entities[j];
                // Simplified AABB collision detection
                if (this.checkCollision(entityA, entityB)) {
                    this.resolveCollision(entityA, entityB);
                }
            }
        }
    }

    checkCollision(entityA, entityB) {
        return (entityA.position.x < entityB.position.x + entityB.size.x &&
                entityA.position.x + entityA.size.x > entityB.position.x &&
                entityA.position.y < entityB.position.y + entityB.size.y &&
                entityA.position.y + entityA.size.y > entityB.position.y);
    }

    resolveCollision(entityA, entityB) {
        // Simple collision resolution
        const overlapX = (entityA.position.x + entityA.size.x / 2) - (entityB.position.x + entityB.size.x / 2);
        const overlapY = (entityA.position.y + entityA.size.y / 2) - (entityB.position.y + entityB.size.y / 2);
        if (Math.abs(overlapX) < Math.abs(overlapY)) {
            // Resolve on the x-axis
            if (overlapX > 0) {
                entityA.position.x += overlapX;
            } else {
                entityB.position.x -= overlapX;
            }
        } else {
            // Resolve on the y-axis
            if (overlapY > 0) {
                entityA.position.y += overlapY;
            } else {
                entityB.position.y -= overlapY;
            }
        }
    }
}

export default Physics;