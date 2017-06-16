window.onload = () => { new Game(); }

class Game {
    constructor() {
        // Configuration
        const FRAME_RATE = 30;

        // Get canvas & context
        this.canvasGame = document.getElementById("canvas");
        this.context = this.canvasGame.getContext("2d");

        // Load assets
        this.loadAssets();

        // Game loop
        var intervalTime = 1000 / FRAME_RATE;
        setInterval(() => {
            this.updateScene();
        }, intervalTime);
        
        this.keyPressList = [];

        document.onkeydown = function(e) {
            console.log(e.keyCode);
            //this.keyPressList[e.keyCode] = true;
        };

        document.onkeyup = function(e) {
            //console.log(e.keyCode + "up");
            //this.keyPressList[e.keyCode] = false;
        };

    }

    loadAssets() {
        this.player = new Ship(this.context);
    }

    updateScene() {
        // draw background and text
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, 800, 800);
        this.context.fillStyle = '#ffffff';
        this.context.font = '20px sans-serif';
        this.context.textBaseline = 'top';
        this.context.fillText("Player Ship - Static", 0, 480);

        this.player.draw();
    }
}