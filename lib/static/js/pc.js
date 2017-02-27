// pc.js
$(function(){
	var name = ""
	$(".button").each(function(i){
		$(this).click(function(){
			name = $(".item").eq(i).find(".building").html();
			$(".modal_header").html(name);
			el_Dis($(".modal,.modal_box"),"block")
		})
	})
	$(".req").click(function(){
		ajax(name)
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
	function ajax(name){
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
			url:"/activity_registration",
			type:"post",
			data:{
				UserName:$("#UserName").val(),
				CellPhone:$("#CellPhone").val(),
				ActivityName:"waxf:cd:"+name+":111",
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