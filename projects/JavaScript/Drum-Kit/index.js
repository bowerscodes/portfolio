// Counting the buttons

const numberOfFrumButtons = document.querySelectorAll(".drum").length;

// Detecting the Button Press

for (var i = 0; i < numberOfFrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
    let buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {
    
    switch (key) {
        case "w":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "a":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "s":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            default: console.log(key);
    }
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    console.log("pressed!")


    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    console.log("UNpressed!")
}