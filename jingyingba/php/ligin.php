<?php 
	// header("Content-Type: application/json;charset=utf-8"); 
	$loginMobileT = $_GET["loginMobileT"];
	$passW = $_GET["passW"];
	$mobileT = $_GET["mobileT"];
	if(empty($loginMobileT) || empty($passW) || empty($mobileT)){
		echo "请求参数有错误，请检查";
	}

	$data = array(
		array("loginMobileT"=>"12345678910","passW"=>"123456","mobileT"=>"1234"),
		array("loginMobileT"=>"12345678911","passW"=>"123456","mobileT"=>"1234"),
		array("loginMobileT"=>"12345678912","passW"=>"123456","mobileT"=>"1234"),
		array("loginMobileT"=>"12345678913","passW"=>"123456","mobileT"=>"1234")
	);

	foreach ($data as $value) {
		if($value["loginMobileT"] == $loginMobileT && $value["passW"] == $passW && $value["mobileT"] == $mobileT){
			$resulte = '{"msg":true}';
			break;
		}else{
			$resulte = '{"msg":false}';
		}
	}
	setcookie("loginMobileT",$loginMobileT,time() + 7*24*3600);
	setcookie("passW",$passW,time() + 7*24*3600);
	setcookie("mobileT",$mobileT,time() + 7*24*3600);
	echo $resulte;
 ?>
