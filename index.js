var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var controller = require('./mock-api/controller');
//var conrollerObj = new controller();
app.use(bodyParser.json());
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
   res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
   if (req.method === 'OPTIONS') {
      return res.send(200);
  } else {
      return next();
  }
});

app.get('/mock/getUser/:phone',controller.getUser);
app.post('/mock/updateUser',controller.updateUser);

var server = app.listen(3002, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})