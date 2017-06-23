window.onload = () => { new Game(); }

var bulletList = Array();
var explosionList = Array();

class Game {
    constructor() {

         var socket = io('http://localhost:3575');
         socket.on("connect", () => {
            socket.emit("@c", "?");
         });
         socket.on("@c", (data) => {
             alert(data);
         })

        // Configuration
        const FRAME_RATE = 60;

        var doc = document.getElementsByTagName("body")[0];
        this.canvasGame = document.createElement("canvas");
        this.canvasGame.setAttribute("id", "canvas");
        this.canvasGame.setAttribute("width", window.innerWidth);
        this.canvasGame.setAttribute("height", window.innerHeight);
        doc.appendChild(this.canvasGame);

        // Get canvas & context
        //this.canvasGame = document.getElementById("canvas");
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
            this.keyPressList[e.keyCode] = true;
        };
        document.onkeyup = (e) => {
            this.keyPressList[e.keyCode] = false;
        };

    }

    loadAssets() {
        this.player = new Ship(this.context, 130, 130);
    }

    updateScene() {
        // draw background and text
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // Draw player
        this.player.draw(this.keyPressList);
    }
}