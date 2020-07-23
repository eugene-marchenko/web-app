const express = require("express");
const app = express();
const port = 9999;
var rootCounter = 1;
var appCounter = 1;

app.get("/", (req, res) => {
  processData(req, res, rootCounter);
  rootCounter++;
});

app.get("/app", (req, res) => {
  processData(req, res, appCounter);
  appCounter++;
});

app.get("/test", (req, res) => {
  res.end('Test endpoint');
});

app.get('*', function(req, res){
  if (req.accepts('json')) {
    res.status(404).send({ error: 'Not found',
               status: 404});
    return;
  }
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

function processData(req, res, x) {
  res.end('Request ' + x + ': ' + fuzz(x) + '\n');
}

function fuzz(x) {
  var result = null
  if (x % 5 === 0 && x % 3 === 0) {
    return 'FizzBuzz';
  } else if (x % 5 === 0) {
    return 'Buzz';
  } else if (x % 3 === 0) {
    return 'Fizz'
  } else {
    return x;
  }
}
