//选项卡  鼠标移动到bottom上，获取对应下标，small里显示对应照片

//移入区  mask  big 显示
$(window).ready(function(){
	fangdajShow();//放大镜显示
	xxkShow();//选项卡显示
	xzShow();//选择商品类型
	tabxtShow();//tab吸顶效果
})

function fangdajShow(){
	$(".main_top_left .picsmall li").mouseenter(function(){
		//alert()
		var index = $(this).index();
		$(this).css("border-color","#333")
		       .siblings()
		       .css("border-color","#ccc")
		console.log(index)
		$(".goodpic img").eq(index).css("display","block")
		               .siblings().css("display","none");
		$(".picbig img").eq(index).css("display","block")
		               .siblings().css("display","none"); 
		$("#mask").css("background","url(img/goods/goodimg"+(index+1)+"m.png)")       
	})
	//移入small区  mask  big 显示
	$(".goodpic").mouseenter(function(){
		$("#mask,.picbig").css("display","block");
		$("#layer").css("display","block");       
		//遮罩层移动
	}).mouseleave(function(){
		$("#mask,.picbig,#layer").css("display","none");
	})
	$(".goodpic").mousemove(function(e){
			var e = e || event;
			var _left = e.pageX - $(".main_top_left").offset().left - $("#mask").outerWidth()/2;
			var _top = e.pageY - $(".main_top_left").offset().top - $("#mask").outerHeight()/2;
			var maxL = $(".goodpic").outerWidth()-$("#mask").outerWidth();
			var maxT = $(".goodpic").outerHeight()-$("#mask").outerHeight();
			
			_left =  _left < 0 ? 0 : (_left > maxL ? maxL : _left);
			_top =  _top < 0 ? 0 : (_top > maxT ? maxT : _top);
			
			$("#mask").css({"left":_left,"backgroundPositionX":-_left}); 
			$("#mask").css({"top":_top,"backgroundPositionY":-_top});
			
			l = _left * ($(".picbig img").outerWidth()-2)/ ($(".goodpic").outerWidth()-2);
			t = _top * $(".picbig img").outerHeight()/ $(".goodpic").outerHeight();
			$(".picbig img").css("left",-l);
			$(".picbig img").css("top",-t);
	})
}

function xxkShow(){
	$(".main_bottom .goods_tab .goods_tab_tit  li").click(function(){
		//event.stopPropagation();
		$(this).css({"background":"#000","color":"#fff"})
		       .siblings()
		       .css({"background":"#fff","color":"#000"})
		var index = $(this).index();
		console.log(index)
		$(".main_bottom_right .goods_tab_con div").eq(index).css("display","block")
		                                          .siblings().css("display","none")
	})
}

function xzShow(){
	$(".main_top_right ul .goods_color dl:not(:last) dd span").mouseenter(function(){
		$(this).addClass("active")
	}).mouseleave(function(){
		//$(this).removeClass("active")
		$(".dianji").addClass("active").siblings().removeClass("active")
	}).click(function(){
		$(this).addClass("dianji")
		$(this).addClass("active")
		       		.siblings()
		       		.removeClass("dianji")
		       		.removeClass("active")
	})
}


function tabxtShow(){
	var Top = $(".main_bottom .goods_tab").offset().top;
	$(document).scroll(function(){
		var scrollTop = $("body,html").scrollTop();
//		
		//console.log(scrollTop)
		if(scrollTop>Top){
			//console.log(Top)
			$(".main_bottom .goods_tab").css({
				"position":"fixed",
				"top":0,
				"background":"#f",
				"margin":0
			})
			$(".main_bottom .goods_tab .goods_tab_tit  li").click(function(){
				$(document).scrollTop(Top-30)
			})
		}
		else{
			$(".main_bottom .goods_tab ").css({
				"position":""
			})
			$(".main_bottom .goods_tab").click(function(){
				$(document).scrollTop(scrollTop)
			})
		}
		
	})
}
