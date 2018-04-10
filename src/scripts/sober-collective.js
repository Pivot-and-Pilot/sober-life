jQuery(document).ready(function($) {
  // ************************************************** AJAX FUNCTIONS **************************************************** //
  let windowSize = $(window).width();
  // Prevent multiple clicks
  let ajaxLock = false;
  const ajaxUrl = 'http://localhost:3000/soberlife/wp-admin/admin-ajax.php';
  // const rootUrl = window.location.href;

  // Add Initial Settings (classnames/values)
  if (windowSize > 1025) {
    // Add value attribute to each category li on DESKTOP
    $('.sobercollective__cats-desktop li').each(function() {
      let catId = $(this).attr('class').match(/\d+/)[0];
      $(this).attr('value', catId);
    });
    // Set first category li to current on DESKTOP
    $('.sobercollective__cats-desktop li').eq(0).addClass('current');
    // Set first tag li to current on DESKTOP
    $('.sobercollective__tags-desktop li').eq(0).addClass('current');
  } else {
    // Set first category option to current on MOBILE
    $('.sobercollective__cats-mobile select option').eq(0).addClass('current');
  }

  function updatePagination() {
    let maxPages = $('#maxpage').text();
    $('#sobercollective__pages').empty();
    for (let i = 1; i <= maxPages; i++) {
      if (i == 1) {
        $('#sobercollective__pages').append(`<button class="current" value=${i}>${i}</button>`)
      } else {
        $('#sobercollective__pages').append(`<button value=${i}>${i}</button>`);
      }
    }
  }
  updatePagination();

  // ********************************************** //
  //  AJAX_GET_POSTS for initial, next, prev pages
  // ********************************************** // 
  function ajax_get_posts(direction, currPage, catID, tagID, maxPage) {
    ajaxLock = true;
    let offset, postsPerPage;
    let currentPageTotal = $('.sobercollective__post').length;

    if (windowSize > 1025) {
      postsPerPage = 12;
      // console.log(postsPerPage);
    } else {
      postsPerPage = 11;
      // console.log(postsPerPage);
    }
      
    if (direction == 'next') {
      offset = currentPageTotal + (postsPerPage * (currPage - 1));
      console.log(`Offset is ${offset} = currentPageTotal ${currentPageTotal} + postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);      
    } else if (direction == 'prev') {
      if (maxPage - currPage == 1) {
        offset = (postsPerPage * (currPage - 1));        
        console.log(`Offset is ${offset} = postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);
      } else {
        offset = currentPageTotal + postsPerPage * (currPage - 2);
        console.log(`Offset is ${offset} = currentPageTotal ${currentPageTotal} + postsPerPage ${postsPerPage} * currPage ${currPage} - 2`);
      }
    }
    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&curr_page=${currPage}&offset=${offset}&posts_per_page=${postsPerPage}&action=ajax_get_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        $('.sobercollective__posts-wrapper').empty();
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        $('html, body').animate({scrollTop: 0}, 'slow');
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // ************************************************* //
  //  AJAX_FILTER_POSTS for filtering by category/tag
  // ************************************************* // 
  function ajax_filter_posts(catID, tagID) {
    catID = catID ? catID : 13;
    tagID = tagID ? tagID : 14;
    ajaxLock = true;
    let postsPerPage;
    if (windowSize > 1025) {
      postsPerPage = 12;
      console.log(postsPerPage);
    } else {
      postsPerPage = 11;
      console.log(postsPerPage);
    }
    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&posts_per_page=${postsPerPage}&action=ajax_filter_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        // empty the current posts / clear last search results
        $('.sobercollective__posts-wrapper').empty();
        // update max number of pages
        $('#maxpage').text(res.post_meta.total_pages);
        // show filtered post results
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        updatePagination();
        // AJAX pushstate??
        // window.history.pushState('object','Category ' + catID, rootUrl + 'category-' + catID)
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // *************************************************** EVENT HANDLERS ****************************************************** //

  // ************** //
  //  PAGINATION
  // ************** // 
  (function pagination() {
    // On Next Click
    $('#next').click(function() {
      let currentPage = Number($('#curpage').text());
      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }
      let max = Number($('#maxpage').text());
      $('.sobercollective__cats-mobile > select')
        .children()
        .each(function() {
          let that = $(this);
          if ($(that).hasClass('current')) {
          }
        });
      if (currentPage < max) {
        let newPageNum = currentPage + 1;
        $('#curpage').text(newPageNum);
        $('#sobercollective__pages button').each(function() {
          if ($(this).val() == newPageNum) {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
          }
        });
        ajax_get_posts('next', currentPage, currCat, currTag);
      }
    });

    // On Prev Click
    $('#prev').click(function() {
      let currentPage = Number($('#curpage').text());
      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {     
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }
      let max = Number($('#maxpage').text());      
      if (currentPage > 1) {
        let newPageNum = currentPage - 1;
        $('#curpage').text(newPageNum);
        $('#sobercollective__pages button').each(function() {
          if ($(this).val() == newPageNum) {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
          }
        });
        ajax_get_posts('prev', newPageNum, currCat, currTag, max);
      }
    });

    // On Page Number Button Click ******************
    $(document).on('click', '#sobercollective__pages button', function() {
      let pageNum = Number($(this).val());
      let currentPage = Number($('#curpage').text());            
      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {     
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }
      $(this).siblings().removeClass('current');
      $(this).addClass('current');
      $('#curpage').text(pageNum);
      let maxPage = Number($('#maxpage').text());
      let isNext = ((pageNum - currentPage) >= 0 ); 
      console.log(isNext);
      if (isNext) {
        ajax_get_posts('next', pageNum - 1, currCat, currTag);
      } else {
        ajax_get_posts('prev', pageNum, currCat, currTag, maxPage);
      }
      
    });

  })();


  // ********************** //
  //  CATEGORY/TAG FILTERS
  // ********************** // 
  (function currentFilters() {
    if (windowSize > 1025) {
      let currCat = $('.sobercollective__cats-desktop li.current').val();
      let currTag = $('.sobercollective__tags-desktop li.current').val();
      // On Category Click
      $('.sobercollective__cats-desktop li a').click(function(e) {
        e.preventDefault();
        $('#curpage').text('1');
        let newCat = $(this).parent().val();
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass('current');
        currCat = newCat;
        ajax_filter_posts(currCat, currTag);
      });
      // On Tag Click
      $('.sobercollective__tags-desktop li a').click(function(e) {
        e.preventDefault();        
        $('#curpage').text('1');
        let newTag = $(this).parent().val();
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass('current');
        currTag = newTag;
        ajax_filter_posts(currCat, currTag);
      });
    } else {
      let currCat = $('.sobercollective__cats-mobile select option.current').val();
      let currTag = $('.sobercollective__tags-mobile div select option.current').val();
      // On Category Change
      $('.sobercollective__cats-mobile > select').on('change', function() {
        $('#curpage').text('1');      
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
        ajax_filter_posts(currCat, currTag);
      });
      // On Tag Change
      $('.sobercollective__tags-mobile-dropdown > select').on('change', function() {
        $('#curpage').text('1');            
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
        ajax_filter_posts(currCat, currTag);
      });
    }
  })();

  // ************************************************** JPLAYER ***************************************************** //
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
