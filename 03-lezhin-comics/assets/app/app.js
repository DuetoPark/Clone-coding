$(document).ready(function(){
  $('.banner-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});
