

function triangle (height) {
	


}

var cbButton = document.getElementById('checkerboard');

cbButton.addEventListener('click', function checkerboard(width, height) {
		var board = "";
	
	for (row = 0; row < height; row++) {
		if (row % 2) {
			for (column = 0; column < width; column++) {
				if ( column % 2 ) {
					board = board + "#"
				} else {
					board = board + " "
				}
			}
		}else {
			for (column = 0; column < width; column++) {
				if ( column % 2 ) {
					board = board + " "
				} else {
					board = board + "#"
				}
			}
		}
		board = board + "\n"
	}
	console.log(board);
});

var trButton =document.getElementById('triangle');

trButton.addEventListener('click', function triangle() {
	console.log(area);
});

