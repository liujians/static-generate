中文文档请看[这里](https://github.com/liujians/static-generate/blob/master/zh-cn.md)

## introduced

This is a tool, tool because of the company to do a template to generate HTML static page

But each page data may not be the same, they need to do such a generator

The code is very simple, made comments,



If you encounter a similar demand, can need according to oneself to **based on the project, rewrite the template and CSS, JS**

## Installation and use

Do not use just to see the code:

	npm install static-generate

In order to use the installation:

	npm install -g static-generate


Method of use:

	sg create <fileName>
	
	//fileName optional parameters
	//if you don't do is using the default JSON filling filling
	//if fill in will be obtained from the current directory to the fileName. The JSON to render，

## configuration

JSON format is as follows:

	{
		"comment":"这里是注释",
		"activeDes":"活动说明：通过本次活动报名参加的用户，可享受我爱我家与开发商联合的购房优惠，具体优惠即可购房源以开发商售楼处公示为准。",
		"city":"成都",
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
		]
	}

PS: if you want to own the newly created a can use:

	npm install -g yo
	npm install -g generator-cli-starter
	yo cli-starter
