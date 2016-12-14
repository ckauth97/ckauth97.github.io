

//Fade in main title
$(document).ready(function() {
	$("#name").fadeIn(500);

	$(".dropLink").hover(function(){
    	$(".dropContent").toggle();
	});

	$(".dropContent").hover(function(){
    	$(".dropContent").toggle();
	});

});



 