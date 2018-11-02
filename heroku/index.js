var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello!')
})

app.listen(PORT)
