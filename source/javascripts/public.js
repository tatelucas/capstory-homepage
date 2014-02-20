//= require libs/jquery
//= require foundation/index
//= require_tree ./public
//= require libs/video

// Initialize Foundation
$(document).foundation();

//Big Video for intro
    _V_("intro_video").ready(function(){
      
      // Store the video object
      var myPlayer = this; 
      // Make up an aspect ratio
      var aspectRatio = 264/640; 
      myPlayer.volume(0);

      function resizeVideoJS(){
        var width = document.getElementById(myPlayer.id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
       // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
      window.onresize = resizeVideoJS; 

    });