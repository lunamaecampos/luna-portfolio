// *********Fade out for pages***********************
// 
// $(function(){
//   var documentEl = $(document),
//       fadeElem = $(".slide");
//   documentEl.on('scroll', function(){
//     var currScrollPos = documentEl.scrollTop();
//
//     fadeElem.each(function(){
//       var $this = $(this),
//         elemOffsetTop = $this.offset().top;
//       if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/500);
//     });
//   });
// });
// $(function(){
//   var documentEl = $(document),
//       fadeElem = $("#aboutme");
//   documentEl.on('scroll', function(){
//     var currScrollPos = documentEl.scrollTop();
//
//     fadeElem.each(function(){
//       var $this = $(this),
//         elemOffsetTop = $this.offset().top;
//       if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
//     });
//   });
// });
// $(function(){
//   var documentEl = $(document),
//       fadeElem = $("#projectsdiv");
//   documentEl.on('scroll', function(){
//     var currScrollPos = documentEl.scrollTop();
//
//     fadeElem.each(function(){
//       var $this = $(this),
//         elemOffsetTop = $this.offset().top;
//       if(currScrollPos > elemOffsetTop ) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
//     });
//   });
// });
// $(function(){
//   var documentEl = $(document),
//       fadeElem = $("#div4");
//   documentEl.on('scroll', function(){
//     var currScrollPos = documentEl.scrollTop();
//
//     fadeElem.each(function(){
//       var $this = $(this),
//         elemOffsetTop = $this.offset().top;
//       if(currScrollPos > elemOffsetTop ) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
//     });
//   });
// });
// **************************************************************

// ********************Carousel Text Fading****************************
$(document).ready(function(){
    $('#banner1').fadeIn(400, part2);
});
var part2 = function part2(){
  $(document).ready(function(){
    $('#banner2').delay(400).fadeIn(600);
});
}
// **************************************************************
// ********************Sliding Animations****************************
var aboutMeAnimation =function(){
  $('#aboutme').find('#aboutmeheader').delay(10).animate({opacity:1, left:0},'slow');
  $('#aboutme').find('#imageholder').delay(500).animate({opacity:1, bottom:0},'slow');
  $('#aboutme').find('#bio').delay(1000).animate({opacity:1, right:0},'slow');
}
$(function(){
  var documentEl = $(document),
      fadeElem = $("#aboutme");
  documentEl.on('scroll', function(){
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
      if(currScrollPos > elemOffsetTop - 500 || currScrollPos == elemOffsetTop){
        aboutMeAnimation();
      }
    });
  });
});

var techAnimation =function(){
  $('#techdiv').find('.banner').delay(10).animate({opacity:1, left:0},'slow');
  $('#techdiv').find('.assetmenumain').delay(500).animate({opacity:1, bottom:0},'slow');
  $('#techdiv').find('#assetrow1').delay(1000).animate({opacity:1, left:0},'slow');
  $('#techdiv').find('#assetrow2').delay(1500).animate({opacity:1, right:0},'slow');
  $('#techdiv').find('#assetrow3').delay(2000).animate({opacity:1, left:0},'slow');
}
$(function(){
  var documentEl = $(document),
      fadeElem = $("#techdiv");
  documentEl.on('scroll', function(){
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
      if(currScrollPos > elemOffsetTop - 500 || currScrollPos == elemOffsetTop){
        techAnimation();
      }
    });
  });
});
var projectsAnimation =function(){
  $('#projectsdiv').find('.banner').delay(10).animate({opacity:1, right:0},'slow');
  $('#projectsdiv').find('#projectthumbnails').delay(500).animate({opacity:1, top:0},'slow');
}
$(function(){
  var documentEl = $(document),
      fadeElem = $("#projectsdiv");
  documentEl.on('scroll', function(){
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
      if(currScrollPos > elemOffsetTop - 500 || currScrollPos == elemOffsetTop){
        projectsAnimation();
      }
    });
  });
});
// **************************************************************

// ********************Thumbnails****************************
// var hideThumbs = function(){
//   $(document).ready(function(){
//       $("#LSEMENU").click(function(){
//           $('.bgdescthumb').hide('slow');
//           // $('#lsesynththumbs').find('.bgdescthumb').delay(1000).show('slow');
//       });
//   });
// }
// hideThumbs();
$(document).ready(function(){
    // $('.descthumbs').css('display', 'none')

    $("#LSEMENU").click(function(){
        $('.bgdescthumb').hide('slow', function(){
          $('#lsesynththumbs').find('.bgdescthumb').delay(400).show('slow').css('display', 'inline-block');
        });
        $('.projectinfoleft').hide('slow', function(){
          $('#lsesynthinfo').find('.projectinfoleft').delay(400).show('slow').css('display', 'inline-block');
        });
    });

    $("#XINXINMENU").click(function(){
        $('.bgdescthumb').hide('slow', function(){
          $('#xinxinthumbs').find('.bgdescthumb').delay(400).show('slow').css('display', 'inline-block');
        });
        $('.projectinfoleft').hide('slow', function(){
          $('#xinxininfo').find('.projectinfoleft').delay(400).show('slow').css('display', 'inline-block');
        });
    });

    $("#GIROMENU").click(function(){
        $('.bgdescthumb').hide('slow', function(){
          $('#synthgirothumbs').find('.bgdescthumb').delay(400).show('slow').css('display', 'inline-block');
        });
        $('.projectinfoleft').hide('slow', function(){
          $('#synthgyroinfo').find('.projectinfoleft').delay(400).show('slow').css('display', 'inline-block');
        });
    });

    $("#TASKLISTMENU").click(function(){
        $('.bgdescthumb').hide('slow', function(){
          $('#taskthumbs').find('.bgdescthumb').delay(400).show('slow').css('display', 'inline-block');
        });
        $('.projectinfoleft').hide('slow', function(){
          $('#taskthumbsinfo').find('.projectinfoleft').delay(400).show('slow').css('display', 'inline-block');
        });
    });
    $("#BLOSMMENU").click(function(){
        $('.bgdescthumb').hide('slow', function(){
          $('#blosmthumbs').find('.bgdescthumb').delay(400).show('slow').css('display', 'inline-block');
        });
        $('.projectinfoleft').hide('slow', function(){
          $('#blosminfo').find('.projectinfoleft').delay(400).show('slow').css('display', 'inline-block');
        });
    });
});

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
// **************************************************************

// ********************Modal Gallery****************************
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// *********************************************************************
// ********************Parallax Scrolling******************************
