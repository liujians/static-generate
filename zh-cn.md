## 介绍

这是一个工具、工具的由来是因为公司要做一个模板生成页面html静态化、

但是每个页面的数据可能不一样，就需要做这样一个生成器

代码很简单、做了注释、



如果遇到了类似的需求、可以根据自己的需要来**基于这个项目、改写模板和CSS、JS**

## 安装和使用

不使用只是为了看代码：

	npm install static-generate

安装为了使用：

	npm install -g static-generate


使用方式：

	sg create <fileName>
	
	//参数fileName可选，
	//如果不填则使用默认的JSON做填充、
	//如果填写了会从当前目录获取到fileName.JSON去渲染，

## 配置

JSON的格式如下：

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

PS：如果想自己新创建一个可以使用：

	npm install -g yo
	npm install -g generator-cli-starter
	yo cli-starter

