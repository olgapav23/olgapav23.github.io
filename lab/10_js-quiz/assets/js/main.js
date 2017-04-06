
function checkerboard(width, height) {
	var checkerboard = "";
	for (row = 0; row < height; row++) {
		if (row % 2) {
			for (column = 0; column < width; column++) {
				if ( column % 2 ) {
					checkerboard = checkerboard + "#"
				} else {
					checkerboard = checkerboard + " "
				}
			}
		}else {
			for (column = 0; column < width; column++) {
				if ( column % 2 ) {
					checkerboard = checkerboard + " "
				} else {
					checkerboard = checkerboard + "#"
				}
			}
		}
		checkerboard = checkerboard + "\n"
	}
}

function triangle (height) {
	var area = "";


}

var cbButton = document.getElementById("checkerboard");

cbButton.addEventListener('click', function checkerboard() {
	console.log(checkerboard);
});

var trButton =document.getElementById("triangle");

trButton.addEventListener('click', function triangle() {
	console.log(area);
});

