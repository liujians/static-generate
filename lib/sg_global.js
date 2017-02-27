// sg_global.js
var fs = require('fs');
var color = require('colors');
var path = require('path');
var helpers = require('./helpers');
var config = require('./config');
var ora = require('ora')

var sg_global = module.exports = function (){

}
sg_global.prototype.create = function(fileName){
	var spinner = ora("please wait...");//等待进度的声明
	spinner.start();
	let data;
	if(fileName == undefined){
		data = config.defaultJSON;//对没有输入文件名赋予JSON默认值
	}else{
		let exp = /\.(json)$/;//正则判定有没有后缀名
		if(!exp.test(fileName)){
			fileName = fileName +".json";//没有后缀名的补上后缀名
		}
		let str = helpers.readFile(path.join(process.cwd(),fileName));//读取当前目录下的JSON
		data = JSON.parse(str);
	}
	// console.log(path.join(config.rootPath,"templates/m.ejs"))
	var m_html = helpers.renderFile(path.join(config.rootPath,"lib/templates/m.ejs"),data);//把ejs模板传入数据、编译成html返回
	var pc_html = helpers.renderFile(path.join(config.rootPath,"lib/templates/pc.ejs"),data);
	helpers.writeFile("m.html",m_html);//写入文件
	helpers.writeFile("pc.html",pc_html);
	helpers.copy();//复制静态资源
	spinner.stop();
	console.log("=========success===========".bold.red)
}