jQuery(document).ready(function($) {
  
  // Search function
  $('#sobercollective__search-input').on('keyup', function() {
    console.log($(this).val());
  });

  // Filter function
  $('.sobercollective__cats-mobile > select').on('change', function() {
    console.log($(this).val());
    // $.ajax({
    //   url: '../wp-json/posts/v1/posts',
    //   success: get_posts,
    //   error: function(){}
    // })
  });
  $('.sobercollective__tags-mobile > select').on('change', function() {
    console.log($(this).val());
  });

  // Pagination

  // JPlayer
  // display play(add?) button on every podcast category post
  (function podcastPlayButton() {
    $('.sobercollective__post').each(function() {
      if ($(this).find('.sobercollective__post--cat-name').text() == 'Podcast') {
        // ********** CHANGE IMG SRC  ***********
        $(this).prepend(`<a class="sobercollective__play-btn" href="#"><img src="http://localhost:8888/soberlife/wp-content/themes/sober-life/img/src/play-button.svg"/></a>`);
      }
    })
  })();
});