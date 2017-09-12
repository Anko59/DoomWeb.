/* -----

Open Source Slide Presentation 

----- */



/*
Chart.js Script
*/
var myData = {
  labels : ["Mo","Di","Mi","Do","Fr","Sa","So"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(90,190,90,.5)",
      strokeColor : "rgba(90,190,90,1)",
      pointColor : "rgba(90,190,90,1)",
      pointStrokeColor : "#fff",
      data : [40,48,40,40,90,27,90]
    }
  ]
}

new Chart(document.getElementById("myChart").getContext("2d")).Line(myData);


var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 100]
        }
    ]
};



new Chart(document.getElementById("myBarChart").getContext("2d")).Bar(barData,{
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1

    

});




/*
Google Maps API
*/

var map;

function initialize() {
  var myLatlng = new google.maps.LatLng(53.16598,-3.140963);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Compacc Complete Accountancy'
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);







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