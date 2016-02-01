#!/usr/local/bin/node

var express = require('express');
var app = express();

app.get('/',function(req, res) {
    res.send('hello world');
})

app.get('/helloworld', function(req, res) {
    res.send({'value':'hello world'})
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("listening at http://%s:%s",host, port)

})

