(function(){
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}

	function setCookie(name,value){
        var Days = 30;  
        var exp  = new Date();  
        exp.setTime(exp.getTime() + Days*24*60*60*1000);  
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";  
	}  

	function getCookie(name)
	{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 
		if(arr=document.cookie.match(reg))
	 
			return (arr[2]);
		else
			return null;
	}
	
	var str=getQueryString("f");
	if(window.location.href.indexOf("index2.html")>=0) str="index2";
	if(window.location.href.indexOf("index_inlk.html")>=0) str="index_inlk";
	if(str=="null") return;

	var cc=parseInt(getCookie("haoghost_times"));
	if(cc==1)
	{
		window.location.href="http://m.haoghost.com/style2.html?f="+str;
		setCookie("haoghost_times",cc+1);
	}
	else if(cc==2)
	{
		window.location.href="http://m.haoghost.com/style3.html?f="+str;	
		setCookie("haoghost_times",cc+1);
	}
	else
	{
		setCookie("haoghost_times","1");
	}
})()