var express = require('express');
var app = express();
var multer  = require('multer')();

app.use(express.static('public'));

app.post("/fileupload", multer.single('filetoupload'), function(req, res){
  res.send({size: req.file.size});
})

app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
