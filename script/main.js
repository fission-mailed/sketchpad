$(document).ready(function() {
	
	
	for(i = 1; i < 10; i++){
		var div = $('<div class="grid"></div>');
		div.appendTo('.container');
		
	};
	$('.grid').on('mouseenter', function() {
		$(this).addClass('entered');
	});
	$('.grid').on('click', function() {
		$(this).removeClass('entered');
	});
});