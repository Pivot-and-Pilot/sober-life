jQuery(document).ready(function($){ 

  (function reformatSuccessStoriesName () {
    let latestStoryTitle = $('.latest-story-track-number')[0].innerHTML;
    let latestStoryDate = $('.latest-story-track-date')[0].innerHTML;
    let colonePosition = latestStoryTitle.indexOf(':');
    // let singleStoryTitle = $('.latest-story-track-number')[0].innerHTML;
    // let singleStoryDate = $('.latest-story-track-date')[0].innerHTML;
    // let singleStoryColonePosition = latestStoryTitle.indexOf(':');
    // let spacePosition = latestStoryDate.indexOf(' ')
    if ( $('.play-button-wapper').length !== 0 ) {
      $('.latest-story-track-number')[0].innerHTML = `Podcast ${latestStoryTitle.slice(0, colonePosition)}`;
    } else {
      $('.latest-story-track-number')[0].innerHTML = "Article";
    }

    $('.latest-story-track-title')[0].innerHTML = `${latestStoryTitle.slice(colonePosition + 1, latestStoryTitle.length)}`;

    let singleStoryNumbers = $('.single-story-podcast-track-number');
    singleStoryNumbers.each(function () {
      // console.log($(this));
      let singleStoryNumber = $(this)[0].innerHTML;
      let colonePosition = singleStoryNumber.indexOf(':');
      $(this)[0].innerHTML = `Podcast ${singleStoryNumber.slice(0, colonePosition)}`;
    })
    // console.log(singleStoryTitle);

    let singleStoryTitles = $('.single-story-track-title');
    singleStoryTitles.each(function () {
      let singleStoryTitle = $(this)[0].innerHTML;
      let colonePosition = singleStoryTitle.indexOf(':');
      $(this)[0].innerHTML = `${singleStoryTitle.slice(colonePosition + 1, singleStoryTitle.length)}`;
    })
  })();

  (function successStoriesSlick () {
    if ($(window).width() < 1025) {
      $('.other-success-stories').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 2,
        arrows: false,
      })
    }

    $('.other-success-stories').slick({
      centerMode: true,
      centerPadding: '4%',
      slidesToShow: 3,
      arrows: true,
    })
   
  })();

})