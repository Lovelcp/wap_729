<?php
header("Content-type:text/html;charset=utf-8");
/*function GetIP() {
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
}*/
//echo GetIP();
function GetIP(){ 
if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown")) 
$ip = getenv("HTTP_CLIENT_IP"); 
else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown")) 
$ip = getenv("HTTP_X_FORWARDED_FOR"); 
else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown")) 
$ip = getenv("REMOTE_ADDR"); 
else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown")) 
$ip = $_SERVER['REMOTE_ADDR']; 
else 
$ip = "unknown"; 
return($ip); 
}
$aa=explode(",",GetIP());
@$json=file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip='.$aa[0]);
@$arr=json_decode($json);


header("Content-Type:text/html;charset=utf-8");
echo @$arr->data->region;
//echo @$arr->data->city."<br/>";
//echo @$arr->data->isp."<br/>";
?>