/*
var myStudentDebt = 800;
myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [2, 3, 5, 8];
//console.log(myLuckyNumbers);
//console.log(myLuckyNumbers[0]);

myLuckyNumbers[0] = 15;
//console.log(myLuckyNumbers[0]);


//FUCNTIONS
add(10, 10);
function addFive(x) {
	return x + 5;

}
function add(x,y) {
	console.log(x + y);
}
addFive(10);
add(8,9);


var myAge = 21;

/*if (myAge < 21) {
	console.log("u cant party");
} else {
	console.log("party on garth")
}
*/
//console.log(addFive(6));
/*
var hamburgers = 0;

//Loops

for (var i = 0; i < 10; i = i + 1) {
	//some code here
	hamburgers = hamburgers + 1;
	console.log(hamburgers);
}

//CONDITIONAL + LOOPS

//console.log("How many licks does it take to the center of tootsie pop??");

function askMrOwl(numOfLicks) {
	for (var licks = 1; licks <= numOfLicks; licks++) {
		if (licks < numOfLicks) {
			console.log("ahh" + licks);
		} else {
			console.log("CRUNCH!!")
		}
	}
}
*/
//askMrOwl(18);


// # # # #

// # # # #

// # # # #

// # # # #


function makeCheckerboard(width, height) {
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
	console.log(checkerboard);
}
