// *********Fade out for pages***********************

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
// **************************************************************

// ********************Fading****************************
$(document).ready(function(){
    $('#banner1').fadeIn(400, part2);
});
var part2 = function part2(){
  $(document).ready(function(){
    $('#banner2').delay(400).fadeIn(600);
});
}
// **************************************************************

// ********************Landing carousel****************************
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
// *********************************************************************
