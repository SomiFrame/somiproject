var express = require("express");
var app = express();
var path = require("path");
var bodyParser=require("body-parser");//body-parser use Resolve json data

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
app.all('*', function (req, res, next) {
    console.log('接收到一个请求');
    console.log('来源ip地址为:'+req.ip);

    next();
});
app.get('/', function (req, res) {
    res.send('首页');
});
app.get('/mh', function (req, res) {
    res.sendfile('./navigation/meihen.html');
});
app.get('/da', function (req, res) {
    res.sendfile('./daai.html');
});
app.get('/wgn', function (req, res) {
    res.sendfile('./wuguniang.html');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});