$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  arrows: false
  });
 $(function () {
   var objt = $("div.person").length;
   if (objt > 3) {
     $(".owl-carousel").owlCarousel({
         items: 3,
         loop: true,
         nav: true,
         dots: false
     });
   }
 });
new WOW().init();
$(window).scroll(function() {
  if ($(window).width() > 1024) {
    if ($(this).scrollTop() > 1){

        $('header').addClass("sticky");

    }  else{

        $('header').removeClass("sticky");
    }
  }


});
           $('.menuBtn').click(function () {
               $('.menuBtn').toggleClass('active');
               $('.header__nav').toggleClass('opened');
           });

});
