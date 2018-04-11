$(window).ready(function(){
	menuShow();//菜单
	brandShow();//品牌
	rightmenuShow();//右侧固定菜单
	loutiShow();//楼梯
    hotstoreShow();	
    hotitemShow();
    shoppingtabShow();
})


function rightmenuShow(){
	$(".rightmenuwrap ul li:last").click(function(){
		$(".rightmenuwrap ul li").find("span").fadeOut();
		$("body,html").animate({"scrollTop":0},1500)
	})
	$(".rightmenuwrap ul li:not(:last)").mouseenter(function(){
		console.log($(this).index())
		$(this).find("span").stop().fadeIn(1000)
		       .end().siblings().find("span").stop().fadeOut(100)
	})
	$(".rightmenuwrap ul li:last").hover(function(){
		$(".rightmenuwrap ul li").find("span").stop().fadeOut(100);
	})
	
}

function loutiShow(){
	$(".loutiNav ul li:last").click(function(){
		flag = false;
		$("body,html").animate({"scrollTop":0},1500,function(){
			flag = true;
			$(".loutiNav li").find("span").css("display","none");
			$(".loutiNav").css("display","none")
		});
	})
	$(".loutiNav ul li:not(:last)").mouseenter(function(){
		$(this).find("span")
			   .stop()
		       .show(300)
		       .end()
		       .siblings()
		       .find("span")
		       .stop()
		       .hide(300)
	})
	var flag = true;//值为true时   可以操作滚动条
	$(".loutiNav ul li:not(:last)").click(function(){
		//alert()
		flag = false;
		var index = $(this).index();
		console.log(index);
		var divTop = $(".louti").eq(index).offset().top;
		console.log(divTop);
		$("body,html").animate({"scrollTop":divTop-50},1500,function(){
			flag = true;
		});
	})
	$(window).scroll(function(){
		if( flag ){
			var sTop = $(document).scrollTop();
			
			if(sTop>200){
				$(".loutiNav").css("display","block")
			}else{
				$(".loutiNav").css("display","none")
			}
			//console.log(sTop)
			//console.log($(".louti").eq(5).outerHeight())
			$floor = $(".louti").filter(function(){
				//console.log($(this).outerHeight()/2)
				return Math.abs($(this).offset().top-sTop)<$(this).outerHeight()/2;
			})
			var index = parseInt($floor.attr("index"));
			//console.log(index)
			
			if($floor.index() != -1){
				$(".loutiNav li:not(:last)").eq( index )
				                         .find("span")
				                         .stop()
		       							 .show(100)
//				                         .css("display","block")
				                         .end()
				                         .siblings()
				                         .find("span")
				                         .stop()
		       						     .hide(100)
			}else{
				$(".loutiNav li").find("span").hide();
			}
		}
	})
	
}



function menuShow(){
	for( var i = 0 ; i < $(".nav_menu ul li").size(); i++ ){
		$(".nav_menu ul li").eq(i).find(".nav_menu_list").css({
			"background" : "#fff url(img/brand_category1.png) no-repeat",
			"background-position-y" : -i*33,
		})
	}
	$(".nav_first").mouseenter(function(){
		$(".nav_menu").css("display","block");
	}).mouseleave(function(){
		$(".nav_menu").css("display","none");
	})
	$(".nav_menu ul li").mouseenter(function(){
		index = $(this).index();
		$(this).find(".nav_menu_list").css({
			"background" : "#fff url(img/brand_category2.png) no-repeat",
			"background-position-y" : -index*33,
		})
	    $(this).find(".nav_menu_list a i").css("display","block")
        $(this).find(".nav_menu_show").css("display","block")
	}).mouseleave(function(){
		$(this).find(".nav_menu_list a i").css("display","none")
		$(this).find(".nav_menu_show").css("display","none")
		$(this).find(".nav_menu_list").css({
			"background" : "#fff url(img/brand_category1.png) no-repeat",
			"background-position-y" : -index*33
		})
	})
}

function brandShow(){
	$(".brand_list li").mouseenter(function(){
		$(this).find(".brand_cont").stop().animate({top:0},1000)
	}).mouseleave(function(){
		$(this).find(".brand_cont").stop().animate({top:90},1000)
	})
}

function hotstoreShow(){
	$(".hotstore_list ul li").mouseenter(function(){
		$(this).css("box-shadow","2px 2px 1px #ccc")
		       .siblings()
		       .css("box-shadow","0px 0px 0px #ccc")
		$(this).find("img").css("display","none")
		       .end()
		       .find("span").css("display","block")
	}).mouseleave(function(){
		$(this).find("img").css("display","block")
		       .end()
		       .find("span").css("display","none")
	});
}

function hotitemShow(){
	$(".hotitem .hotitem_tab ul li").mouseenter(function(){
		$(this).css("background","#000")
		       .siblings()
		       .css("background","#999")
		var index = $(this).index();
		//console.log(index)
		$(".hotitem .hotitem_show .hotitem_list_show").css("margin-left",-index*1210)
	})
}
function shoppingtabShow(){
	$(".shopping .shopping_tab li").mouseenter(function(){
		//alert()
		$(this).find(".shoppingbox").animate({top:-50},500)
		       .end()
		       .siblings()
		       .find(".shoppingbox")
		       .stop()
		       .animate({top:0},500)
	}).mouseleave(function(){
		$(".shopping .shopping_tab li").find(".shoppingbox").animate({top:0},500)
	})
}

function goodsboxShow(){
	
}
