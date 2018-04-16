$(window).ready(function(){
	$(".main .brands .brands_body li").mouseenter(function(){
		$(this).find("span").css("display","block").end().siblings().find("span").css("display","none");
	}).mouseleave(function(){
		$(".main .brands .brands_body li span").css("display","none")
	})
	var addBtn = $(".addToCart");
	var shopCart = $(".shopCart");
	//console.log
	//var num = $("shopNum");
	var sum = 0;
	addBtn.click(function(){
		//alert($(this).offset().left)
		//1 定义三点坐标  商品的起始点  结束点  最高点
		var startPoint = {
 			x : $(this).offset().left+ $(this).outerWidth()/2,
 			y : $(this).offset().top
		}
		var endPoint = {
 			x : shopCart.offset().left + shopCart.outerWidth()/2,
 			y : shopCart.offset().top
		}
		var topPoint = {
 			x : endPoint.x - 100,
 			y : endPoint.y - 20
		}
		//2 根据三点坐标确定抛物线方程的三个系数 a  b   c
		//根据三点坐标确定抛物线的系数
		var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
				
		var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
				
		var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
		//console.log(a,b,c)
		//console.log(endPoint.x,endPoint.y)
		var goods = $("<div>")
		goods.addClass("active");
		$("body").append(goods);
		var x = startPoint.x;
		var y = startPoint.y;
		//console.log(x,y)
		//console.log(endPoint.x,endPoint.y)
		//console.log(topPoint.x,topPoint.y)
		//goods.css({"left":x,"top":y});
		//4 启动定时器 控制商品运动  操作left和top   left是抛物线某点的x  top是抛物线某点的y
		var timer = setInterval(function(){
			if( x < endPoint.x ){
				x = x + 5;
				y = a*x*x + b*x + c;
				goods.css({"left":x,"top":y});
				//console.log(x,y)
			}else{
				clearInterval(timer);
				goods.remove();
				sum++;
				shopCart.html(sum);
			}
		},30)
		//5 商品停止条件   
		
	})
})