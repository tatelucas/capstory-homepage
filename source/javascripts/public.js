//= require libs/jquery
//= require foundation/index
//= require_tree ./public
//= require vendor/SVGMagic.min

// Initialize Foundation
$(document).foundation();

$(document).ready(function(){
   $('.logo img').svgmagic();
   $('.package_icon').svgmagic({ backgroundimage: true });
});