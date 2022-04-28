/************ Hide ************/

// Plain JS:

// Opt 1 (oldest):
/*
const box = document.getElementsByClassName('box')[0];
box.style.display = 'none';
*/

// Opt 2 (newer)
/*
const box = document.querySelector('.box');
box.style.display = 'none';
*/

// jQuery (also older, it inspired the newer plan JS Opt 2):

// Syntax:
//jQuery('.box').hide();

// Shorthand synthax:
$('.box').hide();
//$('.box').show();

/************ Click event ************/

// Plain JS:
/*
const box = document.querySelector('.box');
box.addEventListener('click', function(){
  alert('You clicked the box!');
});
*/

// jQuery:
/*
$('.box').click(function(){
  alert('You clicked the box!');
});
*/