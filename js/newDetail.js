
	if($(".detail-bar .con").children().length>3){
		var childList = $(".detail-bar .con").children();
		var l = childList.length;
		for(var i=3;i<l;i++){
			childList.eq(i).hide();
		}
		$(".detail-bar").append("<div class='lastInfo'><span>继续阅读</span><span class='ion-chevron-down'></span></div>")
	};
	$(".detail-bar").on("click",".lastInfo",function(){
		var childList = $(".detail-bar .con").children();
		var l = childList.length;
		for(var i=3;i<l;i++){
			childList.eq(i).show();
		}
		$(".lastInfo").remove();
	});