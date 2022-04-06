var dumButton = document.querySelectorAll(".drum").length;


// sound by muse click
for(var i=0; i<dumButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttenInnerHTML = this.innerHTML;

        makeSounds(buttenInnerHTML);
        buttenAnimation(buttenInnerHTML);
        
    });

}

// sound by key board click

document.addEventListener("keypress", function(event){

    makeSounds(event.key);
    buttenAnimation(event.key);

})

//Sounds
function makeSounds(key) {
    
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttenInnerHTML);
            
    }
}

// Animation

function buttenAnimation(currentkey){

    var activeAnimation = document.querySelector("." + currentkey);
    activeAnimation.classList.add("pressed");

    setTimeout(function(){

        activeAnimation.classList.remove("pressed");
    }, 100);
}



