var express = require('express');
var port = process.env.PORT || 1337;
var app = express();
app.use(express.static(__dirname));


    app.get('/', function(req, res){
        res.render('index');
    });

app.listen(port);
console.log('Listening on port' + port);