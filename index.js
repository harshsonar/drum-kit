let drumButtons = document.querySelectorAll(".drum").length;

//detecting keypress
for(let i = 0; i<drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });
} 
//function () is an anonymous function - having no name. 



//detecting keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



//making sound
function makeSound(key) {

    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    //adding class to html element

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 80);    //run function () after 80ms

}

