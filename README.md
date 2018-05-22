# node-MySql-service
	1、Node+Express 搭建本地接口服务器,接口提供MySql数据库增删改查功能
		node MySql  service，data operations ( insert, update, delete,search) 
		
	2、接口调用测试：
		
		1、 	http://localhost:8095/user/insert?username=test&&email=test
		
		2、		http://localhost:8095/user/deleteOne?username=test&&email=test
		
		3、		http://localhost:8095/user/update?username=3333&&email=yc@168.com
		
		4、		http://localhost:8095/user/search?username=test&&email=test
	
	3、express静态文件托管测试：
		 http://localhost:8095/static/img/bird.jpg 
		 
	4、项目结构：
	
		│  
		│  package-lock.json
		│  README.md
		│  server.js
		│  
		├─model
		│      sqlAction.js
		│ 
		│ 
		├─node_modules     
		│  
		│         
		├─public
		│  └─img
		│          bird.jpg
		│          chicken.jpg
		│          fish.jpg
		│          
		└─route
			sqlRoute.js

	
