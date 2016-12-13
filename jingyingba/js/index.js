var pic = document.querySelectorAll(".pic li");
var quan = document.querySelectorAll(".quan li");
var length = quan.length;
var index = 0;
var timer = null;
// 轮播图
for(var i=0;i<length;i++){
	quan[i].index = i;
	quan[i].onmouseover=function(){
		clearInterval(timer);
		for(var i=0;i<length;i++){
			quan[i].className = "";
			pic[i].className = "";
		}
		index = this.index;
		quan[this.index].className = "active";
		pic[this.index].className = "active";
	}
	quan[i].onmouseout = function(){
		timer = setInterval(next,3000);
	}
}
// 计时器
function next(){
	index++;
	if(index>length-1){
		index = 0;
	}
	for(var i=0;i<length;i++){
		quan[i].className = "";
		pic[i].className = "";
	}
	quan[this.index].className = "active";
	pic[this.index].className = "active";
}
timer = setInterval(next,3000);


// 无限滚动
var pre = document.querySelector(".pre");
var next1 = document.querySelector(".next");
var xun = document.querySelector(".xun");
var width = xun.clientWidth;
var left = 0;

// 增加宽度
xun.style.width=width*2 + "px";
// 点击滚动
pre.onclick=function(){
	left -= 167;
	if(Math.abs(left) > width){
		left = 0;
	}
	xun.style.left = left + "px";
}
next1.onclick=function(){
	left += 167;
	if(xun.offsetLeft > 0){
		left = -1503;
	}
	xun.style.left = left + "px";
}


// 公众号
var WeChat = document.querySelector(".WeChat");
var WeChatTu = document.querySelector(".WeChatTu");
WeChat.onmouseover=function(){
	WeChatTu.style.display = "block";
}
WeChat.onmouseout=function(){
	WeChatTu.style.display = "none";
}


// 回到顶部
function pageScroll(){
	var sTop=document.body.scrollTop;
	window.scrollBy(0,-50);
	var scrolldelay = setTimeout('pageScroll()',10);
	if(sTop==0) clearTimeout(scrolldelay);
}