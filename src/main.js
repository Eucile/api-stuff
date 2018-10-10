import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';




function quoter(){
  const searches = ["author/william%20gibson", "author/bruce+sterling", "title/snow+crash", "title/shockwave+rider", "title/transmetropolitan", "author/richard+k.+morgan", "author/philip+k.+dick"];
  var search = searches[Math.floor(Math.random() * searches.length)];
  $('#genre').text('');
  var url = "https://goodquotesapi.herokuapp.com/" + search;
  $('.genre-output').show();
  $.ajax({
    url: url,
    success: function(result){
      var glorft = result.quotes[Math.floor(Math.random() * result.quotes.length)];
      $('.genre-output h1').text(glorft.quote);
      $('.author').text(glorft.author);
      // $('#poster').attr("src", result.data[randomIndex].attributes.posterImage.medium);
      // $('.synopsis').text(result.data[randomIndex].attributes.synopsis);
    }
  });
}
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function rando() {
  console.log("rando is running");
  var randyrandom = randint(10000, 60000)
  console.log(randyrandom);
  setTimeout(function(){quoter(); rando()}, randyrandom)
}

$(document).ready(function() {
  quoter()
  rando()


});
