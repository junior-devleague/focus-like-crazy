console.log("Sanity Check");
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
  document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
      console.log(id+" was clicked");
}

function blueButtonClick(id){
	var button = document.getElementById(id);
}