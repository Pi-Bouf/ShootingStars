class Ship {
    constructor(context) {
        this.context = context;
        this.shipState = 0;
    }

    draw() {
        this.context.strokeStyle = '#ffffff';
        this.context.beginPath();
        this.context.moveTo(10, 0);
        this.context.lineTo(19, 19);
        this.context.lineTo(10, 9);
        this.context.moveTo(9, 9);
        this.context.lineTo(0, 19);
        this.context.lineTo(9, 0);

        //draw thrust
        if (this.shipState == 1) {
            this.context.moveTo(8, 13);
            this.context.lineTo(11, 13);
            this.context.moveTo(9, 14);
            this.context.lineTo(9, 18);
            this.context.moveTo(10, 14);
            this.context.lineTo(10, 18);
        }

        this.context.stroke();
        this.context.closePath();
    }
}