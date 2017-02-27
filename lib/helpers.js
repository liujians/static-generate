// helpers.js
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var config = require('./config');

require('shelljs/global');


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
		var pt = path.join(config.rootPath,"lib/static/*")
		cp('-R',pt,"./")
	}
}