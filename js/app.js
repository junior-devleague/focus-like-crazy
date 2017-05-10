console.log("Sanity Check");
//generates a list of bubbles that need to be clicked
var bubble = document.getElementsByClassName("bubble");
var bubblesLeft = [];
var progress = 0; //the percentage for the bar
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
bubble[num].style.opacity = "1";
function bubbleClick(id){
<<<<<<< HEAD
  if(document.getElementById(id).style.opacity == "1"){
=======
  if(document.getElementById(id).style.opacity == "100"){
    progress += 5;
>>>>>>> master
    bubblesLeft.splice(bubblesLeft.indexOf(id), 1);
    completion(bubblesLeft.length,progress);
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
  clearTimeout(myVar);
}
if (window.location.href.indexOf("game") != -1){
  window.onload = function(){
   setTimeout(function(){
       timerBarStart()
   }, 1000);
  };
}

function timerBarStart() {
    var bar = document.getElementById("time"); 
    var width = 0;
    var id = setInterval(frame, 200);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            window.location.replace("./endgame-screen.html");
        } else {
            width++; 
            bar.style.width = width + '%'; 
        }
    }
}

function completion(completion, progress) {
  var comp = document.getElementById("complete");
  var dom = document.getElementById("completion-bar").getElementsByTagName("p");
  dom[0].innerHTML = "" + completion + "/20";
  console.log(dom[0]);
  comp.style.transition = "all 0.5s ease";
  comp.style.width = progress +"%";
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
