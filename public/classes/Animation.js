export class Animation {
    constructor(imageSrc, frameWidth, frameHeight, frameCount, frameDelay, scale=1) {
        this.image = new Image();
        this.image.src = imageSrc;

        this.loaded = false;

        this.image.onload = () => {
            this.loaded = true;
        };

        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
        this.frameDelay = frameDelay;

        this.currentFrame = 0;
        this.frameTimer = 0;

        this.scaledWidth = frameWidth * scale;
        this.scaledHeight = frameHeight * scale;
    }

    // Animation on loop
    update() {
        if (!this.loaded) return;

        this.frameTimer++;
        if (this.frameTimer >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.frameTimer = 0;
        }
    }

    // Non-loop animation (use in Door.js)
    // Direction (+1) open (-1) close
    advanceFrame(direction=1) {
        if (!this.loaded) return;

        this.frameTimer++;
        if (this.frameTimer > this.frameDelay) {
            this.currentFrame += direction

            if (this.currentFrame >= this.frameCount) {
                this.currentFrame = this.frameCount - 1; // Stay CLOSED
                console.log("closing")
            } else if (this.currentFrame < 0) {
                this.currentFrame = 0; // Stay OPEN
                console.log("opening")
            }

            this.frameTimer = 0;
        }
    }

    draw(ctx, x, y) {
        if (!this.loaded) return;
        
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0, // sx, sy
            this.frameWidth, this.frameHeight,      // sWidth, sHeight
            x, y,                                   // dx, dy
            this.frameWidth, this.frameHeight       // dWidth, dHeight
        );
    }
}
