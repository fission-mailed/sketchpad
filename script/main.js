$(document).ready(function() {
	// Setting default grid size
	var length = 16;
	var height = 16;
	
	function createGrid(x,y){
		
		for(i = 1; i <= x; i++){
			for(j = 1; j <= y; j++){
				var div = $('<div class="grid"></div>');
				div.appendTo('.container');
			};	
		};
		// This needs improving to accurately render correct dimensions
		var pageWidth = 640 - 3*x;
		var pageHeight = 640 - 3*y;
	
		var boxWidth = Math.floor(pageWidth / x);
		var boxHeight = Math.floor(pageHeight / y);
	
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
	};
	
	// Call function to create default grid
	createGrid(length,height);
	
	$('.size').on('click', function(){
		$('form').toggle();
	});
	
	// Allows user to alter dimensions of the grid
	$('form').submit(function(e){
		
		// Prevent form from refreshing page
		e.preventDefault();
		
		// Deletes previous grid
		$('.container').find('.grid').remove();
		
		var col = parseInt($('form').find('input[name="columns"]').val());
		var row = parseInt($('form').find('input[name="rows"]').val());
		
		length = col;
		height = row;
		
		// Calls function with new dimensions
		createGrid(length, height);
	});
});