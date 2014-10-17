<?php
/*m.haoghost.com 点击统计服务*/
if( isset( $_GET["name"] ) && isset( $_GET["f"] ) )/* name代表链接名称 f表示渠道名称 */
{
	/*入库字段-》用户IP 链接名称 渠道名称 该用户本日是第几次点击本页面的链接 (重复性检查:如果该IP已经点击过该名称的链接,则不入库)*/
	echo "jsonpcallback(".json_encode( array( "s" => "1"  ) ).")";
	/*输出参数 s:请求是否成功 成功：1，不成功：0 ；*/
}
else
{
	echo json_encode( array( "s" => "0" ) );
}

?>