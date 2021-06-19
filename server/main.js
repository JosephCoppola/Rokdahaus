var express = require('express');
var path = require('path');
var router = require('./router.js');
const app = express();
var cors = require('cors');
//var io = require('socket.io')(http);

const port =  process.env.PORT || process.env.NODE_PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());

app.use(express.static(path.join(__dirname + '/../www')));
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});

//router(app, io);

//http.listen(port, () => {
//  console.log(`App listening on port ${port}!`);
//});

//io.on('connection', (socket) => {
//  console.log("Socket connected");
//  
//  socket.on('disconnect', function() {
//    console.log("Socket disconnected");
//  });
//});
