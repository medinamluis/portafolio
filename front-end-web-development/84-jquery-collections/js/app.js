//1. Add a "featured" tag to the second item in the list: 
  //  Append a new span element containing the word "Featured" to the list item
  //  Add a class of "featured" to the new span element. 
$('li').eq(1).append(`<span>Featured</span>`); // same as $('li:eq(1)')
$('li span').addClass("featured");

//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
$('li:eq(-1)').addClass("new");  // same as $('li'):eq(-1)
// alternatively
//$('li:last-child').addClass("new");  // same as $('li:last') and $('li').last()

//3. Add an attribute to each link so that all anchor tags open in a new tab. 
$('a[href]').each(function() {
  $(this).attr('target', '_blank');
});
// same as 
$('a').attr('target', '_blank');

//4. Select and print the index and text of each anchor tag to the console
$('a').each(function(index, elem) {
  console.log(index, $(elem).text()); // using this
  // console.log(index, $(this).text()); // using 'this' (elem can be removed from the function arguments)
});

//5. Refactor question #4 using the 'this' keyword. 
