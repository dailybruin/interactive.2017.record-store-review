// hovering over image changes the image
function showRecord(index) {
  var indexString = index.toString();
  var recordPlayerWithoutRecordID = "record-player-without-record" + "-" + indexString;
  var recordPlayerWithoutRecord = document.getElementById(recordPlayerWithoutRecordID);
  recordPlayerWithoutRecord.onmouseover = function() {
    this.src = "img/recordwithplayerresized.png";
  }
  recordPlayerWithoutRecord.onmouseout = function() {
    this.src = "img/recordplayerresized.png";
  }
}

for (var i = 0; i < 7; i++) {
  showRecord(i);
}

// smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1100, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
