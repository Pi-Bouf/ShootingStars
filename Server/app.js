var Socket = require("socket.io")(3575);

Socket.on("connection", (client) => {
    console.log("Connecté ! :D");

    client.on("@c", (data) => {
        if(data == "?") {
            client.emit("@c", "Connecté !");
        }
    });
});