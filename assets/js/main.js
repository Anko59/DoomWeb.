$(function() {
	$('.shownOnScroll').on('appear',function(event, $all_appeared_elements) {
		console.log('yeah');
  		$(this).show("slow");
	});
	$( document ).ready(function() {
    	console.log( "ready!" );
    	$('.animation-text').fadeIn(3000);
    	$('#subnav').slideDown(900);
    	$('.nav').slideDown(900);
	});

});
