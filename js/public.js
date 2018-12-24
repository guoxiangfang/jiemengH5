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
  typeSlect();
  function typeSlect() {
    var markHtml ='\
    <div class="oneTypeBox typeIcon">\
      <h2>解梦分类</h2>\
      <ul class="type clear">\
        <li><a href="#"><em></em><span>人物</span></a></li>\
        <li><a href="#"><em></em><span>动物</span></a></li>\
        <li><a href="#"><em></em><span>植物</span></a></li>\
        <li><a href="#"><em></em><span>物品</span></a></li>\
        <li><a href="#"><em></em><span>身体</span></a></li>\
        <li><a href="#"><em></em><span>生活</span></a></li>\
        <li><a href="#"><em></em><span>活动</span></a></li>\
        <li><a href="#"><em></em><span>自然</span></a></li>\
        <li><a href="#"><em></em><span>情爱</span></a></li>\
        <li><a href="#"><em></em><span>鬼神</span></a></li>\
        <li><a href="#"><em></em><span>建筑</span></a></li>\
        <li><a href="#"><em></em><span>其他</span></a></li>\
      </ul>\
    </div>\
    <div class="mark hide"></div>';
    if($("#model").length > 0){
      $('#model').append(markHtml);
      $('.J_selcate_btn').on("click",function(){
        $('.mark').fadeIn(400);
        var A = $('.oneTypeBox'),speed = 400;
        A.stop().animate({height:'10rem'},speed).on('touchmove',function(e) {
          e.preventDefault()
        });
      });
      $('.mark').on("click",function(){
        $('.mark').fadeOut(400);
        var A=$('.oneTypeBox'),speed = 400;
        A.stop().animate({height:'0rem'},speed).on('touchmove',function(e) {
          e.preventDefault()
        });
        event.stopPropagation();
      });
    }

  }
});