jQuery(document).ready(function($) { 

  // Set initial setting of first li item open
  // (function setInitialApproachIcons() {
  //   $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li:eq(0)').addClass('open');
  // })();

  // On click, only one li open at one time
  (function clickApproachIcons() {
    $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
      // If already open, close and add '+' sign
      if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');        
        let description = $(this).parent().children()[1];
        $(description).slideUp();
      } else {
        // Open and add '-' sign
        $(this).parent().addClass('open');
        let description = $(this).parent().children()[1];
        $(description).slideDown();
      }
    });
  })();
}); 