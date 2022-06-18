$(document).ready(function () {
  $(".hero").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  })
})

$(document).ready(function () {
  $(".categories").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: `<div id="prev" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-back"></ion-icon>
  </div>`,
    nextArrow: `<div id="next" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-forward"></ion-icon>
  </div>`,
  })
})

$(document).ready(function () {
  $(".menu").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: `<div id="prev2" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-back"></ion-icon>
  </div>`,
    nextArrow: `<div id="next2" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-forward"></ion-icon>
  </div>`,
  })
})

$(document).ready(function () {
  $(".testimonial").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<div id="prev3" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-back"></ion-icon>
  </div>`,
    nextArrow: `<div id="next3" class="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center text-gray-300 text-xl cursor-pointer transition-all hover:text-white hover:bg-orange-400 hover:border-orange-400">
    <ion-icon name="arrow-forward"></ion-icon>
  </div>`,
  })
})
