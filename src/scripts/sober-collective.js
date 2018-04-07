jQuery(document).ready(function($) {
  // VARIABLES
  let ajaxLock = false;
  // const rootUrl = window.location.href;
  $('.sobercollective__cats-mobile select option')
    .eq(0)
    .addClass('current');

  // Get next posts (if !currPage == 1 and offset < 11)
  // function ajax_get_next_posts(currPage, catID, tagID) {
  //   ajaxLock = true;
  //   // let offset = 21;
  //   let offset = $('.sobercollective__post').length + (11 * (currPage - 1) - 1);
  //   console.log(offset);
  //   $.ajax({
  //     type: 'get',
  //     url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
  //     data:
  //       '&category=' +
  //       postId +
  //       '&curr_page=' +
  //       currPage +
  //       '&post_offset=' +
  //       offset +
  //       '&action=ajax_get_next_posts',
  //     dataType: 'json',
  //     success: function(response) {
  //       //
  //       $('.sobercollective__posts-wrapper').empty();
  //       $(response[0])
  //         .hide()
  //         .appendTo('.sobercollective__posts-wrapper')
  //         .fadeIn(500);
  //       console.log('success');
  //       console.log(response);
  //       // $('html, body').scrollTop(0);
  //       // smooth scroll to top of page????
  //       ajaxLock = false;
  //     },
  //     error: function() {
  //       ajaxLock = false;
  //       console.log('error');
  //     }
  //   });
  // }

  // function ajax_get_prev_posts( currPage, catID, tagID) {
  //   ajaxLock = true;
  //   let currentPageTotal = $('.sobercollective__post').length;
  //   let offset = $('.sobercollective__post').length + (11 * (currPage - 2) - 1);
  //   console.log(offset);
  //   $.ajax({
  //     type: 'get',
  //     url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
  //     data:
  //       '&category=' +
  //       postId +
  //       '&curr_page=' +
  //       currPage +
  //       '&post_offset=' +
  //       offset +
  //       '&action=ajax_get_next_posts',
  //     dataType: 'json',
  //     success: function(response) {
  //       //
  //       $('.sobercollective__posts-wrapper').empty();
  //       $(response[0])
  //         .hide()
  //         .appendTo('.sobercollective__posts-wrapper')
  //         .fadeIn(500);
  //       console.log('success');
  //       console.log(response);
  //       // $('html, body').scrollTop(0);
  //       // smooth scroll to top of page????
  //       ajaxLock = false;
  //     },
  //     error: function() {
  //       ajaxLock = false;
  //       console.log('error');
  //     }
  //   });
  // }

  function ajax_get_posts(direction, currPage, catID, tagID) {
    ajaxLock = true;
    let offset;
    let currentPageTotal = $('.sobercollective__post').length;
    if (direction == 'next') {
      offset = currentPageTotal + (11 * (currPage - 1) - 1);
    } else if (direction == 'prev') {
      offset = currentPageTotal + 11 * (currPage - 2) - 1;
    }
    console.log(direction + ' is ' + offset);

    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: `&category=${catID}&tag=${tagID}&curr_page=${currPage}&offset=${offset}&action=ajax_get_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        $('.sobercollective__posts-wrapper').empty();
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        console.log('success');
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // FILTER HANDLER
  function ajax_filter_posts(catID, tagID) {
    catID = catID ? catID : 13;
    tagID = tagID ? tagID : 14;
    console.log(`this is the catid ${catID} and this is the tagID ${tagID}`);

    ajaxLock = true;
    $.ajax({
      type: 'get',
      url: 'http://localhost:8888/soberlife/wp-admin/admin-ajax.php',
      data: `&category=${catID}&tag=${tagID}&action=ajax_filter_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        console.log('success', res);
        // empty the current posts / clear last search results
        $('.sobercollective__posts-wrapper').empty();
        // update max number of pages
        $('#maxpage').text(res.post_meta.total_pages);
        // show filtered post results
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        // AJAX pushstate??
        // window.history.pushState('object','Category ' + catID, rootUrl + 'category-' + catID)
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }
  // ajax_filter_posts('', '');

  // *************************************** //
  //  Event Handlers
  // *************************************** //

  (function pagination() {
    // On Next Click
    $('#next').click(function() {
      let currentPage = Number($('#curpage').text());
      let currCat = $('.sobercollective__cats-mobile select option.current').val();
      let currTag = $('.sobercollective__tags-mobile div select option.current').val();
      let max = Number($('#maxpage').text());
      $('.sobercollective__cats-mobile > select')
        .children()
        .each(function() {
          let that = $(this);
          if ($(that).hasClass('current')) {
            console.log(that);
          }
        });
      if (currentPage < max) {
        let newPageNum = currentPage + 1;
        $('#curpage').text(newPageNum);
        // ajax_get_next_posts(currentPage, tag or cat id);
        console.log(`currPage: ${currentPage}, currCat: ${currCat}, currTag: ${currTag}`);
        ajax_get_posts('next', currentPage, currCat, currTag);
      }
    });

    // On Prev Click
    $('#prev').click(function() {
      let currentPage = Number($('#curpage').text());
      let currCat = $('.sobercollective__cats-mobile select option.current').val();
      let currTag = $('.sobercollective__tags-mobile div select option.current').val();
      if (currentPage > 1) {
        let newPageNum = currentPage - 1;
        $('#curpage').text(newPageNum);
        // ajax_get_prev_posts(current, tag or cat id);
        ajax_get_posts('prev', newPageNum, currCat, currTag);
      }
    });
  })();

  // ***************************************** START CATEGORY / TAG FILTER HANDLERS ****************************************** //
  (function currentFilters() {
    let currCat = $('.sobercollective__cats-mobile select option.current').val();
    let currTag = $('.sobercollective__tags-mobile div select option.current').val();
    console.log(`currCat is ${currCat} and currTag is ${currTag}`);

    $('.sobercollective__cats-mobile > select').on('change', function() {
      let newCat = $(this).val();
      $(this)
        .children()
        .each(function() {
          $(this).removeClass('current');
          if ($(this).val() == newCat) {
            $(this).addClass('current');
          }
        });
      currCat = newCat;
      console.log(`NEW currCat is ${currCat} and currTag is ${currTag}`);
      ajax_filter_posts(currCat, currTag);
    });

    $('.sobercollective__tags-mobile-dropdown > select').on('change', function() {
      let newTag = $(this).val();
      $(this)
        .children()
        .each(function() {
          $(this).removeClass('current');
          if ($(this).val() == newTag) {
            $(this).addClass('current');
          }
        });
      currTag = newTag;
      console.log(`currCat is ${currCat} and NEW currTag is ${currTag}`);
      ajax_filter_posts(currCat, currTag);
    });
  })();
  // ***************************************** END CATEGORY / TAG FILTER HANDLERS ****************************************** //

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
