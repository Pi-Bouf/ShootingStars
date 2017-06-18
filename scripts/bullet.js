class Bullet {
    constructor(x, y, facingX, facingY, velocity, context) {
        this.x = x;
        this.y = y;
        this.facingX = facingX;
        this.facingY = facingY;
        this.velocity = velocity;
        this.context = context
        this.number = 0;
    }

    draw() {
        this.x += this.velocity * this.facingX;
        this.y -= this.velocity * this.facingY;

        this.context.save();

        this.context.scale(3, 3);
        this.context.fillStyle = '#FFFFFF';
        this.context.fillRect(this.x, this.y, 1, 1);

        this.context.restore();

        this.number++;

        if(this.number == 200) {
            bulletList.splice(bulletList.indexOf(this), 1);
        }
    }
}