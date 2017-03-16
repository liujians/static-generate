// pc.js
$(function(){
	var q = window.location.search;
	if(q){
		var obj = {};
		q = q.substr(1);
		var arr = q.split("&")
		for(var i=0;i<arr.length;i++){
			var newarr = arr[i].split("=");
			obj[newarr[0]] = newarr[1]
		}
		if(obj.source=="5i5j"){
			$(".item a").each(function(i){
				$(this).attr("href",$(this).attr("href")+"?salesphoneno="+$(".item").data("phone1")+"&source="+obj.source)
			})
		}else{
			$(".item a").each(function(i){
				$(this).attr("href",$(this).attr("href")+"?salesphoneno="+$(".item").data("phone2")+"&source="+obj.source)
			})
		}
	}
	var name = ""
	var id = "";
	$(".button").each(function(i){
		$(this).click(function(){
			name = $(".item").eq(i).find(".building").html();
			id = $(".item").eq(i).data("id");
			$(".modal_header").html(name);
			el_Dis($(".modal,.modal_box"),"block")
		})
	})
	$(".req").click(function(){
		ajax(name,id)
	})
	$(".success_btn").click(function(){
		el_Dis($(".success"),"none")
		el_Dis($(".modal"),"none")
	})
	$(".modal").click(function(e){
		el_Dis($(".success,.modal_box,.modal"),"none")
	})
	$("#agrCheck").change(function(){
		if(!document.all){
			if($("#agrCheck").is(':checked') == true){
				$(this).siblings('span').addClass("mycheck")
				$(".req").removeClass('opac')
			}else{
				$(this).siblings('span').removeClass("mycheck")
				$(".req").addClass('opac')
			}
		}
	})
	function ajax(name,id){
		if($.trim($("#UserName").val()) == ""){
			alert("请输入真实姓名")
			return
		}

		if($.trim($("#CellPhone").val()) == ""){
			alert("请输入手机号")
			return
		}

		if(!$("#agrCheck").is(':checked')){
			alert("请同意相关协议")
			return
		}

		$.ajax({
			url:window.reqUrl,
			type:"post",
			data:{
				UserName:$("#UserName").val(),
				CellPhone:$("#CellPhone").val(),
				ActivityName:"特惠周:"+config.getCity()+":"+name+":"+id,
				CompanyCode:1000,
				SiteCode:10000
			},
			success:function(data){
				if(data.Code == 0){
					el_Dis($(".success"),"block")
					el_Dis($(".modal_box"),"none")
				}else{
					alert(data.Message);
				}
			}
		})
	}
	function el_Dis(obj,str){
		obj.css("display",str)
	}
})