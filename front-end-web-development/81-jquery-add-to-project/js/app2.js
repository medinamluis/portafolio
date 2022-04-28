//  Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');   // create new element from a jQuery

// Append or prepend to webpage (here, append to the spoiler's children):
//$('.spoiler').append($button);
$('.spoiler').prepend($button);

// by doing it this way, out JS is unobtrusive: if the JS doesn't work/is disabled, 
// it'll still show the spoiler (it also needs removal of display = none; added in the CSS

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



