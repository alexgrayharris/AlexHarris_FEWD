$(document).ready(function(){

  // Check out how I did event.preventDefault within the click function's callback function
  // This is more of a best-practice way to do things here but your old way worked too.

  // When you click on Read more of blog 1 more content slides down
  $('#moreblog1').click(function(event) {
    event.preventDefault();
    $('#blog-1-remainder').slideDown('slow');
    // Excellent use of the animate method!
    $('html, body').animate({
      scrollTop: $('#blog-1-remainder').offset().top
    }, 1000);
    $('#moreblog1').hide();
    $('#lessblog1').show();
  });

  // When you click on read more of blog 2 more content slides down
  $('#moreblog2').click(function(event) {
    event.preventDefault();
    $('#blog-2-remainder').slideDown('slow');
    $('html, body').animate({
      scrollTop: $('#blog-2-remainder').offset().top
    }, 1000);
    $('#moreblog2').hide();
    $('#lessblog2').show();
  });

  // When you click on read less for blog one the extra content slides up
  $('#lessblog1').click(function(event) {
    event.preventDefault();
    $('#blog-1-remainder').slideUp('slow');
    $('html, body').animate({
      scrollTop: $('#blog-text-1').offset().top
    }, 1000);
    $('#lessblog1').hide();
    $('#moreblog1').show();
  });

  // When you click on read less for blog 2 the extra content slides up
  $('#lessblog2').click(function(event) {
    event.preventDefault();
    $('#blog-2-remainder').slideUp('slow');
    $('html, body').animate({
      scrollTop: $('#blog-text-2').offset().top
    }, 1000);
    $('#lessblog2').hide();
    $('#moreblog2').show();
  });

  // When you click on learn more under the About section extra content slides down
  $('#learn-more').click(function(event) {
    event.preventDefault();
    $('#more-about').slideDown('slow');
    $('#learn-more').hide();
  });
});

// Not sure what's going on here...is slicknav a plugin?
// If so, I'm not seeing it included on the HTML side.
$(function(){
	$('#nav').slicknav();
});
