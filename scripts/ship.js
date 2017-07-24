class Ship {
    constructor(context, x, y) {
        this.context = context;
        this.shipState = 1;
        this.x = x;
        this.y = y;
        this.height = 28;
        this.width = 10;
        this.facingX = 0;
        this.facingY = 0;
        this.movingX = 0;
        this.movingY = 0;
        this.scale = 2;
        this.rotation = 0;
        this.angleInRadians = 0;
        this.rotationVelocity = 2;
        this.thrustAcceleration = 0.02;
        this.maximumVelocity = 2;
    }

    draw(keyPressList) {
        this.angleInRadians = this.rotation * Math.PI / 180;

        // Forward
        if (keyPressList[38] == true) {
            this.facingX = Math.cos(this.angleInRadians);
            this.facingY = Math.sin(this.angleInRadians);

            this.movingY -= this.thrustAcceleration * this.facingX;
            this.movingX += this.thrustAcceleration * this.facingY;
        }

        // Left
        if (keyPressList[37] == true) {
            this.rotation -= this.rotationVelocity;
            if (this.rotation < 0) {
                this.rotation = 360;
            }
        }

        // Right
        if (keyPressList[39] == true) {
            this.rotation += this.rotationVelocity;
            if (this.rotation > 360) {
                this.rotation = 0;
            }
        }

        let message = "State: OK !";

        this.x += this.movingX;
        this.y += this.movingY;

        this.context.save();
        this.context.scale(this.scale, this.scale);
        this.context.translate(this.x + (0.5 * this.width), this.y + (0.5 * this.height));
        this.context.rotate(this.rotation * Math.PI / 180);
        this.context.translate(-(this.x + (0.5 * this.width)), -(this.y + (0.5 * this.height)));

        // Head
        this.context.fillStyle = '#FF0000';
        this.context.fillRect(this.x + 5, this.y + 0, 1, 1);
        this.context.fillRect(this.x + 4, this.y + 1, 3, 1);
        // Body
        this.context.fillStyle = '#FFFFFF';
        this.context.fillRect(this.x + 4, this.y + 2, 3, 1);
        this.context.fillRect(this.x + 3, this.y + 3, 5, 2);
        this.context.fillRect(this.x + 2, this.y + 5, 7, 3);
        this.context.fillRect(this.x + 1, this.y + 8, 9, 19);
        // Details
        this.context.fillStyle = "#38529d";
        this.context.fillRect(this.x + 0, this.y + 23, 1, 5);
        this.context.fillRect(this.x + 1, this.y + 25, 1, 3);
        this.context.fillRect(this.x + 2, this.y + 27, 1, 1);

        this.context.fillRect(this.x + 10, this.y + 23, 1, 5);
        this.context.fillRect(this.x + 9, this.y + 25, 1, 3);
        this.context.fillRect(this.x + 8, this.y + 27, 1, 1);

        this.context.fillRect(this.x + 5, this.y + 25, 1, 4);
        this.context.fillRect(this.x + 4, this.y + 26, 3, 2);

        this.context.fillStyle = "#989898";
        this.context.fillRect(this.x + 5, this.y + 5, 1, 3);
        this.context.fillRect(this.x + 4, this.y + 6, 3, 1);

        this.context.fillRect(this.x + 5, this.y + 16, 1, 3);
        this.context.fillRect(this.x + 4, this.y + 17, 3, 1);
        this.context.fillRect(this.x + 5, this.y + 14, 1, 1);
        this.context.fillRect(this.x + 5, this.y + 20, 1, 1);
        this.context.fillRect(this.x + 2, this.y + 17, 1, 1);
        this.context.fillRect(this.x + 8, this.y + 17, 1, 1);

        // If forward
        if(keyPressList[38] == true) {
            if (this.shipState == 1) {
                this.context.fillStyle = "#ff3141";
                this.context.fillRect(this.x + 3, this.y + 27, 1, 4);
                this.context.fillRect(this.x + 7, this.y + 27, 1, 4);
                this.context.fillRect(this.x + 4, this.y + 30, 3, 2);
                this.context.fillRect(this.x + 5, this.y + 32, 1, 1);

                this.context.fillStyle = "#e1c03c";
                this.context.fillRect(this.x + 4, this.y + 29, 3, 1);
                this.context.fillRect(this.x + 5, this.y + 30, 1, 1);

                this.context.fillStyle = "#0080b5";
                this.context.fillRect(this.x + 4, this.y + 28, 1, 1);
                this.context.fillRect(this.x + 6, this.y + 28, 1, 1);

                this.shipState = 0;
            } else {
                this.shipState++;
            }
        }

        this.context.restore();

        this.context.fillStyle = '#ffffff';
        this.context.font = '20px sans-serif';
        this.context.textBaseline = 'top';
        this.context.fillText(message, (window.innerWidth - this.context.measureText(message).width) / 2, 10);
    }
}