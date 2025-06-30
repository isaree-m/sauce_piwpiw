export default class Player {
    constructor(x,y, isLocal = true) {
        // ---- position and size ----
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 48;

        // ---- movement and physics ----
        this.vx = 0;             // horizontal velocity
        this.vy = 0;             // vertical velocity
        this.speed = 2.5;        // run speed
        this.jumpForce = 10;     // initial jump impulse
        this.gravity = 0.5;      
        this.onGround   = false;

        // ---- sprites ----
        this.image = null;
        this.color = "red";

        //multiplayer check
        this.isLocal = isLocal;

    }
        // update
        update(keys) { 
            if (this.isLocal) {
                // local-only input
                 if (keys.left)         this.vx = -this.speed;
                 else if (keys.right)   this.vx = this.speed;
                 else                   this.vx = 0;
                
                 if (keys.jump && this.onGround) this.jump();
            }
            // global 
            if (this.onGround) {
                this.vy = 0;
            } else {
                this.vy += this.gravity;
            }
            this.x  += this.vx;
            this.y  += this.vy;

            // hitting ground (temporary for testing)
            if (this.y + this.height >= 550) {
                this.y = 550 - this.height;
                this.vy = 0;
                this.onGround = true;
            } else {
                this.onGround = false;
            }
        }
        // jump up
        jump() {
            this.vy = -this.jumpForce;
            this.onGround = false;
        }

        // draw image
         draw(ctx) {
            if (this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            } else {            
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }

        // set image
        setImage(img) {
            this.image = img;
        }
    }

