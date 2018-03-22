jQuery(document).ready(function($){

  (function singlePostSlick () {
    if ($(window).width() < 768) {
      $('.single-post__first-gallery').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 1,
        arrows: false,
      })
      $('.single-post__second-gallery').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 1,
        arrows: false,
      })
    }

    // $('.other-success-stories').slick({
    //   centerMode: true,
    //   centerPadding: '4%',
    //   slidesToShow: 3,
    //   arrows: false,
    // })
   
  })();

})