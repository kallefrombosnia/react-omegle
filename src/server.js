const socket = require('socket.io')();

socket.on('error', err =>{
    console.log('error:' + err);
})

socket.on('connection', client =>{
    console.log(client);
});

socket.listen(8000);
