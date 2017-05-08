console.log("Sanity Check");
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
console.log(bubble[num]);
bubble[num].style.opacity = "1";
function bubbleClick(id){
  if(document.getElementById(id).style.opacity == "1"){
    bubblesLeft.splice(bubblesLeft.indexOf(id), 1);
    document.getElementById(id).style.transition = "all 0.3s";
    document.getElementById(id).style.opacity = "0";
    console.log(id+" was clicked");
    if (bubblesLeft.length>0) {
      num = Math.floor(Math.random() * bubblesLeft.length);
      bubble[bubblesLeft[num]].style.opacity = "1";    }
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
if (window.location.href.indexOf("game") != -1){
  window.onload = function(){
   setTimeout(function(){
       timerBarStart()
   }, 1000);
   setTimeout(function(){
       window.location.replace("./endgame-screen.html");
   }, 21000);
  };
}

function timerBarStart() {
  var bar = document.getElementById("time");
  bar.style.transition = "all 20s";
  bar.style.width = "100%";
}
/*function myFunction() {
    alert("Hello");
}*/
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
