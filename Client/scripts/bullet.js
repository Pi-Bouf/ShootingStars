class Bullet {
    constructor(facingX, facingY, velocity, context) {
        this.x = facingX;
        this.y = facingY;
        this.velocity = velocity;
        this.context = context
        this.number = 0;
        console.log(this.x, this.y);
    }

    draw() {
        this.x *= this.velocity;
        this.y *= this.velocity;

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