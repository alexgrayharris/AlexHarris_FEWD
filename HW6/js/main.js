$(document).ready(function() {

  // Create a variable called city - use this to determine picture
  var city ;

  $("#submit-btn").click(function(event) {
    // Prevent page from reloading automatically on a click so info will save
    event.preventDefault();
    // Save input into city variable and trim it so remove white space and only lower case
    city = $("#city-type").val().trim().toLowerCase();
    console.log(city);
    // If NY, put background as NY
    if (city === 'new york' || city === 'new york city' || city === 'nyc') {
        $('body').addClass('nyc');
        $('body').removeClass('sf la austin sydney');
      }
    else if (city === 'san fransisco' || city === 'sf' || city === 'bay area') {
        $('body').addClass('sf');
        $('body').removeClass('nyc la austin sydney');
      }
    else if (city === 'los angeles' || city === 'lax' || city === 'la') {
        $('body').addClass('la');
        $('body').removeClass('sf nyc austin sydney');
      }
    else if (city === 'austin' || city === 'atx') {
        $('body').addClass('austin');
        $('body').removeClass('sf la nyc sydney');
      }
    else if (city === 'sydney' || city === 'syd') {
        $('body').addClass('sydney');
        $('body').removeClass('sf la austin nyc');
      }
    $("#city-type").val("");  
  });

});
