$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  arrows: false
  });
 $(function () {
   var objt = $("div.person").length; // Считаем количество элементов с class="block"
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

    if ($(this).scrollTop() > 1){

        $('header').addClass("sticky");

    }  else{

        $('header').removeClass("sticky");
    }

});
});
