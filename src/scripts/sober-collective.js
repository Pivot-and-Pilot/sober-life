jQuery(document).ready(function($) {
  let ajaxLock = false;

  (function ajax_get_initial_posts() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: '&action=ajax_get_initial_posts',
      dataType: 'json',
      success: function(response) {
        $(response[0]).appendTo('.sobercollective__posts-wrapper');
        // $(response[post_meta][paged]).html('')
      }
    })
  })();

  function ajax_filter_category(catID) {
    ajaxLock = true;
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: '&category=' + catID + '&action=ajax_filter_category',
      dataType: 'json',
      success: function(response) {
        $('.sobercollective__posts-wrapper').empty();
        console.log(response.post_meta);    
        // $('.')    
        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(1000);
        ajaxLock = false;
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });

  }

  function ajax_filter_tag(tagID) {
    ajaxLock = true;
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: '&tag=' + tagID + '&action=ajax_filter_tag',
      dataType: 'json',
      success: function(response) {
        $('.sobercollective__posts-wrapper').empty();
        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(1000);
        ajaxLock = false;
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // Pagination
  // $('#sobercollective-page .pagination .nav-links a').click(function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     url: $(this).prop('href'), 
  //     success: function(response) {
  //       let page = $(response).find('.pagination').html();
  //       console.log(page);
  //       $('#sobercollective-page .pagination').html(page);
  //     }
  //   });
  // });

  // Filter function
  $('.sobercollective__cats-mobile > select').on('change', function() {
    let catID = $(this).val();
    console.log(catID);
    ajax_filter_category(catID);
  });

  $('.sobercollective__tags-mobile-dropdown > select').on('change', function() {
    let tagID = $(this).val();
    console.log(tagID);    
    ajax_filter_tag(tagID);
  });

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