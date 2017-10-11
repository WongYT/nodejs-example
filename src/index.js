var express = require('express');
var http = require('http');
var app = express();


app.get('/', function(req, res) {
    res.send('Wellcome!');
});

http.createServer(app);

app.listen(process.env.PROJECT_PORT || 8888, function(){
    console.log("API Server has started!");
});
