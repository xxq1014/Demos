// 分享
var fenxiangTu = document.querySelector(".fenXiangTu");
var tu = document.querySelector(".lei");
var timer=null;
fenxiangTu.onmouseover=function(){
	tu.style.display = "block";
}
fenxiangTu.onmouseout=function(){
	timer=setTimeout(function(){
		tu.style.display = "none";
	},2000)
}


var xhr = new XMLHttpRequest();
xhr.open("GET","http://10.80.13.58/zjf/JavaScript/9-21/form.php");
xhr.send();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		var data = JSON.parse(xhr.responseText)
		var arr = data.data;
		var html = "<div>";
		for(var i=0;i<arr[0].length;i++){
		html += "<div class='neiRong'>"+
		"<div class='jiKe'><span class='ke'>第1课</span><span class='keNei'>"+arr[0][i].classTitle+"</span></div>"+
          "<div class='tiMu'>"+
            "<div class='jianTou'></div>"+
            "<p>"+arr[0][i].audioTitle+"</p>"+
            "<div class='xueXi'>"+arr[0][i].time+"</div><a href='#'>"+
              "<div class='kaiShi'>开始学习</div></a><a href='#'>"+
              "<div class='dengDai'>等待上一课完成</div></a>"+
          "</div>"+
          "</div>"
		}
		html += "</div>";
		document.querySelector("article").innerHTML = html;
	}
}