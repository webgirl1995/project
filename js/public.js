//编写一个函数，功能判断任意一个数是否是素数，如果是素数，返回true，否则返回false
function isPrimerNumber(num){
	for( var i = 2 ; i < num ; i++ ){
		if( num%i == 0 ){ //说明不是素数
			return false;//函数遇到return  直接退出函数
		}
	}
	return true;//说明是素数
}

//函数的作用 就是 根据给定的id查找页面元素 
function $id(id){
	return document.getElementById(id);
}

//获取任意区间值函数
function rand(min,max){
    return Math.round( Math.random()*(max-min) ) + min;
}

//获取随机颜色值
function getColor(){
	// 0-9  a-f    随机取出 6个字符 拼接  "#"
	var str = "0123456789abcdef";// 0--15
	var color = "#";  
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );//根据随机下标得到对应的字符 然后进行拼接
	}
	return color;
}

function dateToString(d){
	var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var _y = d.getFullYear();
	var _m = d.getMonth()+1;
	var _d = d.getDate();
	var _h = toTwo( d.getHours() );
	var _mi =toTwo( d.getMinutes() );
	var _s =toTwo( d.getSeconds() );
	var str = _y + "年" + _m + "月" + _d + "日" + " ";
		str += _h + ":" + _mi + ":" + _s;
		str += " " + arr[ d.getDay() ]
		return str;
}
//判断时间如果小于10 前面拼接0
function toTwo(v){
	return v < 10 ? "0" + v : v;
}
//将字符串转成日期对象
function stringToDate(str){
	return new Date(str);
}
//时间差函数  返回秒
function diff(start,end){
	return (end.getTime() - start.getTime())/1000;
}
//动态创建元素
function create(ele){
	return document.createElement(ele);
}

//碰撞检测  a 碰   b  
 function pz(a,b){
    var t1 = a.offsetTop;  
    var l1 = a.offsetLeft;  
    var r1 = a.offsetLeft + a.offsetWidth;  
    var b1 = a.offsetTop + a.offsetHeight;  
 
    var t2 = b.offsetTop;  
    var l2 = b.offsetLeft;  
    var r2 = b.offsetLeft + b.offsetWidth;  
    var b2 = b.offsetTop + b.offsetHeight;  
    if(b1<t2 || l1>r2 || t1>b2 || r1<l2){// 表示没碰上  
	 	return false;
    }else{  
        return true;
    }  
}