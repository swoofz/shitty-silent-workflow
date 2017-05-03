var express = require("express")
var app = express()

app.get('/', function(req, res) {
  res.send("This is the home page")
})

app.get('/shits/:id', function (req, res) {
  res.send("This is a shit pic page with shit id: " + req.params.id)
})

app.listen(3000, function () {
  console.log("Listening on port 3000.");
})
