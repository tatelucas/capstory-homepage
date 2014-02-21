//= require libs/jquery
//= require foundation/index
//= require_tree ./public
//= require vendor/SVGMagic.min

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
     console.log(desc);
     $(".package_description p[data-desc-id='"+desc+"']").show();
   });

});
