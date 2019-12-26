var express = require('express');
var app = express();
var port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('.'))

app.listen(8080);