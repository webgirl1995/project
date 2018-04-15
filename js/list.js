$(window).ready(function(){
	$(".main .brands .brands_body li").mouseenter(function(){
		$(this).find("span").css("display","block").end().siblings().find("span").css("display","none");
	}).mouseleave(function(){
		$(".main .brands .brands_body li span").css("display","none")
	})
})