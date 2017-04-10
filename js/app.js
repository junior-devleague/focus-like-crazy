console.log("Sanity Check");

function bubbleClick(id){
  console.log(id+" was clicked");
  document.getElementById(id).style.transition = "all 0.3s";
  document.getElementById(id).style.opacity = "0";
  document.getElementById(id).removeEventListener('bubbleClick',
        makeBackgroundYellow,
        false
    );
  setInterval(wait, 300);
  function wait() {
    document.getElementById(id).style.display = "none";
  }
}

function blueButtonClick(id){
	var button = document.getElementById(id);
	
}