$(document).ready(function() {
	var x = 16;
	var y = 16;
	
	for(i = 1; i <= x; i++){
		for(j = 1; j <= y; j++){
			var div = $('<div class="grid"></div>');
			div.appendTo('.container');
		};	
	};
	
	var pageWidth = 640 - x;
	var pageHeight = 640 - y;
	
	var boxWidth = Math.round(pageWidth / x) - 1;
	var boxHeight = Math.round(pageHeight / y) - 1;
	
	$('.grid').css("width", boxWidth);
	$('.grid').css('height', boxHeight);
	
	$('.grid').on('mouseenter', function() {
		$(this).addClass('entered');
	});
	$('.grid').on('click', function() {
		$(this).removeClass('entered');
	});
	
	$('.clear').on('click', function(){
		$('.container').find('.grid').removeClass('entered');
	});
});