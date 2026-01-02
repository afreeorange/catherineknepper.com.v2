$(document).ready(function () {
  // https://github.com/kenwheeler/slick/?tab=readme-ov-file#settings

  const tailwind_md_breakpoint = 768;

  $("#clients section-wrapper").on(
    "breakpoint",
    function (event, slick, breakpoint) {
      console.log(">>>", breakpoint);
      // left
    }
  );

  $(window).resize(function () {
    if ($(window).width() <= tailwind_md_breakpoint) {
      $("#clients section-wrapper").slick({
        arrows: true,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        mobileFirst: true,
        slidesToShow: 1,
        appendDots: $("#clients carousel-dots"),
        prevArrow: $("#clients carousel-prev"),
        nextArrow: $("#clients carousel-next"),
        responsive: [
          {
            breakpoint: 768,
            settings: "unslick",
          },
        ],
      });
    } else {
      $("#clients section-wrapper").slick("unslick");
    }
  });

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

  $("#clients section-wrapper").slick({
    arrows: true,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    mobileFirst: true,
    slidesToShow: 1,
    appendDots: $("#clients carousel-dots"),
    prevArrow: $("#clients carousel-prev"),
    nextArrow: $("#clients carousel-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick", // destroys slick
      },
    ],
  });
});
