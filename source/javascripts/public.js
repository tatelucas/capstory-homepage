//= require libs/jquery
//= require foundation/index
//= require_tree ./public
//= require vendor/SVGMagic.min
//= require vendor/jquery.parallax-1.1.3

// Initialize Foundation
$(document).foundation();


$(document).ready(function(){
  $('.logo img').svgmagic();
  $('.package_icon').svgmagic({ backgroundimage: true });

  $(document).foundation();

  //What You get hover divs
  $(".package_description p").hide();
  $(".package_description p[data-desc-id='welcome_kit']").show();

  $(".package_item a").hover(function() {
    $(".package_description p").hide();
    var desc = $(this).data('reveal-id');
    var desc = desc.replace("_modal","");
    $(".package_description p[data-desc-id='"+desc+"']").show();
  });


  // vars

  var topBar = $('.top-bar');
  var siteHeader = $('.site_header');

  // measurements

  var measure = function(){
    m = {
      windowHeight : $(window).height(),
      siteHeaderHeight : $('.site_header').height(),
      windowScroll : $(window).scrollTop()
    }
    return m;
  };

  // scroll and viewport based fixed nav

  var setNavPosition = function(){


    var viewportIsShort = measure().windowHeight < measure().siteHeaderHeight;
    var siteHeaderIsScrolledOut = measure().windowScroll > measure().siteHeaderHeight - topBar.outerHeight() && !siteHeaderSplitsViewport;
    var siteHeaderSplitsViewport = measure().siteHeaderHeight - measure().windowScroll < measure().windowHeight && !siteHeaderIsScrolledOut;

    if(siteHeaderSplitsViewport){

      siteHeader.css('position', 'relative');
      topBar.removeClass('top-bar-fixed-top top-bar-fixed-bottom')

    } else if(siteHeaderIsScrolledOut) {

      siteHeader.css('position', 'static');
      topBar.addClass('top-bar-fixed-top');
      topBar.removeClass('top-bar-fixed-bottom');

    } else if(viewportIsShort) {

      siteHeader.css('position', 'relative');
      topBar.addClass('top-bar-fixed-bottom');
      topBar.removeClass('top-bar-fixed-top');

    }
  };

  setNavPosition();

  $(window).resize(function() {
    setNavPosition();
  });

  $(window).scroll(function(){
    setNavPosition();
  });

  // scroll nav links

  var scrollToSection = function(section){
    var sectionOffsetTop = $(section).position().top;
    var animateSpeed = Math.abs(sectionOffsetTop - measure().windowScroll) / 4;
    $('html, body').animate({
      scrollTop : sectionOffsetTop - topBar.outerHeight()
    }, animateSpeed, 'swing');
  };

  $('[data-link-type="scroll"').click(function(e) {
    e.preventDefault();
    scrollToSection($(this).attr('href'));
  });


});
