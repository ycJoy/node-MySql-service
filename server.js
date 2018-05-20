/*
	1、参考express文件托管、路由设置   http://www.expressjs.com.cn/

*/

var express = require('express');
var app = express();

var sqlAction = require('./route/sqlRoute'); //在应用中加载路由模块：数据库操作相关操作路由
app.use('/user', sqlAction);  	//接口访问示例：   http://localhost:8095/user/select

app.use('/static', express.static('public')); //利用 Express 托管静态文件：   http://localhost:8095/static/img/bird.jpg 


app.get('/', function (req, res) {
	res.send('Hello World!');
});

var server = app.listen(8095, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://localhost:' + port + '\n')
	
});