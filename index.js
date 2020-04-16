var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var controller = require('./backend-app/controller');
//var conrollerObj = new controller();
app.use(bodyParser.json());

app.post('/mock/updateUser',controller.updateUser);

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})