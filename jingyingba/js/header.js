// 个人中心
var personal = document.querySelector(".personal");
var xinXi = document.querySelector(".xinXi");
personal.onmouseover=function(){
	xinXi.style.display = "block";
}
personal.onmouseout=function(){
		xinXi.style.display = "none";
}