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

  // Synthetic scrollbar for books-wrapper
  const booksWrapper = $("books-wrapper");
  const booksUl = booksWrapper.find("ul");

  if (booksWrapper.length && booksUl.length) {
    // Create scrollbar element
    const scrollbar = $(
      "<books-wrapper-scroll><div></div></books-wrapper-scroll>"
    );
    booksWrapper.append(scrollbar);

    const thumb = scrollbar.find("div");

    function updateScrollbar() {
      const scrollWidth = booksUl[0].scrollWidth;
      const clientWidth = booksUl[0].clientWidth;
      const scrollLeft = booksUl[0].scrollLeft;

      // Thumb width as percentage of visible area
      const thumbWidth = (clientWidth / scrollWidth) * 100;
      thumb.css("width", thumbWidth + "%");

      // Thumb position
      const maxScroll = scrollWidth - clientWidth;
      const thumbPos =
        maxScroll > 0 ? (scrollLeft / maxScroll) * (100 - thumbWidth) : 0;
      thumb.css("left", thumbPos + "%");
    }

    // Update on scroll
    booksUl.on("scroll", updateScrollbar);

    // Update on resize
    $(window).on("resize", updateScrollbar);

    // Initial update
    updateScrollbar();

    // Drag to scroll
    let isDragging = false;
    let startX, startScrollLeft;

    scrollbar.on("mousedown", function (e) {
      isDragging = true;
      startX = e.pageX;
      startScrollLeft = booksUl[0].scrollLeft;
      scrollbar.addClass("dragging");
      e.preventDefault();
    });

    $(document).on("mousemove", function (e) {
      if (!isDragging) return;
      const scrollWidth = booksUl[0].scrollWidth;
      const clientWidth = booksUl[0].clientWidth;
      const trackWidth = scrollbar.width();
      const dx = e.pageX - startX;
      const scrollDelta = (dx / trackWidth) * (scrollWidth - clientWidth);
      booksUl[0].scrollLeft = startScrollLeft + scrollDelta;
    });

    $(document).on("mouseup", function () {
      isDragging = false;
      scrollbar.removeClass("dragging");
    });
  }

  // Back-to-top visibility based on <nav> element
  const navigationElement = $("header nav")[0];
  const backToTop = $("back-to-top");

  if (navigationElement && backToTop.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            backToTop.removeClass("visible");
          } else {
            backToTop.addClass("visible");
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(navigationElement);
  }
});
