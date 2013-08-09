var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// initializing buffer and loading contents into file
var buffer = new Buffer(256);
buffer = fs.readFileSync('index.html', 'utf-8');
//console.log(file);

//buffer = buffer.write(file, "utf-8");
len = buffer.length;

console.log(buffer);
//console.log(buffer.toString('utf-8'));
//console.log(Buffer.isBuffer(buffer));

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
