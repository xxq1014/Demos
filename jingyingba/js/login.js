// 登录注册
var deng = document.querySelector(".deng");
var zhu = document.querySelector(".zhu");
var dengLu = document.querySelector(".dengLu");
var zhuCe = document.querySelector(".zhuCe");
deng.onclick=function(){
	dengLu.style.display = "block";
	zhuCe.style.display = "none";
	deng.className = "deng active";
	zhu.className = "zhu";
}
zhu.onclick=function(){
	dengLu.style.display = "none";
	zhuCe.style.display = "block";
	zhu.className = "zhu active";
	deng.className = "deng";
}


// 验证码
var captchaRight = document.querySelector(".captchaRight");
var countdown = document.querySelector(".countdown");
captchaRight.onclick=function(){
	countdown.style.display = "block";
}


// 登录警告
// 手机号码
var loginMobileT = document.querySelector(".loginMobileT");
var tishic1 = document.querySelector(".tishic1");
var tishic1_1 = document.querySelector(".tishic1 span");

loginMobileT.onblur = function(){
	var loginText = loginMobileT.value;

	if(!loginText){
		tishic1.style.display = "block";
	}else if(isNaN(loginText)){
		tishic1.style.display = "block";
		tishic1_1.innerHTML = "请输入数字";
	}else if(loginText.length!=11){
		tishic1.style.display = "block";
		tishic1_1.innerHTML = "请输入11位数";
	}else{
		tishic1.style.display = "none";
	}
}

// 密码
var passW = document.querySelector(".passW");
var tishic2 = document.querySelector(".tishic2");

passW.onblur = function(){
	var loginText = passW.value;
	if(!loginText){
		tishic2.style.display = "block";
	}else{
		tishic2.style.display = "none";
	}
}

// 验证码
var mobileT = document.querySelector(".mobileT");
var tishic3 = document.querySelector(".tishic3");
var tishic3_3 = document.querySelector(".tishic3 span");
var verification = document.querySelector(".verification img");


mobileT.onblur = function(){
	var loginText = mobileT.value;
	if(!loginText){
		tishic3.style.display = "block";
	}else if(loginText != verification.innerText){
		tishic3.style.display = "block";
		tishic3_3.innerHTML = "验证码错误";
	}else{
		tishic3.style.display = "none";
	}
}

// 注册警告
// 手机号码
var mobileText = document.querySelector(".mobileText");
var tishiz1 = document.querySelector(".tishiz1");
var tishiz1_1 = document.querySelector(".tishiz1 span");

mobileText.onblur = function(){
	var loginText = mobileText.value;

	if(!loginText){
		tishiz1.style.display = "block";
	}else if(isNaN(loginText)){
		tishiz1.style.display = "block";
		tishiz1_1.innerHTML = "请输入数字";
	}else if(loginText.length!=11){
		tishiz1.style.display = "block";
		tishiz1_1.innerHTML = "请输入11位数";
	}else{
		tishiz1.style.display = "none";
	}
}

// 验证码
var yan = document.querySelector(".yan");
var tishiz2 = document.querySelector(".tishiz2");

yan.onblur = function(){
	var loginText = yan.value;
	if(!loginText){
		tishiz2.style.display = "block";
	}else{
		tishiz2.style.display = "none";
	}
}

// 密码
var passwordText = document.querySelector(".passwordText");
var tishiz3 = document.querySelector(".tishiz3");

passwordText.onblur = function(){
	var loginText = passwordText.value;
	if(!loginText){
		tishiz3.style.display = "block";
	}else{
		tishiz3.style.display = "none";
	}
}

// 再次输入密码
var passText = document.querySelector(".passText");
var tishiz4 = document.querySelector(".tishiz4");
var tishiz4_4 = document.querySelector(".tishiz4 span");

passText.onblur = function(){
	var loginText = passText.value;
	if(!loginText){
		tishiz4.style.display = "block";
	}else if(loginText!=passwordText.value){
		tishiz4.style.display = "block";
		tishiz4_4.innerHTML = "两次密码输入不同，请再次输入";
	}else{
		tishiz4.style.display = "none";
	}
}

// cookie
var button = document.querySelector(".button");
button.onclick=function(){
	if(loginMobileT.value && passW.value && mobileT.value){
		Ajax("GET","http://10.80.13.58/zjf/JavaScript/9-23/login/login.php?loginMobileT="+loginMobileT.value+"&passW="+passW.value+"&mobileT"+mobileT.value,"",function(data){
			var data = JSON.parse(data);
			if(data.msg){
				location.href="http://10.80.13.58/zjf/JavaScript/9-23/login/login.html"
			}else{
				alert("您输入的账号密码错误");
			}
		});
	}else{
		AJax("GET","http://10.80.13.58/zjf/JavaScript/9-23/login/login.php?loginMobileT="+loginMobileT.value+"&passW="+passW.value+"&mobileT"+mobileT.value,"",function(data){
			console.log(data);
		});
	}
}

