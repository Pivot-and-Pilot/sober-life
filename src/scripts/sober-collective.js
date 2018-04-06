jQuery(document).ready(function($) {
  // VARIABLES
  let ajaxLock = false;

  // (function ajax_get_initial_posts() {
  //   $.ajax({
  //     type: 'get',
  //     url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
  //     data: '&action=ajax_get_initial_posts',
  //     dataType: 'json',
  //     success: function(response) {
  //       $(response[0]).appendTo('.sobercollective__posts-wrapper');
  //       // $(response[post_meta][paged]).html('')
  //       console.log(response.post_meta);
  //       $('#maxpage').text(response.post_meta.total_pages);
  //     }
  //   })
  // })();

  // Get next posts (if !currPage == 1 and offset < 11)
  function ajax_get_next_posts(currPage, postId) {
    ajaxLock = true;
    // let offset = 21;
    let offset = $('.sobercollective__post').length + (11 * (currPage - 1) - 1);
    console.log(offset);
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data:
        '&category=' +
        postId +
        '&curr_page=' +
        currPage +
        '&post_offset=' +
        offset +
        '&action=ajax_get_next_posts',
      dataType: 'json',
      success: function(response) {
        //
        $('.sobercollective__posts-wrapper').empty();
        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        console.log('success');
        console.log(response);
        // $('html, body').scrollTop(0);
        // smooth scroll to top of page????        
        ajaxLock = false;
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  function ajax_get_prev_posts(currPage, postId) {
    ajaxLock = true;
    let currentPageTotal = $('.sobercollective__post').length;
    let offset = ($('.sobercollective__post').length + (11 * (currPage - 2) - 1));        
    console.log(offset);
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data:
        '&category=' +
        postId +
        '&curr_page=' +
        currPage +
        '&post_offset=' +
        offset +
        '&action=ajax_get_next_posts',
      dataType: 'json',
      success: function(response) {
        //
        $('.sobercollective__posts-wrapper').empty();
        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        console.log('success');
        console.log(response);
        // $('html, body').scrollTop(0);
        // smooth scroll to top of page????        
        ajaxLock = false;
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // On Next Click
  $('#next').click(function() {
    let current = Number($('#curpage').text());
    let max = Number($('#maxpage').text());
    let postId;
    $('.sobercollective__cats-mobile > select').children().each(function () {
      let that = $(this);
      if ($(that).hasClass('current')) {
        console.log(that);
      }
    });
    console.log('this is a post id', postId);
    console.log(max);
    if (current < max) {
      let newPageNum = current + 1;
      $('#curpage').text(newPageNum);
      // ajax_get_next_posts(current, tag or cat id);
      ajax_get_next_posts(current, 13);
    }
  });

  // On Prev Click
  $('#prev').click(function() {
    let current = Number($('#curpage').text());
    if (current > 1) {
      let newPageNum = current - 1;
      $('#curpage').text(newPageNum);
      // ajax_get_prev_posts(current, tag or cat id);
      ajax_get_prev_posts(newPageNum, 13);      
    }
  });

  function ajax_filter_category(catID) {
    $('#sobercollective__pagination').empty();
    ajaxLock = true;
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: '&category=' + catID + '&action=ajax_filter_category',
      dataType: 'json',
      success: function(response) {
        $('.sobercollective__posts-wrapper').empty();
        // console.log(response.post_meta);
        console.log(response);
        // $('.')
        $('#maxpage').text(response.post_meta.total_pages);

        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        // $('#sobercollective__pagination').empty(function() {
        // });
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
        $('#sobercollective__pagination').empty();
        console.log(response);
        $(response[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        ajaxLock = false;
        $('#maxpage').text(response.post_meta.total_pages);
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // // Pagination
  // let $thing = ($('#sobercollective-page .sobercollective__posts-wrapper')[0]);
  // console.log($thing);
  // $('#sobercollective_pagination a').each(function() {
  //     $(this).click(function(e) {
  //     e.preventDefault();
  //     // console.log($(this).text());
  //     console.log('HI');
  //   });
  // });

  function pagination() {
    // Get current page (always start at 1?) and set to var currPage
    // Get currPage, maxPage
    // currPage >> add class name to style
    // If currPage == 1
    // show currPage and next 2 + ... + maxPage + ->
    // Else if currPage == maxPage
    // show <- + 1 + ... + currPage and prev 2
    // Else if currPage > 3 && currPage < (maxPage - 2)
    // show <- + 1 + ... + 1 prev + currPage + 1 next + ... + maxPage + ->
    // If clicked value > currPage
    // find offset (clicked value - currPage) * 11
    // Load next 11 posts (ajax_load_next_posts)
    // currPage = clicked value
    // If clicked value < currPage
    // find offset (currPage - clicked value) * 11
    // Load prev 11 posts (ajax_load_prev_posts)
    // currPage = clicked value
  }

  // Filter function
  $('.sobercollective__cats-mobile > select').on('change', function() {
    let catID = $(this).val();
    $(this).children().each(function() {
      if ($(this).val() == catID) {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
      }
    });
    console.log('catId is', catID);
    ajax_filter_category(catID);
  });

  $('.sobercollective__tags-mobile-dropdown > select').on('change', function() {
    let tagID = $(this).val();
    console.log('tagId is', tagID);
    ajax_filter_tag(tagID);
  });

  // JPlayer
  // display play(add?) button on every podcast category post
  (function podcastPlayButton() {
    $('.sobercollective__post').each(function() {
      if (
        $(this)
          .find('.sobercollective__post--cat-name')
          .text() == 'Podcast'
      ) {
        // ********** CHANGE IMG SRC  ***********
        $(this).prepend(
          `<a class="sobercollective__play-btn" href="#"><img src="http://localhost:8888/soberlife/wp-content/themes/sober-life/img/src/play-button.svg"/></a>`
        );
      }
    });
  })();
});
