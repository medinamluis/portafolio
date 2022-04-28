// Event object:
$('.spoiler').on('click', 'button', function(event) {  // use event, evt or e
  console.log(event);
  console.log(event.target);
  console.log(this);  // equivalent to event.target
  $(this).prev().css('display', 'block');  // select the clicked element, go to the previous sibling (the spoiler span) and show
  $(this).hide();  // instead of $('.spoiler button').hide(); to disapear the clicked button
});

const $button = $('<button>Reveal Spoiler</button>');

$('.spoiler').append($button);  // changed from prepend since we are using .prev()

$('.spoiler span').hide();


// Example traversal:
// Select the previous li element w.r.t. to the 2nd li element (index 1) and change its color to green
//$('li').eq(1).prev().css( {color: 'green'};

