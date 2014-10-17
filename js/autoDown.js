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






