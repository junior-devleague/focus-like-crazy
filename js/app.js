console.log("Sanity Check");
var clickedIds = [];
  for (var i = 1; i <= 9; i++) {
    clickedIds.push("bubble"+i);
  }
function bubbleClick(id){
  for (var i = 0; i < clickedIds.length; i++) {
    if(id==clickedIds[i]){
      clickedIds.splice(clickedIds.indexOf(id),1);
      console.log(id+" was clicked");
      document.getElementById(id).style.transition = "all 0.3s";
      document.getElementById(id).style.opacity = "0";
    }
  }
/*  setInterval(wait, 300);
  function wait() {
    document.getElementById(id).style.display = "none";
  }*/
}

function blueButtonClick(id){
	var button = document.getElementById(id);
}