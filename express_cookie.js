var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
})
 
let server = app.listen(8081, "127.0.0.1", function () {
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://" + host + ':' + port)
})