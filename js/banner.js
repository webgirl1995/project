
$(window).ready(function(){
	/*轮播图*/
	new Slider($(".bannerwrap .banner .banner_img"),$(".bannerwrap .banner ol"),$(".bannerwrap .banner"),$(".bannerwrap .banner .arr")).init();
    new Slider($(".jdxb .goodbox .goodbox_img"),$(".jdxb .goodbox ol"),$(".jdxb .goodbox"),$(".jdxb .goodbox .arr")).init();
    new Slider($(".dcwb .goodbox .goodbox_img"),$(".dcwb .goodbox ol"),$(".dcwb .goodbox"),$(".dcwb .goodbox .arr")).init();
    new Slider($(".jzps .goodbox .goodbox_img"),$(".jzps .goodbox ol"),$(".jzps .goodbox"),$(".jzps .goodbox .arr")).init();
     new Slider($(".ghhz .goodbox .goodbox_img"),$(".ghhz .goodbox ol"),$(".ghhz .goodbox"),$(".ghhz .goodbox .arr")).init();
})
function Slider(ul,ol,box,a){
	this.ul = ul.find("li");
	this.ol = ol.find("li");
	this.box = box
	this.a = a;
	this.index = 0;
}
Slider.prototype={
	init : function(){
		//console.log(this.ol)
		this.mouseOperate();
	    this.timer = setInterval(function(){
	    	this.autoPlay();
	    }.bind(this),2000);
	    
	},
	autoPlay : function(){
		//console.log(1);
		this.index++;
		if( this.index == this.ol.size() ){
			this.index = 0;
		}
		this.ol.eq(this.index).addClass("active").siblings().removeClass("active");
		this.ul.eq(this.index).fadeIn(1000).siblings().fadeOut(1000);
		
	},
	mouseOperate : function(){
		var that = this;
		this.ol.mouseenter(function(){
			clearInterval(that.timer);
			that.index = $(this).index()-1;
//			console.log($(this).index())
			that.autoPlay();	
		})
//		.mouseleave(function(){
//			that.timer = setInterval(function(){
//				this.autoPlay()
//			}.bind(that),2000)
//		})
		this.box.mouseenter(function(){
			that.a.css("display","block")
			clearInterval(that.timer);
		}).mouseleave(function(){
			that.a.css("display","none");
			that.timer = setInterval(function(){
				this.autoPlay()
			}.bind(that),2000)
		})
		this.a.find(".pre").mousedown(function(){
			//alert();
			that.index -= 2;
			console.log(that.index)
			var size = -that.ol.size()-1;
			if( that.index == size ){
				that.index = -1;
			}
			that.autoPlay();
		})
		this.a.find(".next").mousedown(function(){
			//alert();
			that.autoPlay();
			console.log(that.index)	
		})
	}
}
