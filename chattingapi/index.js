const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors : {origin: "*"}})

app.set('view engine','ejs')

app.get('/',(req,res)=>{
  res.send('chatting api')
})

server.listen(3000, ()=>{
  console.log('server is running on port 3000')
})

io.on('connection',(socket)=>{
  console.log('user connected '+socket.id)

  socket.on('message',(data)=>{
    console.log("message : "+data)
    io.emit('message',data)
  })
})

