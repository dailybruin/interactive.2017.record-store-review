function articles(index) {
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1RKuLkdHwwHM9Q1lMJX_g36NV331NHVzgFsrkuIO_F8o/od6/public/values?alt=json",
    success: function(data) {
      data = data.feed.entry;
      console.log(data);
      var source = $("#handlebars-articles").html();
      var template = Handlebars.compile(source);

      var html = template(data[index]);
      var indexString = index.toString();
      var idPlusIndex = "#record-store-review-" + indexString;
      console.log(idPlusIndex);
      $(idPlusIndex).replaceWith(html);
    }
  });
}

function showMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function() {
  // ratings
  Handlebars.registerHelper('times', function(n, block) {
      var accum = '';
      if (n == 0.5 || n == 1.5 || n == 2.5 || n == 3.5 || n == 4.5) {
        for(var i = 0; i < n - 1; ++i) {
            accum += block.fn('<img src="http://dailybruin.com/images/paws/full.png" /> ');
        }
        accum += block.fn('<img src="http://dailybruin.com/images/paws/half.png" class="list-rating" />');
      } else {
        for(var i = 0; i < n; ++i) {
            accum += block.fn('<img src="http://dailybruin.com/images/paws/full.png"  class="list-rating"/>');
        }
      }

      if (n == 0.5 || n == 1.5 || n == 2.5 || n == 3.5 || n == 4.5) {
        for(i = 0; i < 5 - n - 1; i ++)
            accum += block.fn('<img src="http://dailybruin.com/images/paws/blank.png"  class="list-rating" />');
      } else {
        for(i = 0; i < 5 - n; i ++)
            accum += block.fn('<img src="http://dailybruin.com/images/paws/blank.png"  class="list-rating" />');
      }
      return accum;
    });
});
