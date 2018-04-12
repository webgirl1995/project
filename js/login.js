$(window).ready(function(){
	$(".login .login_tab").on("click","li",function(){
		//alert()
		var index = $(this).index();
		$(this).css({"color":"#000"})
			.siblings()
			.css({
				"color":"#999"
			})
		$(".login_body>div").eq(3).css("display","block")	
		$(".login_body>div").eq(index).css("display","block")
		                    .siblings()
		                    .css("display","none")
	})
	$(".t_res").click(function(){
		$(".login").css("display","none");
		$(".hydl").css("display","none");
		$(".register").css("display","block");
		$(".zc").css("display","block");
	})
	$(".yyzh").click(function(){
		$(".login").css("display","block");
		$(".hydl").css("display","block");
		$(".register").css("display","none");
		$(".zc").css("display","none");
	})
//	$(".btn").mouseenter(function(){
//		$(this).animate("")
//	})
})
