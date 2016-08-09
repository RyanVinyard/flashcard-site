$(document).ready(function() {
  $(".col-md-3").click(function() {
//  $(this).slideToggle().stop();
  $(this).children().slideToggle("fast");
  });
});
