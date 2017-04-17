console.log("Sanity Check");
<<<<<<< HEAD
/*var clickedIds = [];
for (var i = 1; i <= 9; i++) {
    clickedIds.push("bubble"+i);
}*/
=======
>>>>>>> master
//generates a list of bubbles that need to be clicked
var x = 1;
var bubble = document.getElementsByClassName("bubble");
for (var i = 0; i < bubble.length; i++) {
    bubble[i].addEventListener('click',function(){
      bubbleClick(this.id);
    }, {
      once: true
    });
}
function bubbleClick(id){
<<<<<<< HEAD
  /*for (var i = 0; i < clickedIds.length; i++) {
    if(id==clickedIds[i]){
      clickedIds.splice(clickedIds.indexOf(id),1);
      console.log(id+" was clicked");
      document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
    }
  }*/
  document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
      console.log(id+" was clicked");
      /*document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";*/
/*  setInterval(wait, 300);
  function wait() {
    document.getElementById(id).style.display = "none";
  }*/
=======
  document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
      console.log(id+" was clicked");
>>>>>>> master
}

function blueButtonClick(id){
	var button = document.getElementById(id);
}