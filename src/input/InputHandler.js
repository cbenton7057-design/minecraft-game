class InputHandler {
    constructor() {
        this.keys = {};
        this.mouseButton = {};
    }

    init() {
        this.setupKeyEvents();
        this.setupMouseEvents();
    }

    setupKeyEvents() {
        window.addEventListener('keydown', (event) => {
            this.keys[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keys[event.key] = false;
        });
    }

    setupMouseEvents() {
        window.addEventListener('mousedown', (event) => {
            this.mouseButton[event.button] = true;
        });

        window.addEventListener('mouseup', (event) => {
            this.mouseButton[event.button] = false;
        });
    }

    isKeyPressed(key) {
        return this.keys[key];
    }

    isMouseButtonPressed(button) {
        return this.mouseButton[button];
    }

    handleMovement() {
        if (this.isKeyPressed('ArrowUp') || this.isKeyPressed('w')) {
            this.moveForward();
        }
        if (this.isKeyPressed('ArrowDown') || this.isKeyPressed('s')) {
            this.moveBackward();
        }
        if (this.isKeyPressed('ArrowLeft') || this.isKeyPressed('a')) {
            this.moveLeft();
        }
        if (this.isKeyPressed('ArrowRight') || this.isKeyPressed('d')) {
            this.moveRight();
        }
    }

    moveForward() {
        console.log('Moving forward');
    }

    moveBackward() {
        console.log('Moving backward');
    }

    moveLeft() {
        console.log('Moving left');
    }

    moveRight() {
        console.log('Moving right');
    }

    handleJump() {
        if (this.isKeyPressed('Space')) {
            this.jump();
        }
    }

    jump() {
        console.log('Jumping');
    }

    handleBlockPlacement() {
        if (this.isMouseButtonPressed(0)) { // Left mouse button
            this.placeBlock();
        }
    }

    placeBlock() {
        console.log('Placing block');
    }

    handleInteraction() {
        if (this.isMouseButtonPressed(1)) { // Right mouse button
            this.interact();
        }
    }

    interact() {
        console.log('Interacting');
    }
}

// Exporting the InputHandler class
export default InputHandler;