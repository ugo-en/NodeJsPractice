var http = require("http");
var dt = require("./datetime.js")

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(dt.myDateTime().toString());
}).listen(8080)
