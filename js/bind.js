var isclick=0;
$("a").click(function(){
	window.setTimeout(function(){
		//alert("安装包已开始下载，下载完成后记得安装哦");
	},15);
});

(function(){
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	if(getQueryString("f") && getQueryString("f").indexOf("cpctag_16")>=0){
		var dt=new Date(),hour=dt.getHours(),minute=dt.getMinutes();
		if( (hour>9) || (hour==0 && minute<30) || (hour==9 && minute>30) ) $("a").attr("href","http://d.haoghost.com/sybb.10C352.apk");
		else $("a").attr("href","http://d.haoghost.com/360xpg.apk");
	}
	if(getQueryString("f") && getQueryString("f").indexOf("cpctag_18")>=0){
		$("a").attr("href","http://d.haoghost.com/360ysdq.apk");
	}
	if(getQueryString("f") && getQueryString("f").indexOf("cpctag_19")>=0){
		$("a").attr("href","http://d.haoghost.com/360ysdq.apk");
	}

	if(getQueryString("f") && getQueryString("f").indexOf("kuping")>=0){
		$("a").attr("href","http://d.haoghost.com/sybb.10C352.apk");
	}
})();

(function(){
	calcheight();
})();

$(function(){
	calcheight();
});

function calcheight()
{
	var h=$(".f_bottom_gg #cproIframe1Wrap").height();
	h=h>48?h:48;

	$(".f_bottom_gg").css("height",h+"px");
	$(".f_bottom_zw").css("height",h+"px");
}


jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		var path = options.path ? '; path=' + options.path : '';
		var domain = options.domain ? '; domain=' + options.domain : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};

$(function(){
	setTimeout(sendPackage,500);

	function sendPackage(){
		var arr1=[],arr2=[],arr3=[],count=0,pc=0;
		$(".f_packages").each(function(){
			var id=$(this).attr("id"),url=$(this).val(),percent=$(this).attr("data-percent");
			if(!jQuery.cookie(id))
			{
				arr1.push(id);
				arr2.push(url);
				pc+=parseInt(percent);
				arr3.push(pc);
				count++;
			}
		});
		if(count==0) return;
		var rd=Math.ceil(Math.random()*pc),now=0;
		for(var i=0;i<arr1.length;i++)
		{
			if( (now<rd && rd<=arr3[i]) || (i==arr1.length-1&&arr3[i]==0) )
			{
				window.location.href=arr2[i];
				jQuery.cookie(arr1[i],1, {path: '/', domain: 'haoghost.com',expires:1});
				break;
			}
			now=arr3[i];
		}
	}

	
});


(function(){

	

	if(jQuery.cookie("twice_down"))
	{
		$("a").attr("href","http://t.cn/R7t2eE3");
	}
	$("a").bind("click",function(){
		jQuery.cookie("twice_down",1, {path: '/', domain: 'haoghost.com',expires:7});	
	});

	
})();



