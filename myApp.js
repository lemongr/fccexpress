var express = require('express');
var app = express();
app.use(function(req, res) {
  console.log(req.method + ' ' + req.path + ' ' + req.ip);
  next();
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", function(req, res) {
    res.json({"message": (process.env.MESSAGE_STYLE == 'uppercase' ? "HELLO JSON" : "Hello json")});
});
app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');


































 module.exports = app;
