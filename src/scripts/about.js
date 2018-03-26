jQuery(document).ready(function($) {
  let windowSize = $(window).width();

  if (windowSize < 1024) {
    (function aboutPageMobileCarousels() {
      $('#about__our-team-wrapper').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      });
      if (windowSize < 768) {
        $('#about__certification-logo-wrapper').slick({
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        });
      }
    })();
  }
});
