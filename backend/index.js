const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:'*'
    }
} );

const rooms = []
io.on("connection", (socket) => {
    socket.on("join_room", (room)=>{

        socket.join(room);

         console.log(`User with ID: ${socket.id} is joined room:${room}`);
    })
    socket.on("send_message", ({room,...msg})=>{
        if(rooms[room]===undefined){
            rooms[room]=[];
        }else {
            rooms[room].push(msg);
        }
        socket.emit("receive_message", rooms[room]);
    })
    socket.on("disconnect", () => {
        console.log("user disconnect"+socket.id);
    })
})
server.listen(8080,()=>{
    console.log("Listening on port 8080");
});