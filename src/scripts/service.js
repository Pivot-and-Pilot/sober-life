jQuery(document).ready(function($) {

  
  (function setInitialApproachIcons() {
    // $('#services-child > .services-child__our-approach > ul > li').each(function() {
    //   let approachIconLine = $(this).children().children().children().children()[1];   
    //   let approachDescription = $(this).children()[1];
    //   $(approachIconLine).removeClass('closed');     
    //   if ($(approachDescription).css('display') == 'none') {
    //     $(approachIconLine).addClass('closed');
    //   } 
    // })
    $('#services-child > .services-child__our-approach > ul > li:eq(0)').addClass('open');
    
  })();

  // *************** LEFT OFF HERE ****************************************************************
  (function clickApproachIcons() {
    $('#services-child > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
      let siblings = $(this).parent().siblings();
      console.log(siblings);
      if ($(siblings).hasClass('open')) {
        console.log('Open');
        $(siblings).removeClass('open');
        let description = $(siblings).children()[1];
        $(description).slideUp();
      } else {
        console.log('closed');
      }

      $(this).parent().siblings().removeClass('open');

      $(this).parent().addClass('open');
      let description = $(this).parent().children()[1];
      $(description).slideToggle();
      // let secondSpan = $(this).children().children().children()[1];
      // $(secondSpan).toggleClass('closed');
    
    });
  })();
});