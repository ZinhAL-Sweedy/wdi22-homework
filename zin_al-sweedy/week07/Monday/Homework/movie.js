var searchResults;
var id;
var cast;
var credits;
var detial;
var doMovieCredits = function(id) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }

    credits = JSON.parse(xhr.responseText);
    console.log(credits);
    // debugger;

    // credits.cast[]

    for (var i = 0; i < credits.cast.length; i++) {
      //   var result = searchResults.results[i];
      // console.log(i, result.title, result.id); // searchResults[i].tiltle
      cast = credits.cast[i];

      var $par = $('<p class="credits"></p>').html(cast.name);
      var $pa = $('<p class="credits"></p>').html(cast.character);
      $('#results').hide();

      $('#cast').append($par);
      $('#cast').append($pa);

      // append new node to div#main DOM element
      // var $npara = $('<p></p>').html(result.https)
      $('#cast').show();
    }
    //+ result.poster_path + result.spoken_languages);
    // could make a new para and append it with diff details
    for (var i = 0; i < credits.crew.length; i++) {
      //   var result = searchResults.results[i];
      // console.log(i, result.title, result.id); // searchResults[i].tiltle
      crew = credits.crew[i];

      var $p1 = $('<p class="detials"></p>').html(crew.job);
      var $p2 = $('<p class="detials"></p>').html(crew.department);
      $('#results').hide();

      $('#crew').append($p1);
      $('#crew').append($p2);

      // append new node to div#main DOM element
      // var $npara = $('<p></p>').html(result.https)
      $('#crew').show();
    }
  };
  // credits:
  url = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=24d863d54c86392e6e1df55b9a328755";

  xhr.open("GET", url);
  // &page=2? at the end
  xhr.send();

};

var doMovieSearch = function(query) {


  $('#image').hide();
  $('#results').empty();

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }

    searchResults = JSON.parse(xhr.responseText);
    console.log(searchResults);
    // debugger;

    for (var i = 0; i < searchResults.results.length; i++) {
      var result = searchResults.results[i];
      // console.log(i, result.title, result.id); // searchResults[i].tiltle

      var $para = $('<p class="result"></p>').html(result.title);
      // could add more vars and append e.g.
        // $('#results').append($para)
        //               .append($pp)
        //               .append($ss)



      $para.attr('movie-id', result.id)
      $('#results').append($para);
      // $('#results').append($parag);
      $('#results').show();
       // append new node to div#main DOM element
      // var $npara = $('<p></p>').html(result.https)
    }
  };

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + query;

  xhr.open("GET", url);
  // &page=2? at the end
  xhr.send();

};

var doMovieDetilas = function(id) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    detail = JSON.parse(xhr.responseText);
    // debugger
    console.log(searchResults);
    // debugger;

    // for (var i = 0; i < searchResults.results.length; i++) {
      // var result = searchResults.results;
      // console.log(i, result.title, result.id); // searchResults[i].tiltle
      // debugger

      // var $p1 = $('<p class="recom"></p>').html(detail.results);
      var $p = $('<p class="recom"></p>').html(detail.total_pages);
      var $pp = $('<p class="recom"></p>').html(detail.total_results);
      // console.log($p1,$p,$pp);
      // var $im = $('<p class="im"></p>').html.(searchResults.results.poster_path);
      $('#recom').append($p);
      $('#recom').append($pp);
      // $('#image').append($im);
      // $('#results').append($p1);
      $('#recom').show();
      // #('#image').show();
      // console.log($p,$pp);

      // $para.attr('movie-id', result.id);
      // $('#recom').append($p);
      // $('#recom').append($pp);
      $('#crew').hide();
      $('#results').show();
      $('#credits').hide();
      $('#details').hide();
      $('#cast').hide();
      $('#image').hide();

       // append new node to div#main DOM element
      // var $npara = $('<p></p>').html(result.https)
    // }
  };
  // credits:
  url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=24d863d54c86392e6e1df55b9a328755";

  xhr.open("GET", url);
  // &page=2? at the end
  xhr.send();

};
var doMovieImage = function(id) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    searchResults = JSON.parse(xhr.responseText);
    // debugger
    console.log(searchResults);
    // debugger;

    // for (var i = 0; i < searchResults.results.length; i++) {
      // var result = searchResults.results[i];
      // console.log(i, result.title, result.id); // searchResults[i].tiltle
      // debugger

      // var $im = $('<p class="im"></p>').html(searchResults.poster_path);
      var $parag = $('<img>').attr("src", "http://image.tmdb.org/t/p/w300" + searchResults.poster_path);
      $('#image').append($parag);

      $('#image').show();



      // console.log($p,$pp);

      // $para.attr('movie-id', result.id);
      // $('#recom').append($p);
      // $('#recom').append($pp);
      $('#recom').hide();
      $('#crew').hide();
      $('#results').hide();
      $('#credits').hide();
      $('#details').hide();
      $('#cast').hide();
      // ('#image').hide();

       // append new node to div#main DOM element
      // var $npara = $('<p></p>').html(result.https)
    // }
  };
  // credits:
  url = "https://api.themoviedb.org/3/movie/" + String(id) + "?api_key=24d863d54c86392e6e1df55b9a328755";

  xhr.open("GET", url);
  // &page=2? at the end
  xhr.send();

};

$(document).ready(function() {
  console.log('All sorted.');

  $("#searchButton").on("click", function() {
    var formQuery = $("#search").val();
    doMovieSearch(formQuery);
  });
  $(document).on("click", ".result", function() {
    // click handling code for all elements with class="result", whenever they are added to page
    console.log(this);
    // console.log( $(this).attr('movie-id')   );
    doMovieCredits($(this).attr('movie-id'));
  });
  $(document).on("click", ".result", function() {
    // click handling code for all elements with class="result", whenever they are added to page
    console.log(this);
    // console.log( $(this).attr('movie-id')   );
    doMovieDetilas($(this).attr('movie-id'));
  });
  $(document).on("click", ".result", function() {
    // click handling code for all elements with class="result", whenever they are added to page
    console.log(this);
    // console.log( $(this).attr('movie-id')   );
    doMovieImage($(this).attr('movie-id'));
  });
});




// credits:
// url = "https://api.themoviedb.org/3/movie/" + '348' + "/credits?api_key=24d863d54c86392e6e1df55b9a328755";
// recommendations
// url = "https://api.themoviedb.org/3/movie/" + '348' + "/recommendations?api_key=24d863d54c86392e6e1df55b9a328755";
// movie details
// url = "https://api.themoviedb.org/3/movie/" + '348' + "?api_key=24d863d54c86392e6e1df55b9a328755";

// poster_path
// https://api.themoviedb.org/3/movie/"+ movie-id+""?api_key={api_key}
// poster_path
// overview, belongs_to_collection
