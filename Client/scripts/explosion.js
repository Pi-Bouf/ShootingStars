class Explosition {
    constructor(x, y, velocity, number, context) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.context = context;
        this.number = number;
        this.revolution = 0;
    }

    draw() {
        for(var i = 0; i < this.number; i++) {
            let degree = i * (360 / this.number);
            let radian = degree * Math.PI / 180;

            let movingX = Math.cos(radian) * this.velocity;
            let movingY = -Math.sin(radian) * this.velocity;

            this.context.save();
            this.context.scale(3, 3);
            this.context.translate(movingX, movingY);

            this.context.fillStyle = '#282828';
            this.context.fillRect(this.x, this.y, 1, 1);


            this.context.restore();
        }

        this.velocity += 0.2;

        if(this.velocity >= 100) {
            explosionList.splice(explosionList.indexOf(this), 1);
        }
    }
}