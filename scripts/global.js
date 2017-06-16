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
        
        // Input event
        this.keyPressList = [];
        document.onkeydown = (e) => {
            //console.log(e.keyCode);
            this.keyPressList[e.keyCode] = true;
        };
        document.onkeyup = (e) => {
            this.keyPressList[e.keyCode] = false;
        };

    }

    loadAssets() {
        this.player = new Ship(this.context, 130, 130);
        this.player_2 = new Ship(this.context, 230, 330);
    }

    updateScene() {
        // draw background and text
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, 800, 800);
        this.context.fillStyle = '#ffffff';
        this.context.font = '20px sans-serif';
        this.context.textBaseline = 'top';
        this.context.fillText("Player Ship - Static", 0, 480);

        // Draw player
        this.player.draw(this.keyPressList);
        this.player_2.draw(this.keyPressList);
    }
}