jQuery(document).ready(function($) {
  $('#services-child > .services-child__our-approach > ul > li > .services-child__our-approach-list-icon-wrapper').click(function() {
    let description = $(this).parent().children()[2];
    $(description).slideToggle();
  });
});