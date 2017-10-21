// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.




//create var questions
//create an array of at least 3 questions
//create a timer

//variables 

// var questions

//functions
// function questions (){}
//code

$(document).on("change",'input[name="q1"]',function(e){
	console.log(this.value);
});

$(document).on("change",'input[name="q2"]',function(e){
	console.log(this.value, "this is answer two");
});

$(document).on("change",'input[name="q3"]',function(e){
	console.log(this.value, "this is answer three");
});

