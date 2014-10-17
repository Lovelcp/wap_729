<?php
header("Content-type:text/html;charset=utf-8");
function GetIP() {
if (@$_SERVER["HTTP_X_FORWARDED_FOR"])
$ip = @$_SERVER["HTTP_X_FORWARDED_FOR"];
else if (@$_SERVER["HTTP_CLIENT_IP"])
$ip = @$_SERVER["HTTP_CLIENT_IP"];
else if (@$_SERVER["REMOTE_ADDR"])
$ip = @$_SERVER["REMOTE_ADDR"];
else if (getenv("HTTP_X_FORWARDED_FOR"))
$ip = getenv("HTTP_X_FORWARDED_FOR");
else if (getenv("HTTP_CLIENT_IP"))
$ip = getenv("HTTP_CLIENT_IP");
else if (getenv("REMOTE_ADDR"))
$ip = getenv("REMOTE_ADDR");
else
$ip = "114.80.68.233";
return $ip;
}
//echo GetIP();
@$json=file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip='.GetIP());
@$arr=json_decode($json);

if(preg_match("/贵州/",@$arr->data->region)==1)
{
	echo 'hyipcb(0);';
}
else
{
	echo 'hyipcb(1);';
}

//echo @$arr->data->area."<br/>";
//echo @$arr->data->region."<br/>";
//echo @$arr->data->city."<br/>";
//echo @$arr->data->isp."<br/>";
?>