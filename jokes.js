$(document).ready(function(){

  var api = "http://api.icndb.com/jokes/random";

  $.getJSON( api, function(data){
    $('.joke').text(data.value.joke);
  });

  $(document).click(function(){
    $.getJSON( api, function(data){
      $('.joke').text(data.value.joke);
    });
  });

  $(document).keypress( function(e){
    if (e.which == 13) {
      $.getJSON( api, function(data){
        $('.joke').text(data.value.joke);
      });
    }
  });

});
