// Button must be created in the html and the spoiler span first hiden in the css

// Hide the spoiler text
$('.spoiler span').hide();

// Show message and disappear button. The .on method allows multiple events to run the same function
$('.spoiler button').click(function() {
  // Show the spoiler text
  // $('.spoiler span').display();
  // alternatively,
  $('.spoiler span').css('display', 'block');
  // Hide the button
  $('.spoiler button').hide();
});



