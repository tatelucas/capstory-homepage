//= require libs/jquery
//= require foundation/index
//= require_tree ./public
//= require vendor/SVGMagic.min

// Initialize Foundation
$(document).foundation();

$(document).ready(function(){
   $('img').svgmagic();
});