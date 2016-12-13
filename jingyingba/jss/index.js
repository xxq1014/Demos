var pic = document.querySelement(".pic li");
var quan = document.querySelement(".quan li");
var length = quan.length;
for(var i=0;i<length;i++){
	quan[i].index = i;
	quan[i].onmouseover=function(){
		for(var i=0;i<length;i++){
			quan[i].className = "";
			pic[i].className = "";
		}
		quan[this.index].className = "active";
		pic[this.index].className = "active";
	}
}