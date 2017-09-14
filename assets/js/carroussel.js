$(document).ready(function(){

	var i = 0;
	var max = $('#caroussel > li').length - 1;  
    
	$('#caroussel > li').each(function(i){ 
    var titreNom = $(this).children('.lien').html();
   $('#subnav').append('<a href="#" id="'+i+'">'+titreNom+'<span></span></a>');
	}); 
    
	$("#caroussel > li").eq(i).addClass('active');
	$('#subnav > a').eq(i).addClass('active');
    
	$('#next').click(function(e){ 
	    (e).preventDefault();  	    
	    if( i < max ){   
	    	i++; 
			  $('#caroussel > li').removeClass('active').eq(i).addClass('active');
			  $('#subnav > a').removeClass('active').eq(i).addClass('active');
	    }
	    else{
	      i = 0;  
			  $('#caroussel > li').removeClass('active').eq(i).addClass('active');
			  $('#subnav > a').removeClass('active').eq(i).addClass('active');
	    } 
	});

	$('#prev').click(function(e){  
	    (e).preventDefault();  	    
	    if( i > 0 ){ 
	    	i--; 
			  $('#caroussel > li').removeClass('active').eq(i).addClass('active');
			  $('#subnav > a').removeClass('active').eq(i).addClass('active');
	    }
	    else{
	      i = max;  
			  $('#caroussel > li').removeClass('active').eq(i).addClass('active');
			  $('#subnav > a').removeClass('active').eq(i).addClass('active');
	    }  
	}); 
  
  $('#subnav > a').click(function(e){ 
      (e).preventDefault(); 
 	    i = $(this).attr('id');
	    $(this).addClass('active');
	    $('#subnav > a').removeClass('active').eq(i).addClass('active');
		  $('#caroussel > li').removeClass('active').eq(i).addClass('active');
	});

});