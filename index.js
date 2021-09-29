//  https://blog.crowdbotics.com/build-chat-app-with-nodejs-socket-io/
//  a pretty good but circuitous route to get to this point
//  read the article but reference this code

const express = require('express');     //  everyones favorite package
const app = express()                   //  make this code an express router
const server = require('http').createServer(app)
const port = process.env.PORT || 3000   //  setting up a server on port 3000
const io = require('socket.io')(server) //  create the socket handler and tell it who our server is
const path = require('path')            //  path package knows about the server environment the code is running on

//    the use method is how a URL path is asociated with a JS file to handle browsesr requests 
//    use has two params (usually) param one is the path for the URL and param 2 is the router to be called
//    here we have a single param. the param is a reference to the folder where our router will be found
app.use(express.static(path.join('./public')))

server.listen(port, () => {         //  start the server listening on port 3000
  console.log(`Server running on port: ${port}`)
})

io.on('connection', socket => {             //  io is our socket handler. When the connection happens call this code
    console.log('Some client connected');

    //  We have a connection for a socket
    socket.on('chat1', message => {          //  add a handler for the socket called 'chat'   
      console.log('From client: ', message);
      io.emit('chat1', message);           //  when we get an event on that socket broadcast that message to all 
  });
    //  We have a connection for a socket
    socket.on('chat2', message => {          //  add a handler for the socket called 'chat'   
      console.log('From client: ', message);
      io.emit('chat2', message);           //  when we get an event on that socket broadcast that message to all 
  });
});