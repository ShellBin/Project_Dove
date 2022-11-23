const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('pd_ModuleReady', (msg) => {
    console.log(msg);
  });
  socket.emit('pd_Message', {
    bulletinSettingText: "ceshi"
  })
})

io.on('close', () => {
  console.log('a user disconnect')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
