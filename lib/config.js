// index.js
var path = require('path');
module.exports = {
	rootPath:path.join(__dirname,"../"),
	defaultJSON:{
		"comment":"这里是注释",
		"activeDes":"活动说明：通过本次活动报名参加的用户，可享受我爱我家与开发商联合的购房优惠，具体优惠即可购房源以开发商售楼处公示为准。",
		"products":[
			{
				"name":"项目名称1",
				"area":"区域1",
				"keys":"亮点描述1",
				"price":"价格描述1",
				"saleoff":"35"
			},
			{
				"name":"项目名称2",
				"area":"区域2",
				"keys":"亮点描述2",
				"price":"价格描述2",
				"saleoff":"25"
			},
			{
				"name":"项目名称3",
				"area":"区域2",
				"keys":"亮点描述3",
				"price":"价格描述3",
				"saleoff":"50"
			}
		],
		"city":"成都"
	}
}