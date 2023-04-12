const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User: ${socket.id}에 연결됨`);

  socket.on("send_message", (data) => {
    console.log("data :>> ", data);
    socket.to(`${data.roomNumber}`).emit("receive_message", data);
  });

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`Uesr ${socket.id} joined roomNumber ${data}`);
  });
});

const PORT = 3001 || process.nev.PORT;

server.listen(PORT, () => {
  console.log(`${PORT} 연결 완료`);
});
