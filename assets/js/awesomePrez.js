/* -----

Open Source Slide Presentation 

----- */
/*
Presentation Functions
*/


$( document ).ready(function() {  
  
  /*

Clicking Home Icon Brings everything back to the cover slide 

*/
  
   $( "#home" ).on( "click", function() {  
    $(".page").removeClass('center left up').addClass('right');
     $("#p4, #p5,#p6").removeClass('right').addClass('down');
    $("#homePage").attr('class', 'bckGrnd_A page transition center');
  });
  
 
  
  $( ".next" ).on( "click", function() {
    $(this).parent('div').removeClass('right left up down center').addClass('left');
    var $foo = $(this).attr("data-nextPage");
    $foo = "#"+$foo;
    $($foo).removeClass('right left up down center').addClass('center');
    
    
  });
  
  
  $( ".nextonly" ).on( "click", function() {
    
    var $foo = $(this).attr("data-nextPage");
    $foo = "#"+$foo;
    $($foo).removeClass('right left up down center').addClass('center');
    
    
  });
  
  
  
  $( ".back" ).on( "click", function() {
    $(this).parent('div').removeClass('center left up ').addClass('right');
    var $foo = $(this).attr("data-prevPage");
    $foo = "#"+$foo;
    $($foo).removeClass('right left up down center').addClass('center');
   
  });
  
  $( ".goUp" ).on( "click", function() {
    $(this).parent('div').removeClass('right left up down center').addClass('up');
   
    var $foo = $(this).attr("data-nextPage");
    $foo = "#"+$foo;
    $($foo).removeClass('right left up down center').addClass('center');
   
    
  });
  
    $( ".upOnly" ).on( "click", function() {   
    var $foo = $(this).attr("data-nextPage");
    $foo = "#"+$foo;
    $($foo).removeClass('right left up down center').addClass('center');
  });
  
 
  
    $( ".goDown" ).on( "click", function() {
    $(this).parent('div').removeClass('right left up down center').addClass('down');
   
    var $foo = $(this).attr("data-prevPage");
    $foo = "#"+$foo;
  $($foo).removeClass('right left up down center').addClass('center');
   
   
  });
  
  
  
  function delayedAction(elem, delay)
{
    setTimeout( function() { elem;}, delay );
}
  
  
  
  var $moreClick=0;
  

  
$( ".more" ).on( "click", function() {
   var $actions = $(this).attr("data-action");
   var $subAction = $actions.split(';');
 
  function moreStop(i) {
    $moreClick=$moreClick+1;
  }  
  
 
  
  
   if ($moreClick !== $subAction.length) {
     
    for (i = 0; i < $subAction.length; i++) {
      var $barr = $subAction[i].split(',');
      var endLoop = true;
      
      if ($barr[0]=='fadeIn') {         
        if (!$($barr[1]).hasClass("smoothFadeIn")) {
          var delay = 0;
          
          if (($barr[2]) !== 'undefined') {delay = $barr[2]; endLoop=false;}
          smoothFadeIn($barr[1],delay * i);
          
          $moreClick=$moreClick+1;
          if ($moreClick==$subAction.length){
            $(this).addClass('hide'); 
            $moreClick=0;
          } 
          if (endLoop) {return false;}
        }
      }
      if ($barr[0]=='slideRight') { 
       if (!$($barr[1]).hasClass("slideRight")) {
         var delay = 0;
          if (($barr[2]) !== 'undefined') {delay = $barr[2]; endLoop=false;}
          slideRight($barr[1],delay * i);
          $moreClick=$moreClick+1;
          if ($moreClick==$subAction.length){
            $(this).addClass('hide'); 
            $moreClick=0;
          } 
          if (endLoop) {return false;}
        }
      } else 
      if ($barr[0]=='slideUp') {
        if (!$($barr[1]).hasClass("slideUp")) {
          var delay = 0;
          if (($barr[2]) !== 'undefined') {delay = $barr[2]; endLoop=false;}
          slideUp($barr[1],delay * i);
          $moreClick=$moreClick+1;
          if ($moreClick==$subAction.length){
            $(this).addClass('hide'); 
            $moreClick=0;
          } 
          /*return false;*/
          if (endLoop) {return false;}
          
        }
      } else
      if ($barr[0]=='shrinkText') {
        if ($($barr[1]).hasClass("bigFitText")) {
          var delay = 0;
          if (($barr[2]) == null ) {endLoop=true;} else {endLoop=false;}
          if (!endLoop) {delay = $barr[2]; endLoop=false;} 
          shrinkText($barr[1],delay * i);
          $moreClick=$moreClick+1;
          if ($moreClick==$subAction.length){
            $(this).addClass('hide'); 
            $moreClick=0;
          } 
          if (endLoop) {return false;}
        }
      } 
    }
     
  }
    
    
    
  });
  
  
  function slideRight(i) 
   {
    $(i).addClass("slideRight");
   }
  
   $( ".sldRight" ).on( "click", function() {
     var $getElement = $(this).attr("data-event");
     slideRight($getElement)
   });
  
  
  function slideUp(i,delay) 
   {
    
     setTimeout(function() { $(i).addClass("slideUp"); }, delay);
   }
  
   $( ".sldUp" ).on( "click", function() {
     var $getElement = $(this).attr("data-event");
     slideUp($getElement)
   });
  
  function shrinkText(i) 
   {
    $(i).removeClass("bigFitText");
   }
  
   $( ".shrinkTextShow" ).on( "click", function() {
     $(this).toggleClass("bigFitText");
     $('#p2 section p').toggleClass("smoothFadeIn");
     
   });
  
  
  function smoothFadeIn(i, delay) 
   {
     setTimeout(function() { $(i).toggleClass("smoothFadeIn"); }, delay);
   }
  
  
  
  
});