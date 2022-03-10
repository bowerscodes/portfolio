const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


// Begin the game once a key is pressed
$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function() {

    // Return the id of the clicked button
    let userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour);

    // Play the corresponding sound & animate button press
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        // check the user has finished inputting, by comparing the length of their pattern to the game pattern
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            $("h1").html("Game Over, Press Any Key to Restart");
            startOver();
    }
};

function nextSequence() {
    // resets the user's array ready for the next level
    userClickedPattern = [];

    level ++ 
    $("h1").html("Level " + level)


    let randomNumber = Math.floor((Math.random() * 4));
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    // Make the chosen colour tile flash & play the coresponding sound
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}





