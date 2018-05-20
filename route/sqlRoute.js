/*
	*1、封装MySQL路由，实现接口转发功能
	
*/

var express = require('express');
var router = express.Router();

var sqlAction = require('../model/sqlAction');//引入封装的数据库操作模块

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// 定义数据库接口插入数据路由
router.get('/insert', function(req, res) {
	sqlAction.insert(req, res);
    //res.send('Birds home page');
});

// 定义数据库接口删除数据路由
router.get('/deleteOne', function(req, res) {
	sqlAction.deleteOne(req, res);
    //res.send('Birds home page');
});

// 定义数据库接口更新数据路由
router.get('/update', function(req, res) {
	sqlAction.update(req, res);
    //res.send('Birds home page');
});

// 定义数据库接口查询数据路由
router.get('/search', function(req, res) {
	sqlAction.search(req, res);
    //res.send('Birds home page');
});



module.exports = router;






