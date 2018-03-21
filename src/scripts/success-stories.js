jQuery(document).ready(function($){

  (function reformatSuccessStoriesName () {
    let latestStoryTitle = $('.latest-story-track-number')[0].innerHTML;
    let latestStoryDate = $('.latest-story-track-date')[0].innerHTML;
    let colonePosition = latestStoryTitle.indexOf(':');
    let singleStoryTitle = $('.latest-story-track-number')[0].innerHTML;
    let singleStoryDate = $('.latest-story-track-date')[0].innerHTML;
    let singleStoryColonePosition = latestStoryTitle.indexOf(':');
    // let spacePosition = latestStoryDate.indexOf(' ')
    if ( $('.play-button-wapper').length !== 0 ) {
      $('.latest-story-track-number')[0].innerHTML = `Podcast ${latestStoryTitle.slice(0, colonePosition)}`;
    } else {
      $('.latest-story-track-number')[0].innerHTML = "Article";
    }

    $('.single-success-story').each(function(){
      let storyTitle = $(this)[0].children[0].children[1].innerHTML;
      let colonePosition = storyTitle.indexOf(':');
      console.log($.contains(this, document.getElementsByClassName('single-story-play-button-wapper')));
      if ($.contains($(this)[0].children[0].children[0].children, $('.single-story-play-button-wapper'))) {
        $(this)[0].children[0].children[0].children[1].innerHTML = `Podcast ${storyTitle.slice(0, colonePosition)}`;
      } else {
        $(this)[0].children[0].children[0].children[1].innerHTML = "Article"
      }
      console.log($(this));
    })

    $('.latest-story-track-title')[0].innerHTML = `${latestStoryTitle.slice(colonePosition + 1)}`;

    // $('.latest-story-track-date')[0].innerHTML = `${latestStoryDate.slice(0, spacePosition)}`;
  })();

  (function slick () {
    $('.other-success-stories').slick({
      centerMode: true,
      centerPAdding: '30px',
      slideToShow: 1,
      arrow: false,
    })
  })();

})