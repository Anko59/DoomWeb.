$(function() {
	function collapseMenu(){
		if ($(window).width() < 800){
			$('#subnav').hide();
			$('.burger').show();
		}
		else {
			$('#subnav').show();
			$('.burger').hide();
		}
	}
	$('.shownOnScroll').on('appear',function(event, $all_appeared_elements) {
		console.log('yeah');
  		$(this).show("slow");
	});
	$( document ).ready(function() {
    	console.log( "ready!" );
    	$('.animation-text').fadeIn(3000);
    	$('#subnav').slideDown(900);
    	$('.nav').slideDown(900);
    	collapseMenu();

	});
	$('.page').on('click',function(){
		var i = Number($(this).attr('id'));
		$('#subnav > a').removeClass('active').eq(i).addClass('active');
		$('#caroussel > li').removeClass('active').eq(i).addClass('active');
	});
	$(window).on('resize', function(){
		collapseMenu();
	});
});
