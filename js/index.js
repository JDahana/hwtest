$(document).ready(function() {
    $("#scrollup").click(function() {
         $('html, body').animate({
             scrollTop: $(".sitename").offset().top
         }, 1000);
     });
    });