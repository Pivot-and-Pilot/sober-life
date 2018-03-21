jQuery(document).ready(function($){

  (function reformatSuccessStoriesName () {
    let latestStoryTitle = $('.latest-story-track-number')[0].innerHTML;
    let latestStoryDate = $('.latest-story-track-date')[0].innerHTML;
    let colonePosition = latestStoryTitle.indexOf(':')
    let spacePosition = latestStoryDate.indexOf(' ')
    if ( $('.play-button-wapper').length !== 0 ) {
      $('.latest-story-track-number')[0].innerHTML = `Podcast ${latestStoryTitle.slice(0, colonePosition)}`;
      console.log('true');
    } else {
      $('.latest-story-track-number')[0].innerHTML = "Article";
      console.log('fasle');
    }


    $('.latest-story-track-title')[0].innerHTML = `${latestStoryTitle.slice(colonePosition + 1)}`;

    $('.latest-story-track-date')[0].innerHTML = `${latestStoryDate.slice(0, spacePosition)}`;

  })();

})