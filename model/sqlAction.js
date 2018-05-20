/*
	*1、封装MySQL操作模块，实现数据库增、删、改、查功能
	*
	*
	2、调用：
		1、 	http://localhost:8095/user/insert?username=test&&email=test
		
		2、		http://localhost:8095/user/deleteOne?username=test&&email=test
		
		3、		http://localhost:8095/user/update?username=3333&&email=yc@168.com
		
		4、		http://localhost:8095/user/search?username=test&&email=test
	
	3、url 解析：
		1、var reqUrl = url.parse(req.url);  
		
		console.log("reqUrl==="+JSON.stringify(reqUrl));
	//reqUrl==={"protocol":null,"slashes":null,"auth":null,"host":null,"port":null,"hostname":null,"hash":null,"search":"?name=123&&sex=rrr","query":"name=123&&sex=rrr","pathname":"/insert","path":"/insert?name=123&&sex=rrr","href":"/insert?name=123&&sex=rrr"}
		
		2、var obj = querystring.parse(reqUrl.query);
		console.log(JSON.stringify(obj, null, 4));
		
		{
			"name": "123",
			"sex": "rrr"
		}

	*
*/

var fs = require('fs');
var url = require('url');
var querystring = require('querystring');//在nodejs中，提供了querystring这个模块，用来做url查询参数的解析

var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'node-express', 
}); 
 
connection.connect();
 

function insert(req, res) {
	 	
	var reqUrl = url.parse(req.url);
	console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var username = obj.username || '';
	var email = obj.email || '';
	
	var sql = "INSERT INTO user(username,email,create_time) values('"+username+"','"+email+"',NOW())";
   
	console.log("sql INSERT ==="+sql);
	//查
	connection.query(sql,function (err, result) {
		if(err){
			console.log('[SELECT ERROR] - ',err.message);
			res.send(JSON.stringify({status:'fail',data:err.message}));
			return;
		}
		res.send(JSON.stringify({status:'ok',data:result}));
 
	    console.log('--------------------------SELECT----------------------------');
	    console.log(result);
	    console.log('------------------------------------------------------------\n\n');  
	});	 
	//connection.end(); //此处不能关闭连接，可能因为异步原因，下次调用将导致 SQL连接关闭：[SELECT ERROR] -  Cannot enqueue Query after invoking quit.
	
}



function deleteOne(req, res) {
	 	
	var reqUrl = url.parse(req.url);
	console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var username = obj.username || '';
	var email = obj.email || '';
	
	var sql = "DELETE FROM user WHERE username='"+username+"' AND email='"+email+"'"
	
	console.log("sql INSERT ==="+sql);
	//查
	connection.query(sql,function (err, result) {
		if(err){
			console.log('[SELECT ERROR] - ',err.message);
			res.send(JSON.stringify({status:'fail',data:err.message}));
			return;
		}
		res.send(JSON.stringify({status:'ok',data:result}));
 
	    console.log('--------------------------SELECT----------------------------');
	    console.log(result);
	    console.log('------------------------------------------------------------\n\n');  
	});	 
	//connection.end(); //此处不能关闭连接，可能因为异步原因，下次调用将导致 SQL连接关闭：[SELECT ERROR] -  Cannot enqueue Query after invoking quit.
	
}



function update(req, res) {
	 	
	var reqUrl = url.parse(req.url);
	console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var username = obj.username || '';
	var email = obj.email || '';
	
	var sql = "UPDATE user SET email='"+email+"' WHERE username='"+username+"'";
	
	console.log("sql INSERT ==="+sql);
	//查
	connection.query(sql,function (err, result) {
		if(err){
			console.log('[SELECT ERROR] - ',err.message);
			res.send(JSON.stringify({status:'fail',data:err.message}));
			return;
		}
		res.send(JSON.stringify({status:'ok',data:result}));
 
	    console.log('--------------------------SELECT----------------------------');
	    console.log(result);
	    console.log('------------------------------------------------------------\n\n');  
	});	 
	//connection.end(); //此处不能关闭连接，可能因为异步原因，下次调用将导致 SQL连接关闭：[SELECT ERROR] -  Cannot enqueue Query after invoking quit.
	
}


function search(req, res) {
	
	var reqUrl = url.parse(req.url);
	console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var username = obj.username || '';
		
    var  sql = 'SELECT * FROM user where username="'+username+'" ';
	console.log("sql SELECT ==="+sql);
	//查
	connection.query(sql,function (err, result) {
		if(err){
			console.log('[SELECT ERROR] - ',err.message);
			res.send(JSON.stringify({status:'fail',data:err.message}));
			return;
		}
		res.send(JSON.stringify({status:'ok',data:result}));
 
	    console.log('--------------------------SELECT----------------------------');
	    console.log(result);
	    console.log('------------------------------------------------------------\n\n');  
	});	 
	//connection.end(); //此处不能关闭连接，可能因为异步原因，下次调用将导致 SQL连接关闭：[SELECT ERROR] -  Cannot enqueue Query after invoking quit.
	
}

// 提供给其他模块使用的接口
module.exports = {
	insert: insert,
	deleteOne: deleteOne,
	update: update,
	search:search
};
