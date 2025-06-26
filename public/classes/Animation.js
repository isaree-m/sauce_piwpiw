export class Animation {
    constructor(imageSrc, frameWidth, frameHeight, frameCount, frameDelay) {
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
    }

    update() {
        if (!this.loaded) return;

        this.frameTimer++;
        if (this.frameTimer >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.frameTimer = 0;
        }
    }

    draw(ctx, x, y) {
        if (!this.loaded) return;

        console.log("coin drawn")
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0, // sx, sy
            this.frameWidth, this.frameHeight,      // sWidth, sHeight
            x, y,                                   // dx, dy
            this.frameWidth, this.frameHeight       // dWidth, dHeight
        );
    }
}
