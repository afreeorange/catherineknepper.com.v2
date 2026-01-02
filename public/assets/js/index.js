$(document).ready(function () {
  // https://github.com/kenwheeler/slick/?tab=readme-ov-file#settings
  $("#testimonials section-wrapper").slick({
    arrows: true,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    appendDots: $("#testimonials carousel-dots"),
    prevArrow: $("#testimonials carousel-prev"),
    nextArrow: $("#testimonials carousel-next"),
  });
});
