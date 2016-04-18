/*
|-------------------------------------------------------
| Title: Main Javascript
| Developer: Daniel Griffiths
| Updated: 17/07/2015
|-------------------------------------------------------
*/

/*
|-------------------------------------------------------
| Responsive Menu
|-------------------------------------------------------
*/

$( document ).ready(function() {
  $("nav").click(function() {
    $("nav ul").toggleClass('active');
  });
});

