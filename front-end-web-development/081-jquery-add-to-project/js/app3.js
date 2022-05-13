// Order of event handlers is important when creating elements dinamically: here, the
// event is added to a button which doesn't exist yet:
/*
$('.spoiler button').click(function() {
  $('.spoiler span').css('display', 'block');
  $('.spoiler button').hide();
});
*/

// A way to solve this is with the .on method and event delegation (attach the event handlers
// to the parent of the element of interest (or the parent-to-be if dinamically created). This was doesn't matter if the child exist on the DOM at page load or not
$('.spoiler').on('click', 'button', function() {
    $('.spoiler span').css('display', 'block');
  $('.spoiler button').hide();
});

const $button = $('<button>Reveal Spoiler</button>');

$('.spoiler').prepend($button);

$('.spoiler span').hide();
