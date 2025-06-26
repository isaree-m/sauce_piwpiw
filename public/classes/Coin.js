import { Animation } from './Animation.js';

export class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.collected = false;

        this.animation = new Animation(
            "./assets/sprites/gold_coin.jpg",
            274,     // frameWidth
            505,     // frameHeight
            7,       // frameCount
            5        // frameDelay
        );
    }

    update(player) {
        if (!this.collected) {
            this.animation.update();
            if (this.collidesWith(player)) {
                this.collected = true;
                player.score += 1;
            }
        }
    }

    collidesWith(player) {
        return (
            player.x < this.x + this.animation.frameWidth &&
            player.x + player.width > this.x &&
            player.y < this.y + this.animation.frameHeight &&
            player.y + player.height > this.y
        );
    }

    draw(ctx) {
        if (!this.collected) {
        this.animation.draw(ctx, this.x, this.y);
        }
    }
}