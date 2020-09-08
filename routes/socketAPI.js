module.exports = function (io) {
  io.on("connection", function (socket) {
    console.log("user connected");

    socket.emit("connected", "message");

    socket.on("sendMessage", (msg) => {
      io.emit("message", msg);
    });

    socket.on("vote", (userChoice) => {
      io.emit("receiveVote", userChoice);
    });

    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
  });
};
