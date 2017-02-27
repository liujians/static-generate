// m.js
	$(function(){
		var el = $(".saleoff").map((index,item)=>{
			if(index % 2 != 0){
				return item;
			}
		})
		el.css("right","13px");
		el.css("left","auto");
		el.siblings('.textbox')
			.css("padding-left","10px")
			.find("div").css("text-align","left")
		var name = ""
		$(".button").each(function(i){
			$(this).click(function(){
				name = $(".textbox").eq(i).find(".building").html();
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
		$("#agrCheck").change(function(){
			if($("#agrCheck").is(':checked') == true){
				$(".req").removeClass('opac')
			}else{
				$(".req").addClass('opac')
			}
		})
		function ajax(name){
			if($("#UserName").val().trim() == ""){
				alert("请输入真实姓名")
				return
			}

			if($("#CellPhone").val().trim() == ""){
				alert("请输入手机号")
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
		$(".modal").click(function(e){
			el_Dis($(".success,.modal_box,.modal"),"none")
		})
		$(".modal_box").click(function(e){
			e.stopPropagation();
		})
		function el_Dis(obj,str){
			obj.css("display",str)
		}
	})