//$(window).ready(function(){
//	var timer = setInterval(autoPlay,5000);
//  var index = 0;
//  var $olist = $(".bannerwrap ol li");
//  var $ulist = $(".bannerwrap ul li");
//  function autoPlay(){
//  	index++;
//  	if( index == $olist.size() ){
//  		index = 0;
//  	}
//  	$olist.eq(index).addClass("active").siblings().removeClass("active");
//  	$ulist.eq(index).animate({left:0},5,function(){
//  		$(this).css("zIndex",0).siblings().css({"zIndex":1,"left":1210})
//  	});
//  }
//})