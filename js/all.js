$(document).ready(function () {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  $('.top a').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
   });
  
});
