var recordPlayerDiv = document.getElementById("record-player-div");
var recordWithPlayer= document.getElementById("record-image__hover");

recordPlayerDiv.onmouseover = function() {
  recordWithPlayer.style.display = "block";
}

recordPlayerDiv.onmouseout = function() {
  recordWithPlayer.style.display = "none";
}
