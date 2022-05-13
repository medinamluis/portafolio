// Special jQuery selectors:

const $odd = $('a:odd');  // name convention: start with variable name with $ when it refers to jQuert-selectec elements
//$odd.hide();

const $secureLinks = $('a[href^="https://"]');  // starts with
//$secureLinks.hide();

const $pdfs = $('a[href$=".pdf"]');  // ends with
//$pdfs.hide();


// As a setter:
$secureLinks.attr('target', '_blank');
$pdfs.attr('download', "");  // Some browsers don't support the download attribute.Some others (like Chrome) has preference settings that override this. Firefox doesn't trigger it if the target is in an external source. Set to true with ampty string: ""

// As a getter:
console.log( $secureLinks.attr('target') );
console.log( $pdfs.attr('download') );
console.log( $pdfs );

// Similary:

//$odd.css('backgroundColor')  // Getter
//$odd.css('backgroundColor', 'lightgray')  // Setter


// ----------

// Some useful methods:

$secureLinks.addClass("secure");
$pdfs.addClass("pdf");

/*
$('a').each(function(index, link){
  // console.log(index, $(link).attr('href'));    // 
  const url = $(link).attr('href');
  $(link).parent().append(` (${url})`);
});
*/
// more simplified (since we don't really use the index):
$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(` (${url})`);
});

//.remove("className")
//.toogleClass("className")

// --------------

// Make the checkbox unobstructive in case JS is not available (the checkbox won't be displayed in the html and no check will have to be done)

const $checkBox = $(`<label><input type="checkbox"> Allow PDF downloads</label>`);
$('#links').append($checkBox);

// --------------

// Prevent browser's default behaviour

$pdfs.on('click', function(event){
  // check if checkbox has ben checked
  // if zero checkboxes are checked
  if ( $(':checked').length === 0 ){   // $(':checked') returns a jQuery collection
    
    // prevent download of document
    event.preventDefault();
    // .preventDefault often used to prevent reload a page after form submission (default); also to prevent loading a link page into the current tab (default)
    
    // alert the user
    alert('Please check the box to allow PDF downloads')
    
  // else allow the download (no need for 'else')
  }
  
});



