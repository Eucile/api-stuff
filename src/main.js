import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {


  $('#genre-btn').click(function() {
    const searches = ["author/william%20gibson", "title/schismatrix", "title/snow%20crash", "title/synners", "title/shockwave%20rider"]
    var search = searches[math.floor(math.random() * searches.length)];
    $('#genre').text('');
    var url = "https://goodquotesapi.herokuapp.com/${search}";
    $('.genre-output').show();
    $.ajax({
      url: url,
      success: function(result){
      var finalIndex = result.data.length-1;
      var randomIndex = Math.round((Math.random() * finalIndex));
      console.log(randomIndex);
      $('.genre-output h1').text(result.data[randomIndex].attributes.titles.en_jp);
      $('#poster').attr("src", result.data[randomIndex].attributes.posterImage.medium);
      $('.synopsis').text(result.data[randomIndex].attributes.synopsis);
    }
});
console.log(url);
});

});
