
$(function() {
	$('body').on('click','.questions h3', function() {
		$(this).toggleClass("showed");
		$(this).next("p").slideToggle("slow");
	});
  
});