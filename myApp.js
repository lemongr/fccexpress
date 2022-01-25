var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(function(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", function(req, res) {
    res.json({"message": (process.env.MESSAGE_STYLE == 'uppercase' ? "HELLO JSON" : "Hello json")});
});

app.get("/now", function (req, res, next) {
  req.time = new Date().toString();
  next();
},
  function (req, res) {
    res.json({"time": req.time});
  });

app.use('/public', express.static(__dirname + '/public'));

app.get("/:word/echo", function(req, res) {
  res.json({echo: req.params.word});
});

app.route("name")
    .get((req, res) => {
  res.json({name: req.query.first + ' ' + req.query.last});
})
    .post((req, res) => {
      res.json({name: req.body.name});
    });
console.log('Hello World');


































 module.exports = app;
