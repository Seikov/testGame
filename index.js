var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var redAudio = new Audio('./sounds/red.mp3');
var greenAudio = new Audio('./sounds/green.mp3');
var blueAudio = new Audio('./sounds/blue.mp3');
var yellowAudio = new Audio('./sounds/yellow.mp3');

function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour  = buttonColors[randomNumber];
    var playMusic = new Audio("./sounds/" + randomChosenColour + ".mp3");
    playMusic.play();   
    gamePattern.push(randomChosenColour);
}

function playSound(name) {

}

$(gamePattern).click(function() {
    $(gamePattern).addClass("pressed"); 
    setTimeout(function() {
        $(gamePattern).removeClass("pressed");
     }, 100)
  });

$(".btn").click(function() {  
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
})

