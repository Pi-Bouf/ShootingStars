window.onload = () => { canvasApp() }

function canvasApp() {
    var theCanvas = document.getElementById("canvas");
    if (!theCanvas || !theCanvas.getContext) {
        return;
    }
    var context = theCanvas.getContext("2d");
    if (!context) {
        return;
    }

    const FRAME_RATE = 30;
    var intervalTime = 1000 / FRAME_RATE;

    var shipState = 0;

    gameLoop();

    function gameLoop() {
        drawScreen();
        window.setTimeout(gameLoop, intervalTime);
    }

    function drawScreen() {

        shipState++;
        if (shipState > 1) {
            shipState = 0;
        }

        // draw background and text
        context.fillStyle = '#000000';
        context.fillRect(0, 0, 500, 500);
        context.fillStyle = '#ffffff';
        context.font = '20px sans-serif';
        context.textBaseline = 'top';
        context.fillText("Player Ship - Static", 0, 480);

        //drawShip
        context.strokeStyle = '#ffffff';
        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(19, 19);
        context.lineTo(10, 9);
        context.moveTo(9, 9);
        context.lineTo(0, 19);
        context.lineTo(9, 0);

        //draw thrust
        if (shipState == 1) {
            context.moveTo(8, 13);
            context.lineTo(11, 13);
            context.moveTo(9, 14);
            context.lineTo(9, 18);
            context.moveTo(10, 14);
            context.lineTo(10, 18);
        }

        context.stroke();
        context.closePath();
    }
}