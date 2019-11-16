//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
const bodyParser=require('body-parser')
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"music",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你

var server = express();

server.use(bodyParser.urlencoded({
  extended: false
  }));
server.use(cors({
  //允许程序列表
  
  origin:["http://127.0.0.1:4000","http://127.0.0.1:8080","http://localhost:8080","https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=%E6%88%91%E6%9C%9F%E5%BE%85"],
  credentials:true//每次请求需要验证
}))

//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT uid FROM music_user WHERE uname = ? AND upwd= ?";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 console.log(result)
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   //5.1:保存用户uid在session对象中
   //result数据格式 [{id:1}]
  req.session.uid = result[0].uid;
  res.send({code:1,msg:"登录成功"});
 }
 //(6)将结果返回脚手架
})
})




server.post('/register',(req,res)=>{
  var obj=req.body;
  // var uname=req.body.uname;
  // var upwd=req.upwd;
  // var email=req.email;
  // var phone=req.phone;
  // console.log(uname)
  console.log(obj)
  // pool.query('insert into music_user(uname,upwd,email,phone) values(?,?,?,?)',[uname,upwd,email,phone],(err,result)=>{
  pool.query('insert into music_user set ?',[obj],(err,result)=>{
			if (err) throw err;
			
			console.log(result);
			
			
			if (result.affectedRows>0)
			{
         res.send({code:1,msg:"注册成功"})
      }
      else{
         res.send({code:-1,msg:"注册失败"})
      }
			
 })
 })
//验证用户名和电话号是否可用
 server.get('/search',function(req,res){
  var uname = req.query.uname;
  var phone= req.query.phone;
	pool.query('select*from music_user where uname= ? or phone= ?',[uname,phone],(err,result)=>{
	if (err)throw err;
		console.log(result)
	if (result.length>0)
	{
		res.send(result)
	}
	else
		{
    res.send('可用')
		}
	
	})

})


server.get('/search2',function(req,res){
  var phone= req.query.phone;
	pool.query('select*from music_user where phone= ?',[phone],(err,result)=>{
	if (err)throw err;
		console.log(result)
	if (result.length>0)
	{
		res.send(result)
	}
	else
		{
    res.send('电话号未注册')
		}
	
	})

})







 