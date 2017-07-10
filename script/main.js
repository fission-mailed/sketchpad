// Setting default grid size
var square = 16;
var screenSize = 640;

// Function to generate a random number between 0 and 255
function randomNum (){
	return Math.floor(Math.random() * 255);
};

/* Calls the random number function and inserts results into a
	concatenated string */ 
function randomRGB() {
	return 'rgb(' + randomNum() + ', ' + randomNum() + ', ' + randomNum() + ')';
};

function createGrid(dimension){
		
	for(i = 1; i <= dimension; i++){
		for(j = 1; j <= dimension; j++){
			var div = $('<div class="grid"></div>');
			div.appendTo('.container');
		};
		$('<br>').appendTo('.container');
	};
	
	var boxSize = screenSize / dimension;
	
	$('.grid').css({"width": boxSize, "height": boxSize});
};

$(document).ready(function() {
	
	// Call function to create default grid
	createGrid(square);	
	
	$('.size').on('click', function(){
		$('#myForm').toggle();
	});
	
	// Allows user to alter dimensions of the grid
	$('form').submit(function(event){
		
		// Prevent form from refreshing page
		event.preventDefault();
		
		// Deletes previous grid
		$('.container').empty();
		
		// Gets the pen size the user has submitted
		var squareSize = 41 - parseInt($('#myForm').find('input[name="squaresize"]').val());
		
		/* Vaildates the user input (code returns null if user submits anything
		other than a number between 1 and 40 inclusive)	*/
		if (squareSize <= 40 && squareSize >= 1) {
			squareSize = squareSize;
		} else {
			squareSize = null;
		}
		
		// Calls function with new dimensions
		createGrid(squareSize);
	});
	
	// Code to change the square colour/opacity when a mouse enters
	$('.container').on('mouseenter', '.grid', function() {
		if ($('#normal').is(':checked')) {
				$(this).css({'background-color': 'black', 'opacity': '1'});
		} 
		else if ($('#rainbow').is(':checked')) {
				$(this).css({'background-color': randomRGB(), 'opacity': '1'});
		} 
		else if ($('#gradient').is(':checked')) {
			
				if ($(this).css('opacity') === '1') {
					$(this).css('opacity', '0');
				};
				
				$(this).css({'background-color': 'black', 'opacity': '+=0.1'});
		}
	});
	
	// Additional function removes the colour from the square when clicked
	$('div').on('click', '.grid', function() {
		$(this).css({'background-color': 'white', 'opacity': '0'});
	});
	
	// Removes colour from all squares in the grid when the clear button is pressed
	$('.clear').on('click', function(){
		$('.container').find('.grid').css({'background-color': 'white', 'opacity': '0'});
	});
});