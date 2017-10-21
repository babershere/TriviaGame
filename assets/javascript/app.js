// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.





//create a timer

//create question call out
//functions
// function questions (){}
//code
//Variables
var intervalId;
var time = 5 
var clockRunning = false

//timer counter
function count() {
    time--;
    $("#display").text(time);
    if (time === 0) {
        stop()
        alert("Times up!")
    }
}


//timer start
function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

}
//timer stop
function stop() {
    clearInterval(intervalId);
    clockRunning = false
}


//start script on load
$(window).on("load", function() {

    //Click the button to start timer
    $(".start").click(start);

        $(document).on("change", 'input[name="q1"]', function(e) {
            console.log(this.value);
        });

        $(document).on("change", 'input[name="q2"]', function(e) {
            console.log(this.value, "this is answer two");
        });

        $(document).on("change", 'input[name="q3"]', function(e) {
            console.log(this.value, "this is answer three");
        });


$(".submit").click(stop);

});