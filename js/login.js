$(window).ready(function(){
	var flagState = null;//true登录页面 false注册页面
	
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
		flagState = false;
		stateChange(flagState)
		$(".hydl").css("display","none");
		$(".zc").css("display","block");
	})
	$(".yyzh").click(function(){
		flagState = true;
		stateChange(flagState)
		$(".hydl").css("display","block");
		$(".zc").css("display","none");
	})
	function stateChange(flagState){
			if(flagState){
			$(".main .login").css("display","block")
			$(".main .register").css("display","none")
		}else{
			$(".main .login").css("display","none")
			$(".main .register").css("display","block")
		}
	}
	
	var flaglPhone = null;
	//点击登录
	$(".main .login .login_body .login_btn").click(function(){
		var loginphone = $(".main .login .login_body .zhlogin .login_phone").val();
		var loginpwd = $(".main .login .login_body .zhlogin .login_pwd").val();
		if(flaglPhone){
			$.ajax({
				type:"get",
				url:"http://127.0.0.1/project/php/server.php",
				data:{"loginphone":loginphone,"loginpwd":loginpwd,"flag":"2"},
				success:function(res){
					if(res==1){
						alert("登录成功");
						location.href = "http://127.0.0.1:8020/project/index.html"
					}else if(res==0){
						$(".login_tsk").addClass("error")
						$(".login_tsk").html("用户密码不正确");
						$(".main .login .login_body .zhlogin .login_pwd").css("border","1px solid red")
						$(".main .login .login_body .zhlogin .login_pwd").focus();               
					}
				}
			})
		}else{
			return false;
		}
		
	})
	
	$(".main .login .login_body .zhlogin .login_phone").blur(function(){
		var loginphone = $(".main .login .login_body .zhlogin .login_phone").val();
		$.ajax({
				type:"get",
				url:"http://127.0.0.1/project/php/server.php",
				data:{"regphone":loginphone,"flag":"3"},
				success:function(res){
					if(res==1){
						$(".main .login .login_body .zhlogin .login_phone").css("border","1px solid red")
						$(".login_tsk").addClass("error")
			            $(".login_tsk").html("手机号不存在")
			            flaglPhone = false;
					}else if(res==0){
						$(".main .login .login_body .zhlogin .login_phone").css("border","1px solid green")
						$(".login_tsk").addClass("right")
			            $(".login_tsk").html("")
			            flaglPhone = true;
					}
				}
			})
	})
	//点击注册
	$(".main .register .regis_body .res_btn").click(function(){
		console.log(flagPhone,flagPwd,flagRepwd)
		if ( flagPhone && flagPwd && flagRepwd) {
			//alert("true") 
			//手机号正确、密码正确，通过ajax将数据传送到
			//返回1注册成功，返回2注册失败
			$.ajax({
				type:"get",
				url:"http://127.0.0.1/project/php/server.php",
				data:{"regphone":phone,"regpwd":pwd,"flag":"1"},
				success:function(res){
					//alert(res)
					if(res==1){
						alert("注册成功");
						flagState=true
						stateChange(flagState)
					}else{
						alert("注册失败");
						$(".main .register .regis_body .phone").focus();
					}
				}
			})
			
		}else{
			alert("false")
		}
	})
	//注册正则验证
	var flagPhone = null;
	$(".main .register .regis_body .phone").blur(function(){
		//alert()
		$(".regis_tsk").removeClass("right")
        $(".regis_tsk").html("")
		phone = $(this).val();
		//console.log(phone)
		var reg = /^1[3,5,7,8]\d{9}$/;
		if(!reg.test(phone)){
			//console.log("输入有误")
			$(this).css("border","1px solid red")
			$(".regis_tsk").addClass("error")
            $(".regis_tsk").html("请输入正确的手机号")
            flagPhone = false
		}else{
			$.ajax({
				type:"get",
				url:"http://127.0.0.1/project/php/server.php",
				data:{"regphone":phone,"flag":"3"},
				success:function(res){
					if(res==0){
						$(".main .register .regis_body .phone").css("border","1px solid red")
						$(".regis_tsk").addClass("error")
			            $(".regis_tsk").html("手机号已注册")
			            flagPhone = false
					}else if(res==1){
						$(".main .register .regis_body .phone").css("border","1px solid green")
						$(".regis_tsk").addClass("right")
			            $(".regis_tsk").html("可使用")
			            flagPhone = true;
					}
				}
			})
//			
            
		}
		
		
		
	})
	var flagPwd = null;
	$(".main .register .regis_body .res_pwd").blur(function(){
		//alert()
		$(".regis_tsk").removeClass("right")
        $(".regis_tsk").html("")
		pwd = $(this).val();
		console.log(pwd)
		var reg = /^[a-z0-9]{8,16}$/i;
		if(!reg.test(pwd)){
			//console.log("输入有误")
			$(this).css("border","1px solid red")
			$(".regis_tsk").addClass("error")
            $(".regis_tsk").html("请使用字母、数字的组合，8-16个字符")
            flagPwd = false;
		}else{
			$(this).css("border","1px solid green")
			$(".regis_tsk").addClass("right")
            $(".regis_tsk").html("可使用")
            flagPwd = true
		}
		
	})
	var flagRepwd =null;
	$(".main .register .regis_body .res_repwd").blur(function(){
		//alert()
		repwd = $(this).val();
		//console.log(repwd)
		if(flagPwd){
			console.log(repwd)
			console.log(repwd)
			if(repwd!=pwd){
				//console.log("输入有误")
				$(this).css("border","1px solid red")
				$(".regis_tsk").addClass("error")
	            $(".regis_tsk").html("请再次确认密码")
	            flagRepwd = false;
			}else{
				$(this).css("border","1px solid green")
				$(".regis_tsk").addClass("right")
	            $(".regis_tsk").html("两次密码一致")
	            flagRepwd = true;
			}
		}else{
			flagRepwd = false;
		}
	})
	
	
	
	
	
	
//	$(".main .register .login_body .zhlogin .login_pwd").blur(function(){
//		//alert()
//		var login_pwd = $(this).val();
//		console.log(login_pwd)
//		var reg = /^[a-z0-9]{8,16}$/i;
//		if(!reg.test(login_pwd)){
//			//console.log("输入有误")
//			$(".login_tsk").addClass("error")
//          $(".login_tsk").html("请使用字母、数字的组合，8-16个字符")
//		}
//	})


})
