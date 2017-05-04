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
