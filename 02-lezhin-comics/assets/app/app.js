// Slick 슬라이더 라이브러리 선언
$(document).ready(function(){
  $('#banner-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});


// 배너 버튼
const bannerController = document.querySelector(".banner-controller");
let bodyWidth = window.innerWidth;

if (bodyWidth>=640) {
  bannerController.classList.remove("hidden");
}

$(window).resize(function(){
  bodyWidth = window.innerWidth;
  if (bodyWidth>=640) {
    bannerController.classList.remove("hidden");
  } else {
    bannerController.classList.add("hidden");
  }
});
