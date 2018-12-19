define(function() {
	function loadTemplate(options) {
		var id = options.id, name = options.name;

		if ($('#' + id).length == 0) {
			$.ajax({
				type : 'GET',
				url : 'tpl/' + name + '.html',
				async : false
			}).done(function(data) {
				if (data.length > 0) {
					$(data).prop('id', id).appendTo('body');
				}
			});
		}
	}

	function jump(url) {
		window.location.href = url;
	}

	function getScrollTop() {
		var scrollTop = 0;
		if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if (document.body) {
			scrollTop = document.body.scrollTop;
		}
		return scrollTop;
	}
	
	function GetRequest() {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
		  var str = url.substr(1);
		  strs = str.split("&");
		  for(var i = 0; i < strs.length; i ++) {
		     theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		  }
		}
		return theRequest;
	}

	var funs = {
		loadTemplate : loadTemplate,
		jump : jump,
		getScrollTop : getScrollTop,
		GetRequest : GetRequest
	};

	$.extend(funs);

	return funs;
});