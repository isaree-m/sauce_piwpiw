import { Animation } from './Animation.js';

export class Door {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.assignedPlayerID = this.assignedPlayerID;
        this.isPlayerOnDoor = false;

        this.animation = new Animation (
            "./assets/sprites/door.jpg",
            144,     // frameWidth
            216,     // frameHeight
            5,       // frameCount
            5        // frameDelay
        );
    }

    update(player) {
        this.isPlayerOnDoor = (
            player.id === this.assignedPlayerID &&
            this.collidesWith(player)
        )

        if (this.isPlayerOnDoor) {
            // closed door -> stay open
            this.animation.advanceFrame(-1);
        } else {
            // opened door -> stay close
            this.animation.advanceFrame(+1);
        }
    }

    collidesWith(player) {
        return (
            player.x < this.x + this.animation.frameWidth &&
            player.x + player.width > this.x &&
            player.y < this.y + this.animation.frameHeight &&
            player.y + player.height > this.y
        )
    }

    draw(ctx) {
        this.animation.draw(ctx, this.x, this.y);
    }

}