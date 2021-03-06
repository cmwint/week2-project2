// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
console.log('Question 1');
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i=0; i < livingRoom.length; i++){
	console.log(livingRoom[i]);
}

// 2. Using a loop, log numbers 22-33 in the console.
console.log('Question 2');
for (var i=22; i < 34; i++){
	console.log(i);
}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log('Question 3');
for (var i=75; i < 101; i+=5){
	console.log(i);
}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
console.log('Question 4');
var num = 0;
while (num < 5) {
   console.log('This is how a professional loops.');
   num++;
}

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
console.log('Question 5');
var largestNum = [-5, -2, -6, 0, -1];
var largest = 0;
for (i=0; i<largestNum.length; i++) {
    if (largestNum[i]>largest) {
        largest = largestNum[i];
    }
}
console.log(largest);


// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
console.log('Question 6');
for(i=10; i <= 101; i+=25){
	console.log("At home, I have " + i + " cats.");
}
var cats = 10;
while (cats <= 101){
	console.log("At home, I have " + cats + " cats.");
	cats+=25;
}

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
console.log('Question 7');
var numArray = [2, 17, 9, 24, 8];
for(i=0; i < numArray.length; i++){
	var number = numArray[i];
	if( ((number % 2) == 0) && (number > 10) ){
		console.log('Even and greater than 10');
	} else if( (number % 2) == 0 ){
		console.log('Even');
	}else{
		console.log('Odd');
	}
}

// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
console.log('Question 8');
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];
for(i=0; i < primes.length; i+=3){
	primeArray.push(primes[i]);
}
console.log(primeArray);

// 9. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log('Question 9');
var string = '#';
for(i=0; i < 7; i++){
	console.log(string);
	string += '#';
}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

console.log('Rock, Paper, Scissors');
// 10. Use a variable called "human" to prompt the user to type their choice.
		var human = prompt("Please choose rock, paper or scissors:");
// 11. Define an array called "choices" that consists of "paper", "rock", and "scissors".
		var choices = ["paper", "rock", "scissors"];
// 12. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
		var computer = Math.random();
// 13. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

// 14. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
		console.log(computer);

		if(computer <= 0.33){
			computer = 'rock';
		} else if ( (computer >= 0.34 ) && (computer <= 0.66) ){
			computer = 'paper';
		} else {
			computer = 'scissors';
		}
		
		console.log('Computer chose ' + computer);
		console.log('Human chose ' + human);

// 15. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
// 16. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
		// if(human == 'rock'){
		// 	if(computer == 'rock'){
		// 		console.log("Tie for rock. No one wins.");
		// 	} else if (computer == 'paper'){
		// 		console.log('Paper covers rock. Computer wins!');
		// 	} else { // computer = scissors
		// 		console.log('Rock crushes scissors. Human wins!');
		// 	}
		// } else if (human == 'paper'){
		// 	if(computer == 'rock'){
		// 		console.log("Paper covers rock. Human wins!");
		// 	} else if (computer == 'paper'){
		// 		console.log("Tie for paper. No one wins.");
		// 	} else { // computer = scissors
		// 		console.log("Scissors cut paper. Computer wins!");
		// 	}
		// } else if (human == 'scissors'){ // human = scissors
		// 	if(computer == 'rock'){
		// 		console.log('Rock crushes scissors. Computer wins!');
		// 	} else if (computer == 'paper'){
		// 		console.log('Scissors cut paper. Human wins!');
		// 	} else { // computer = scissors
		// 		console.log('Tie for scissors. No one wins.');
		// 	}
		// } else {
		// 	console.log("Please enter one of the choices.");
		// }

// 17. Give yourself a high five for completing your first javascript game!
// 18. Use the game you made above and rework it using a switch statement.

switch(human) {
  case 'rock':
  	switch(computer){
  		case 'rock':
		    var message = 'Tie for rock. No one wins.';
		    break;
  		case 'paper':
	  		var message = 'Paper covers rock. Computer wins!';
		    break;
  		default: // computer = scissors
	  		var message = 'Rock crushes scissors. Human wins!';
		    break;
  	}
    break;
  case 'paper':
  	switch(computer){
  		case 'rock':
		    var message = 'Paper covers rock. Human wins!';
		    break;
  		case 'paper':
	  		var message = 'Tie for paper. No one wins.';
		    break;
  		default: // computer = scissors
	  		var message = 'Scissors cut paper. Computer wins!';
		    break;
  	}
    break;
  case 'scissors':
  	switch(computer){
  		case 'rock':
		    var message = 'Rock crushes scissors. Computer wins!';
		    break;
  		case 'paper':
	  		var message = 'Scissors cut paper. Human wins!';
		    break;
  		default: // computer = scissors
	  		var message = 'Tie for scissors. No one wins.';
		    break;
  	}
    break;
  default:
    var message = 'That is not one of the choices';
    break;
}
console.log(message);
console.log("*high five*");

// 19. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEDS ER TALES?
// 20. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 21. Use a while loop to keep flipping the coin until you get tails.

// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
