jQuery(document).ready(function($) {

  (function setInitialApproachIcons() {
    $('#services-child > .services-child__our-approach > ul > li').each(function() {
      let approachIconLine = $(this).children().children().children().children()[1];   
      let approachDescription = $(this).children()[1];
      $(approachIconLine).removeClass('closed');     
      if ($(approachDescription).css('display') == 'none') {
        $(approachIconLine).addClass('closed');
      } 
    })
  })();

  (function clickApproachIcons() {
    $('#services-child > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
      let description = $(this).parent().children()[1];
      $(description).slideToggle();
      let secondSpan = $(this).children().children().children()[1];
      $(secondSpan).toggleClass('closed');
    });
  })();
});