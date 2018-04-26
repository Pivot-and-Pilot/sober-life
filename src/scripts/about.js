jQuery(document).ready(function($) {
  let windowSize = $(window).width();

  if (windowSize < 768) {
    (function aboutPageMobileCarousels() {
      $('#about__our-team-wrapper, #about__certification-logo-wrapper').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      });
    })();
  }
});

