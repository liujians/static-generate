#!/usr/bin/env node
'use strict';
var program = require('commander');
var info = require('../package.json');
var Sg_global = require('../lib/sg_global');

const sg_global = new Sg_global();

program
	.version(info.version)
	.option('-v --version','get version')
program
	.command("create [fileName]")
	.action(function(fileName){
		sg_global.create(fileName)//将命令的参数传入
	})
program
	.parse(process.argv);//开始解析用户输入的命令
