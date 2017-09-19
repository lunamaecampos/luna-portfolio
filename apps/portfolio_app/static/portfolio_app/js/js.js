$(function(){
  var documentEl = $(document),
      fadeElem = $(".slide");
  documentEl.on('scroll', function(){
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
      if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/500);
    });
  });
});
$(function(){
  var documentEl = $(document),
      fadeElem = $("#div2");
  documentEl.on('scroll', function(){
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
      if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/150);
    });
  });
});

var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 1000,
  pause: "false"
});
