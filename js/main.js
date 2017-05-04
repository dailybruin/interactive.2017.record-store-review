var recordplayerdiv = document.getElementById("record-player-div");
var recordwithplayer = document.getElementById("record-image__hover");

recordplayerdiv.onmouseover = function() {
  recordwithplayer.style.display = "block";
}

recordplayerdiv.onmouseout = function() {
  recordwithplayer.style.display = "none";
}
