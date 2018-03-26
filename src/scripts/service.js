jQuery(document).ready(function($) {

  // Set initial setting of first li item open
  (function setInitialApproachIcons() {
    $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li:eq(0)').addClass('open');
  })();

  // On click, only one li open at one time
  (function clickApproachIcons() {
    $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
      // Remove all other '+' signs and close description
      let siblings = $(this).parent().siblings();
      $(siblings).each(function() {
        let siblingsDescription =  $(this).children()[1];
        $(siblingsDescription).slideUp()
      });
      $(siblings).removeClass('open');

      // Add '+' sign and open description
      $(this).parent().addClass('open');
      let description = $(this).parent().children()[1];
      $(description).slideDown();
    });
  })();
});