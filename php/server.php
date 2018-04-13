<?php
	include "public.php";
	header("content-type:text/html,charset=utf-8");
	$flag = $_GET["flag"];//接口 ，注册为1，登录为2、手机号验证为3
	if($flag==1){
		$regphone = $_GET["regphone"];//注册手机号
		$regpwd = $_GET["regpwd"];//注册密码
		$sql = "insert into users(uname,upwd) values('$regphone','$regpwd') ";
		$row = mysql_query($sql);
		if($row){
			echo 1;//插入成功
		}else{
			echo 0;//插入失败
		}
	}
	if($flag==2){
		$loginphone = $_GET["loginphone"];
		$loginpwd = $_GET["loginpwd"];
		$sql = "select * from users where uname = '$loginphone'";
	    $res =  mysql_query($sql);//执行select语句  成功返回值是查询的集合
		$arr = mysql_fetch_array($res);//取出结果集中的一行数据     返回一个数组 
		//print_r($arr);
		if($arr){
			if( $loginpwd == $arr["upwd"] ){
				echo 1;//登录成功
			}else{
				echo 0;//密码不正确
			}
		}else{
			echo 3;//用户名不存在
		}
	}
	if($flag==3){
		$regphone = $_GET["regphone"];
		$sql = "select * from users where uname = '$regphone'";
		$res = mysql_query($sql);
		$arr = mysql_fetch_array($res);
		if($arr){
			echo 0;//用户名存在
		}else{
			echo 1;//用户名不存在
		}
	}
	
?>
