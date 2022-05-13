/*
$('#flashMessage').hide();
$('#flashMessage').slideDown(1000);  // 400ms by default
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp();
*/

// Chaining (possible because the method returns a reference to the same element):
//$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();


$('#flashMessage').hide()  // Hide on page load

$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();  // Retrieve value of field
  const content = $('#blogContentInput').val();
  console.log(title);
  console.log(content);
  
  // .text() and .html w/o arguments are getters returining strings:
  /*
  console.log( $('.blogNewPost').text() );   // Only retrieve text
  console.log( $('.blogNewPost').html() );   // Retrieve the full html code
  */
  
  // .text() and .html w/o arguments are setters returning jQueries:
  
  $('#blogTitlePreview').text(title);      // Sets plain text
  $('#blogContentPreview').html(content);  // Renders HTML text
  
  // Displaying the flash message with a more readable chaning syntax:

  $('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp();
});
    