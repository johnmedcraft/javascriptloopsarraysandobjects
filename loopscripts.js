function randomNumber(upper){
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}

// WHILE LOOP
// Random Number Generator where even numbers are bold & purple
// var counter = 1;
// while (counter < 1000){
// 	var randNum = randomNumber(9);
// 	if (randNum % 2 == 0){
// 		document.write("<b><font color='purple'>"+randNum+" </font></b>");
// 	}else{
// 		document.write(randNum + ' ');
// 	}
// 	counter += 1;
// }

// DO WHILE LOOP
// Prompt the user to guess the random number
// var randNum = randomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;
// do {
// 	guess = prompt('Please choose a number between 1 and 10.');
// 	guessCount += 1;
// 	if (parseInt(guess) === randNum) {
// 		correctGuess = true;
// 	}
// } while (!correctGuess)
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries to guess the number ' + randNum + '.');

// FOR LOOP
// First, a basic for loop
// for(var i = 0; i < 10; i += 1){
// 	document.write(i);
// }
// Example from course
// var html = '';
// for (var i = 1; i <= 10; i += 1){
// 	html += '<div>' + i + '</div>';
// }
// document.write(html);

//COLOR CIRCLES EXAMPLES
// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;

// for (var i = 0; i <= 100; i += 1) {
// 	red = Math.floor(Math.random() * 256);
// 	green = Math.floor(Math.random() * 256);
// 	blue = Math.floor(Math.random() * 256);
// 	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// 	html += '<div style ="background-color:' + rgbColor + '"></div>';
// }
// document.write(html);