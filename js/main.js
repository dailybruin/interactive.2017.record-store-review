var recordPlayerDiv = document.getElementById("record-player-div");
var recordWithPlayer= document.getElementById("record-image__hover");

recordPlayerDiv.onmouseover = function() {
  recordWithPlayer.style.display = "block";
}

recordPlayerDiv.onmouseout = function() {
  recordWithPlayer.style.display = "none";
}

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
