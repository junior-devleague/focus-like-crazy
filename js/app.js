console.log("Sanity Check");
var nullThing = null;
var undThing;
undecThing = 1;

console.log(typeof(nullThing));
console.log(typeof(undThing));
console.log(delete undeclared );
//generates a list of bubbles that need to be clicked
var bubble = document.getElementsByClassName("bubble");
var bubblesLeft = [];
console.log(bubblesLeft);
for (var i = 0; i < bubble.length; i++) {
    bubblesLeft.push("bubble"+(i+1));
    bubble[i].addEventListener('click',function(){
      bubbleClick(this.id);
    }, {
      once: true
    });
}
var num = Math.floor(Math.random() * bubblesLeft.length);
bubble[num].style.opacity = "100";
function bubbleClick(id){
  if(document.getElementById(id).style.opacity !== "0"){
    bubblesLeft.splice(bubblesLeft.indexOf(id), 1);
    document.getElementById(id).style.transition = "all 0.3s";
    document.getElementById(id).style.opacity = "0";
    console.log(id+" was clicked");

    //console.log(bubblesLeft.length);
    if (bubblesLeft.length>0) {
      num = Math.floor(Math.random() * bubblesLeft.length);
      bubble[bubblesLeft[num]].style.opacity = "100";
      //console.log(bubblesLeft);
    }
    else{
      console.log("done!");
      window.location.replace("./endgame-screen.html") //goes to the endgame html 
    }
  }
  else{
    document.getElementById(id).addEventListener('click',function(){
      bubbleClick(this.id);
    }, {
      once: true
    });
  }
}
function keepPlaying(id){
  document.getElementsByClassName("container-overlay")[0].style.display = "none";
  document.getElementsByClassName("container-game")[0].style.display = "flex";
  document.getElementsByClassName("container-bar")[0].style.display = "flex";
}
function pauseButtonClick(id){
  document.getElementsByClassName("container-overlay")[0].style.display = "flex";
  document.getElementsByClassName("container-game")[0].style.display = "none";
  document.getElementsByClassName("container-bar")[0].style.display = "none";
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
  then transition to end game screen (w/ different messages for when player finishes in time and when player doesn't finish in time)
*/ 
