jQuery(document).ready(function($) {
  // Get window size
  let windowSize = $(window).width();
  // Prevent multiple clicks
  let ajaxLock = false;
  // let isSearch = false;  
  const ajaxUrl = 'http://localhost:3000/soberlife/wp-admin/admin-ajax.php';
  // const rootUrl = window.location.href;

  // Set Initial Settings (classnames/values)
  function setInitialSettings() {
    if (windowSize > 1025) {
      // Add value attribute to each category li on DESKTOP
      $('.sobercollective__cats-desktop li').each(function() {
        let catId = $(this).attr('class').match(/\d+/)[0];
        $(this).attr('value', catId);
      });
      $('.sobercollective__cats-desktop li').each(function() {
        $(this).removeClass('current');
      });
      // Set first category li to current on DESKTOP
      $('.sobercollective__cats-desktop li').eq(0).addClass('current');
      updateActiveCatIcon(0);
      $('.sobercollective__tags-desktop li').each(function() {
        $(this).removeClass('current');
      })
      // Set first tag li to current on DESKTOP
      $('.sobercollective__tags-desktop li').eq(0).addClass('current');
    } else {
      // Set first category option to current on MOBILE
      $('.sobercollective__cats-mobile select option').each(function() {
        $(this).removeClass('current');
      })
      $('.sobercollective__tags-mobile select option').each(function() {
        $(this).removeClass('current');
      })
      $('.sobercollective__cats-mobile select option').eq(0).addClass('current').attr('selected', 'selected');
      $('.sobercollective__tags-mobile select option').eq(0).addClass('current').attr('selected', 'selected');
    }
  }
  setInitialSettings();

  function updatePagination(currPage) {
    let maxPage = $('#maxpage').text();
    currPage = currPage ? currPage : 1;
    let pagesContainer = $('#sobercollective__pages');
    $(pagesContainer).empty();
    if (maxPage > 4) {
      // Formatting 
      if (currPage <= 3) {
        $(pagesContainer).append(`
          <button value=1>1</button><button value=2>2</button><button value=3>3</button><span>...</span><button value=${maxPage}>${maxPage}</button>
        `);
      } else if ((maxPage - currPage) <= 3) {
        $(pagesContainer).append(`
          <button value=1>1</button><span>...</span><button value=${maxPage-2}>${maxPage-2}</button><button value=${maxPage-1}>${maxPage-1}</button><button value=${maxPage}>${maxPage}</button>
        `);
      } else {
        $(pagesContainer).append(`
        <button value=1>1</button><span>...</span><button value=${currPage-1}>${currPage-1}</button><button value=${currPage}>${currPage}</button><span>...</span><button value=${maxPage}>${maxPage}</button>
      `);
      }
    } else {
      for (let i = 1; i <= maxPage; i++) {
        if (i == 1) {
          $(pagesContainer).append(`<button class="current" value=${i}>${i}</button>`)
        } else {
          $(pagesContainer).append(`<button value=${i}>${i}</button>`);
        }
      }
    } 
    // Set Current Page on Pages Buttons
    $(pagesContainer).children().each(function() {
      if ($(this).val() == currPage) {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
      }
    });
    // Toggle active PREV NEXT buttons
    if (currPage == 1) {
      $('#prev img').removeClass('active');
    } else {
      $('#prev img').addClass('active');
    }
    if (currPage == maxPage) {
      $('#next img').removeClass('active');
    } else {
      $('#next img').addClass('active');
    }
  }
  updatePagination();

  // Connect desktop nav bar li.current to corresponding icon
  function updateActiveCatIcon(pos) {
    // let pos = $('.sobercollective__cats-desktop li.current').index();
    console.log(pos);
    $('.sobercollective__cats-desktop-icons').children().css('opacity', 0.4);    
    $(`.sobercollective__cats-desktop-icons img:eq(${pos})`).css('opacity', 1);    
  }

  // Desktop nav bar hover over effect
  (function hoverCatIcon() {
    $('.sobercollective__cats-desktop li').hover(function() {
      if (!$(this).hasClass('current')) {
        let position = $(this).index();
        $('.sobercollective__cats-desktop-icons img').eq(position).css('opacity', 1);
      }
    }, function() {
      if (!$(this).hasClass('current')) {      
        let position = $(this).index();    
        $('.sobercollective__cats-desktop-icons img').eq(position).css('opacity', 0.4);    
      }
    }); 
  })();

  // ************************************************** AJAX FUNCTIONS **************************************************** //
  // ********************************************** //
  //  AJAX_GET_INITIAL_POSTS for initial pages
  // ********************************************** // 
  (function ajax_get_initial_posts() {
    ajaxLock = true;
    let postsPerPage;
    if (windowSize > 1025) {
      postsPerPage = 12;
    } else {
      postsPerPage = 11;
    }
    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&posts_per_page=${postsPerPage}&action=ajax_get_initial_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        console.log(res);
        $('.sobercollective__posts-wrapper').empty();
        $(res[0])
          // .hide()
          .appendTo('.sobercollective__posts-wrapper')
          // .fadeIn(100);
        $('#maxpage').text(res[1]);
        updatePagination();        
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  })();

  // ******************************************* //
  //  AJAX_GET_POSTS for next, prev pages
  // ******************************************* // 
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
      // if (maxPage - currPage == 1) {
        offset = (postsPerPage * (currPage - 1));        
        console.log(`Offset is ${offset} = postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);
      // } 
      // else {
      //   offset = currentPageTotal + postsPerPage * (currPage - 2);
      //   console.log(`Offset is ${offset} = currentPageTotal ${currentPageTotal} + postsPerPage ${postsPerPage} * currPage ${currPage} - 2`);
      // }
    }
    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&curr_page=${currPage}&offset=${offset}&posts_per_page=${postsPerPage}&action=ajax_get_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        $('.sobercollective__posts-wrapper').empty();
        $('html, body').animate({scrollTop: 0}, 'slow');
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
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
    } else {
      postsPerPage = 11;
    }
    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&posts_per_page=${postsPerPage}&action=ajax_filter_posts`,
      dataType: 'json',
      success: function(res) {
        ajaxLock = false;
        // Empty the current posts / clear last search results
        $('.sobercollective__posts-wrapper').empty();
        // Update max number of pages
        $('#maxpage').text(res.post_meta.total_pages);
        $('#sobercollective__query').hide();        
        $('#sobercollective__pagination').show();
        // Hide/Show pagination arrows based on number of pages
        if (res.post_meta.total_pages <= 1) {
          $('#prev, #next').hide();
          if (res.post_meta.total_pages == 0) {
            $('.sobercollective__posts-wrapper').append(`<div id="sobercollective__noresults">Sorry, No Results Found</div>`);
          }
        } else {
          $('#prev, #next').show();          
        }
        // Show filtered post results
        $(res[0])
          .hide()
          .appendTo('.sobercollective__posts-wrapper')
          .fadeIn(500);
        // updatePagination();
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

  // ***************************************************** //
  //  AJAX_GET_SEARCH_RESULTS for initial search results
  // ***************************************************** // 
  function ajax_get_search_results(query) {
    let $input = $('#search-input');
    let currPage = $('#curpage').text();
    ajaxLock = true;
    let postsPerPage;
    // , offset;
    // let currentPageTotal = $('.sobercollective__post').length;
    // let direction = 'next';
    
    if (windowSize > 1025) {
      postsPerPage = 12;
    } else {
      postsPerPage = 11;
    }

    // if (direction == 'next') {
    //   offset = currentPageTotal + (postsPerPage * (currPage - 1));
    //   console.log(`Offset is ${offset} = currentPageTotal ${currentPageTotal} + postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);      
    // } else if (direction == 'prev') {
    //     offset = (postsPerPage * (currPage - 1));        
    //     console.log(`Offset is ${offset} = postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);
    // }

    $.ajax({
      type: 'get',
      url: ajaxUrl,
      data: `&posts_per_page=${postsPerPage}&query=${query}&action=ajax_get_search_results`,
      dataType: 'json',
      beforeSend: function() {
        $input.prop('disabled', true);   
      },
      success: function(res) {
        $input.prop('disabled', false);
        ajaxLock = false;
        $('.sobercollective__posts-wrapper').empty();
        // $('#maxpage').text(`${Math.ceil(res.post_meta.total_posts / postsPerPage)}`);
        $('#sobercollective__pagination').hide();
        $('#search-input').val('');
        setInitialSettings();
        // if (res.post_meta.total_posts <= 1) {
        //   $('#prev, #next').hide();
          if (res.post_meta.total_posts == 0) {
            $('.sobercollective__posts-wrapper').append(`<div id="sobercollective__noresults">Sorry, No Results Found</div>`);
          }
        // } else {
        //   $('#prev, #next').show();          
        // }
        $(res[0]).appendTo('.sobercollective__posts-wrapper');
        $('#sobercollective__query').empty().show().append(`<div>Search results for: <strong>${query}</strong></div>`);
        // $('#sobercollective__query').append(`<div>Search results for: <strong>${query}</strong></div>`);
        $('#sobercollective__query').val(`${query}`)
        // updatePagination();      
      },
      error: function() {
        ajaxLock = false;
        console.log('error');
      }
    });
  }

  // ****************************************************************** //
  //  AJAX_GET_SEARCH_RESULT_PAGES for next, prev search result pages
  // ****************************************************************** // 
  // function ajax_get_search_result_pages(direction, currPage, maxPage) {
  //   ajaxLock = true;
  //   let offset, postsPerPage;
  //   let currentPageTotal = $('.sobercollective__post').length;
  //   let query = $('#sobercollective__query').val();

  //   if (windowSize > 1025) {
  //     postsPerPage = 12;
  //     // console.log(postsPerPage);
  //   } else {
  //     postsPerPage = 11;
  //     // console.log(postsPerPage);
  //   }
      
  //   if (direction == 'next') {
  //     offset = currentPageTotal + (postsPerPage * (currPage - 1));
  //     console.log(`Offset is ${offset} = currentPageTotal ${currentPageTotal} + postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);      
  //   } else if (direction == 'prev') {
  //     offset = (postsPerPage * (currPage - 1));        
  //     console.log(`Offset is ${offset} = postsPerPage ${postsPerPage} * currPage ${currPage} - 1`);
  //   }

  //   $.ajax({
  //     type: 'get',
  //     url: ajaxUrl,
  //     data: `&query=${query}&curr_page=${currPage}&offset=${offset}&posts_per_page=${postsPerPage}&action=ajax_get_search_result_pages`,
  //     dataType: 'json',
  //     success: function(res) {
  //       ajaxLock = false;
  //     },
  //     error: function() {
  //       ajaxLock = false;
  //       console.log('error');
  //     }
  //   })
  // }

  // *************************************************** EVENT HANDLERS ****************************************************** //
  // ********************** //
  //         SEARCH
  // ********************** // 
  (function search() {
    $('#search-form').on('keypress', function(e) {
      let $input = $(this).find('input[name="s"]');
      let query = $input.val();
  
      if (e.which === 13) {
        // isSearch = true;
        console.log('ENTERED');
        ajax_get_search_results(query);
      }    
    });
  })();

  // ************** //
  //  PAGINATION
  // ************** // 
  (function pagination() {
    // On Next Click
    $('#next').click(function() {
      let currentPage = Number($('#curpage').text());
      let max = Number($('#maxpage').text());

      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }

      // Don't allow next click action when on first page
      if (currentPage < max) {
        let newPageNum = currentPage + 1;
        // Update current page
        $('#curpage').text(newPageNum);
        // if (!isSearch) {
          ajax_get_posts('next', currentPage, currCat, currTag);
        // } else {
        //   ajax_get_search_result_pages('next', currentPage)          
        // }
        updatePagination(newPageNum);                
      }
    });

    // On Prev Click
    $('#prev').click(function() {
      let currentPage = Number($('#curpage').text());
      let max = Number($('#maxpage').text());  

      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {     
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }

      // Don't allow prev click action when on first page
      if (currentPage > 1) {
        let newPageNum = currentPage - 1;
        // Update current page
        $('#curpage').text(newPageNum);
        // if (!isSearch) {        
          ajax_get_posts('prev', newPageNum, currCat, currTag, max);
        // } else {
        //   ajax_get_search_result_pages('prev', newPageNum, max);          
        // }
        updatePagination(newPageNum);        
      }
    });

    // On Page Number Button Click ******************
    $(document).on('click', '#sobercollective__pages button', function() {
      let pageNum = Number($(this).val());
      let currentPage = Number($('#curpage').text());  
      let maxPage = Number($('#maxpage').text());      

      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $('.sobercollective__cats-desktop li.current').val();
        currTag = $('.sobercollective__tags-desktop li.current').val();
      } else {     
        currCat = $('.sobercollective__cats-mobile select option.current').val();
        currTag = $('.sobercollective__tags-mobile div select option.current').val();
      }

      // Update current page
      $('#curpage').text(pageNum);
      let isNext = ((pageNum - currentPage) >= 0 ); 
      console.log(isNext);
      // if (!isSearch) {    
        if (isNext) {
          ajax_get_posts('next', pageNum - 1, currCat, currTag);
        } else {
          ajax_get_posts('prev', pageNum, currCat, currTag, maxPage);
        }
      // } else {
      //   if (isNext) {
      //     ajax_get_search_result_pages('next', pageNum - 1);
      //   } else {
      //     ajax_get_search_result_pages('prev', pageNum, maxPage);
      //   }
      // }
      updatePagination(pageNum)
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
        // isSearch = false;
        $('#curpage').text('1');
        let newCat = $(this).parent().val();
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass('current');
        currCat = newCat;
        ajax_filter_posts(currCat, currTag);
        updateActiveCatIcon($(this).parent().index());
      });

      // On Tag Click
      $('.sobercollective__tags-desktop li a').click(function(e) {
        e.preventDefault();        
        isSearch = false;        
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
        isSearch = false;        
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
        isSearch = false;        
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
