//JS监听浏览器文字大小代码
//var docEl = document.documentElement,
//    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//    recalc = function () {
//        var clientWidth = docEl.clientWidth;
//        if (!clientWidth) return;
//        clientWidth = clientWidth > 750 ? 750 : clientWidth;
//        docEl.style.fontSize = 36 * (clientWidth / 320) + 'px';
//      alert("aaan");
//    };
//
//// if (!document.addEventListener) return;
//window.addEventListener(resizeEvt, recalc, false);
////document.addEventListener('onload', recalc, false);
//recalc();
$(document).ready(function(){
  var _rem;
  // 设置HTML跟节点字号
  function _resize(){
    var html= $('html');
    var hW = html.outerWidth() > 750 ? 750 : html.outerWidth();
    _rem = hW/10;
    html.css('fontSize',_rem);
  }
  _resize();
  window.onresize = function(){_resize();};
  $("#showBtn").on("click",function(){
    var TypeShow = $("#overhide");
    show(TypeShow);
  });
  function show(el){
    el.removeClass("overhide");
    $(".teles").hide();
  }
});

$(function(){
  $('#model').load('../jieMeng12142/oneTypeSelect.html');
  $('.J_selcate_btn').on("click",function(){
      $('.mark').removeClass('hide');
      var A=$('.oneTypeBox'),speed = 400;
      A.stop().animate({height:'10rem'},speed).on('touchmove',function(e) {
        e.preventDefault()
      });
  });

  $('.mark').on("click",function(){
      $('.mark').addClass('hide');
      var A=$('.oneTypeBox'),speed = 400;
      A.stop().animate({height:'0rem'},speed).on('touchmove',function(e) {
          e.preventDefault()
      });
      // event.stopPropagation();
  });

})