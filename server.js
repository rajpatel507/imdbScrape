var jsdom = require('jsdom');

jsdom.env({
  url: "http://www.imdb.com/chart/top",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");

   $(".lister-list tr").each(function() {
     $this = $(this)
    var label =  $this.find(".titleColumn a").text();
    var year = $this.find(".titleColumn span").text();
    var rating = $this.find(".ratingColumn strong").text();
    console.log(label  + year + " - " + rating + '\n')
    });
  }
});   