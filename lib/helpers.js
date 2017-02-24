// helpers.js
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
require('shelljs/global')
var config = require('../config/');

var file = module.exports = {
	readFile : function(path) {
	    return fs.readFileSync(path, 'utf8').toString();
	},
	writeFile : function(name,content) {
	    return fs.writeFileSync(name, content);
	},
	renderFile : function(path,data) {
	    var str = this.readFile(path);
	    return ejs.render(str, data || {});
	},
	copy : function(){
		var pt = path.join(config.rootPath,"static/*")
		cp('-R',pt,"./")
	}
}