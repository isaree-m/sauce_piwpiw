import { Animation } from './Animation.js';

export class Door {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.animation = new Animation(
            "./assets/sprites/goal_door.jpg",
            274,     // frameWidth
            505,     // frameHeight
            7,       // frameCount
            5        // frameDelay
        );
    }

}