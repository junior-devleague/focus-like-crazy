console.log("Sanity Check");
var bubble = document.getElementsByClassName("bubble");
for (var i = 0; i < bubble.length; i++) {
    bubble[i].addEventListener('click',function(){
      bubbleClick(this.id);
    }, {
      once: true
    });
}
function bubbleClick(id){
  document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
      console.log(id+" was clicked");
}
function blueButtonClick(id){
	var button = document.getElementById(id);
}

//timer and pause screen
/*
if "start" button clicked
  then start timer
if "pause" button clicked
  then pause timer
  then transition to pause screen
*/

//end game
/*
if timer reaches 1 minute || all bubbles are clicked
  then transition to end game screen
*/