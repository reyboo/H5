'use strict';

let mongoose = require('mongoose');

/*用户表*/
let SchemaUsers = new mongoose.Schema({
	userName: String,					/*用户名*/
	passWord: String,					/*密码*/
	eMail: String,						/*邮箱*/
	nikeName: String,					/*昵称*/
	userImage: String,					/*头像*/
	Gender: String,						/*性别*/
	age: String,						/*年龄*/
	personalizedSignature:String,		/*个性签名*/
	place: String						/*所在区域*/
})

let Users = mongoose.model('Users', SchemaUsers);

/*音乐表*/
let SchemaMusics = new mongoose.Schema({
	userName: String,					/*用户名*/
	path: String,						/*路径*/
	musicName: String,					/*音乐名称*/
	type: String,						/*音乐类型*/
	size: Number,						/*音乐大小*/
	date: {type:Date,default:Date.now}, /*上传时间*/
})

let Musics = mongoose.model('UserMusics', SchemaMusics);