console.log("Sanity Check");
var bubble = document.getElementsByClassName("bubble");
var bubblesLeft = [];
var progress = 0; //the percentage for the bar
var pause =false;
var score = width*0.2;
var ended = false;
console.log(bubblesLeft);
for (var i = 0; i < bubble.length; i++) {
    bubblesLeft.push("bubble"+(i+1));
    bubble[i].addEventListener('click',function(){
      bubbleClick(this.id);
    }, {
      once: true
    });
}
document.getElementsByClassName("flex")[0].style.display = "flex";
var num = Math.floor(Math.random() * bubblesLeft.length);
bubble[num].style.opacity = "1";
function bubbleClick(id){
  if(document.getElementById(id).style.opacity == "1" && ended==false){
    progress += 5;
    bubblesLeft.splice(bubblesLeft.indexOf(id), 1);
    completion(bubblesLeft.length,progress);
    document.getElementById(id).style.transition = "all 0.3s";
    document.getElementById(id).style.opacity = "0";
    console.log(id+" was clicked");
    if (bubblesLeft.length>0) {
      num = Math.floor(Math.random() * bubblesLeft.length);
      bubble[bubblesLeft[num]].style.opacity = "1";    }
    else{
      pause=true;
      setTimeout(function(){
            alert("You're Fast!");
       window.location.replace("./endgame-screen.html");;
          }, 1000);
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
  document.getElementsByClassName("flex")[0].style.display = "flex";
  pause=false;
}
function pauseButtonClick(id){
  document.getElementsByClassName("container-overlay")[0].style.display = "flex";
  document.getElementsByClassName("container-game")[0].style.display = "none";
  document.getElementsByClassName("flex")[0].style.display = "none";
  pause=true;
}

if (window.location.href.indexOf("game") != -1){
  window.onload = function(){
   setTimeout(function(){
       timerBarStart()
   }, 1000);
  };
}
var width = 0;
function timerBarStart() {
  var bar = document.getElementById("time"); 
  var id = setInterval(frame, 110);
  function frame() {
    if(pause==false){
      if (width >= 100) {
          clearInterval(id);
          ended =true;
          setTimeout(function(){
            alert("Time's UP!");
            window.location.replace("./endgame-screen.html");
          }, 1000);
      } else {
          width++;
          bar.style.width = width+"%";
      }
    }
  }
}
function completion(completion, progress) {
  var comp = document.getElementById("complete");
  comp.style.width = progress +"%";
}