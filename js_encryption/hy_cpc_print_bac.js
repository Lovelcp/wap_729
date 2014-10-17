(function(){
	function setCookie(name,value){
        var Days = 30;  
        var exp  = new Date();  
        exp.setTime(exp.getTime() + Days*24*60*60*1000);  
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  
	}  

	function getCookie(name)
	{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 
		if(arr=document.cookie.match(reg))
	 
			return (arr[2]);
		else
			return null;
	}

	var getJsonp = function( url, data, callback, str )
	{
		var script = document.createElement("script"),
			target = document.getElementsByTagName("head")[0],
			obj = null;
		script.type = "text/javascript";
		script.language = "javascript";
		this.jsonpcallback=callback;
		var data = data ? "&" + data : "",
			isOp = /\?{1}/.test( url ),
			domain = isOp ? url.slice( 0, url.search( /\?{1}/ ) ) : url,
			option = isOp ?  url.slice( url.search( /\?{1}/ ) + 1 ) + data : data;
		script.src = domain + "?"  + option;
		target.appendChild( script );
		script.onload = script.onreadystatechange = function()
		{
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" )
			{
				callback( null , obj );
				this.onload = this.onreadystatechange = null;
				this.parentNode.removeChild( this );
			};
		};
		return obj;
	};

	if(/android/i.test(navigator.userAgent) || /ipad|iphone|mac|ios/i.test(navigator.userAgent))
	{
		var num=hy_cpc_num || "10",num1="tag_"+num+"1",num2="tag_"+num+"2";
		var toplink='<a href="http://m.haoghost.com/?f=cpc'+num1+'" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="http://m.haoghost.com/images/wb_t.gif" /></a>';
		var bottomlink='<a href="http://m.haoghost.com/?f=cpc'+num2+'" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="http://m.haoghost.com/images/wb_b.gif" /></a>';
		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent))
		{
			num1="tag_"+num+"3";num2="tag_"+num+"4";
			toplink='<a href="http://cnrdn.com/AsZE" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="http://m.haoghost.com/images/wb_t.gif" /></a>';
			bottomlink='<a href="http://cnrdn.com/AsZE" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="http://m.haoghost.com/images/wb_ios.gif" /></a>';
		}
		var str='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;height: 90px;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 0.9;position: absolute;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+
			toplink+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;height: 90px;opacity: 0.9;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+
			bottomlink+'</div>';
		var div=document.createElement("div");
		div.innerHTML=str;
		document.body.appendChild(div);
		var ww=window.screen.width;
		ww=ww>435?435:ww;
		var t1=document.getElementById("hy_"+num1),t2=document.getElementById("hy_"+num2),wh=ww*90/435,h1=document.getElementById("hy_cpc_top"),h2=document.getElementById("hy_cpc_bottom"),i1=document.getElementById("hy_cpc_imgt"),i2=document.getElementById("hy_cpc_imgb");
		t1.style.width=t2.style.width=ww+"px";
		i1.style.height=i2.style.height=h1.style.height=h2.style.height=t1.style.height=t2.style.height=wh+"px";
		document.body.style["padding-top"]=wh+"px";
		var ua=navigator.userAgent;
		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {return};
		

		function send(obj,num)
		{
			setTimeout(function(){
				getJsonp(
					'http://click.shuiguo.com/index.php?action=index&method=main1',
					"t=undefined&l="+obj+"&s="+num+"&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+ua,
					function(data){

					}
				);
			},0);

		}
		
		//i1.addEventListener("touchend",function(){send(t1.getAttribute("href"),num1);alert("已经开始下载,下载完成后记得安装哦~");setCookie("hycpc1","1");setpac();});
		//i2.addEventListener("touchend",function(){send(t2.getAttribute("href"),num2);alert("已经开始下载,下载完成后记得安装哦~");setCookie("hycpc1","1");setpac();});
		
		document.write(unescape("%3Cdiv style='display:none;'%3E%3Cscript src='http://s95.cnzz.com/stat.php?id=1253099509&web_id=1253099509' type='text/javascript'%3E%3C/script%3E%3C/div%3E"));
		
		function setpac()
		{
			
		}
	}
})();


/*send("","tag_"+num+"9");
window.setTimeout(function(){
	t1.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
	t2.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
},1000);*/