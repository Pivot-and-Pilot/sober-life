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
      $('.related-posts').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 2,
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

  (function renameRelatedPosts() {
    console.log($('.related-post-podcast-track-number'));
    $('.related-post-podcast-track-number').each(function () {
      let relatedPostTitle = $(this)[0].innerHTML;
      let colonPosition = relatedPostTitle.indexOf(':');
      $(this)[0].innerHTML = `Podcast ${relatedPostTitle.slice(0, colonPosition)}`;
    })

    $('.related-post-track-title').each(function () {
      let relatedPostTitle = $(this)[0].innerHTML;
      let colonPosition = relatedPostTitle.indexOf(':');
      $(this)[0].innerHTML = `${relatedPostTitle.slice(colonPosition + 1, relatedPostTitle.length)}`;
    })
  })();

})