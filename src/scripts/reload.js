function AAPL_reload_code() {
  //This file is generated from the admin panel - dont edit here!
  // ** HEADER **
  // Open Form
  function toggleForm() {
    document.getElementById("soberlife-form-wrapper").style.left = "0";
    let isOpen = document
      .getElementById("header__hamburger")
      .classList.contains("open");
    if (isOpen) {
      document.getElementById("header__menu-overlay").style.width = "0%";
      document.getElementById("header__hamburger").classList.remove("open");
      document.getElementById("header__menu-overlay-content").style.right =
        "-1000px";
      document.getElementById("header__menu-overlay-content").style.opacity =
        "0";
      document.documentElement.style.overflow = "";
      document
        .getElementById("header__menu-nav")
        .childNodes[1].firstChild.getElementsByClassName(
          "sub-menu"
        )[0].style.display =
        "none";
    }
  }

  // Open/Close Nav Menu
  function toggleMenu() {
    let isOpen = document
      .getElementById("header__hamburger")
      .classList.contains("open");
    if (isOpen) {
      document.getElementById("header__menu-overlay").style.width = "0%";
      document.getElementById("header__hamburger").classList.remove("open");
      document.getElementById("header__menu-overlay-content").style.right =
        "-400px";
      document.getElementById("header__menu-overlay-content").style.opacity =
        "0";
      document.documentElement.style.overflow = "";
      document
        .getElementById("header__menu-nav")
        .childNodes[1].firstChild.getElementsByClassName(
          "sub-menu"
        )[0].style.display =
        "none";
      // document.documentElement.style.position = 'initial';
    } else {
      document.getElementById("header__menu-overlay").style.width = "100%";
      document.getElementById("header__hamburger").classList.add("open");
      document.getElementById("header__menu-overlay-content").style.right = "0";
      document.getElementById("header__menu-overlay-content").style.opacity =
        "1";
      document.documentElement.style.overflow = "hidden";
      // document.documentElement.style.position = 'fixed';
    }
  }

  jQuery(document).ready(function($) {
    // Remove a href of SERVICES button on desktop and mobile
    $(
      "#header__menu-nav-bar #primary-menu > li:eq(0) > a, #header__menu-nav #primary-menu > li:eq(0) > a"
    ).removeAttr("href");

    // Add desktop icon behind each page link on DESKTOP nav bar
    (function setPrimaryMenuIcons() {
      $("#header__menu-nav-bar #primary-menu li a").each(function() {
        $(this).append(
          `<img src="https://soberlifesd.com/wp-content/themes/sober-life/img/src/SBL_11-11.svg"/>`
        );
      });
    })();

    // Update menu to show icon of active page
    function setCurrentPrimaryMenuIcon() {
      let locationSplit = window.location.href.split("/");
      let location = locationSplit[locationSplit.length - 2];
      $("#header__menu-nav-bar #primary-menu li a").each(function() {
        // Remove class 'active' from all menu options
        // Get slug
        let slug = slugify($(this).text());
        if (slug == location) {
          let target = $(this).children()[0];
          $(target).addClass("active");
        } else {
          let icons = $(this).children()[0];
          $(icons).removeClass("active");
        }
      });
      // If Services sub-menu item is 'active', make 'Services' 'active' as well.
      if (
        $("#header__menu-nav-bar #primary-menu li a img.active")
          .parent()
          .parent()
          .parent()
          .hasClass("sub-menu")
      ) {
        $(
          "#header__menu-nav-bar #primary-menu > li:first-of-type > a > img"
        ).addClass("active");
      } else {
        $(
          "#header__menu-nav-bar #primary-menu > li:first-of-type > a > img"
        ).removeClass("active");
      }
    }
    setCurrentPrimaryMenuIcon();

    function slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    }
  });

  // ** ABOUT **
  let windowSize = $(window).width();

  if (windowSize < 768) {
    (function aboutPageMobileCarousels() {
      $("#about__our-team-wrapper, #about__certification-logo-wrapper").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1
      });
    })();
  }

  // ** SOBERCOLLECTIVE **
  let ajaxLock = false;
  const ajaxUrl = "https://soberlifesd.com/wp-admin/admin-ajax.php";

  // Remove a href of CATS and TAGS on desktop
  $(".sobercollective__cats-desktop > li > a").each(function() {
    $(this).removeAttr("href");
  });
  $(".sobercollective__tags-desktop > li > a").each(function() {
    $(this).removeAttr("href");
  });

  // Set Initial Settings (classnames/values)
  function setInitialSettings() {
    if (windowSize > 1025) {
      // Add value attribute to each category li on DESKTOP
      $(".sobercollective__cats-desktop li").each(function() {
        let catId = $(this)
          .attr("class")
          .match(/\d+/)[0];
        $(this).attr("value", catId);
      });
      $(".sobercollective__cats-desktop li").each(function() {
        $(this).removeClass("current");
      });
      // Set first category li to current on DESKTOP
      $(".sobercollective__cats-desktop li")
        .eq(0)
        .addClass("current");
      updateActiveCatIcon(0);
      $(".sobercollective__tags-desktop li").each(function() {
        $(this).removeClass("current");
      });
      // Set first tag li to current on DESKTOP
      $(".sobercollective__tags-desktop li")
        .eq(0)
        .addClass("current");
    } else {
      // Set first category option to current on MOBILE
      $(".sobercollective__cats-mobile select option").each(function() {
        $(this).removeClass("current");
      });
      $(".sobercollective__tags-mobile select option").each(function() {
        $(this).removeClass("current");
      });
      $(".sobercollective__cats-mobile select option")
        .eq(0)
        .addClass("current")
        .prop("selected", true);
      $(".sobercollective__tags-mobile select option")
        .eq(0)
        .addClass("current")
        .prop("selected", true);
    }
  }
  // Invoke setInitialSettings() on initial load
  setInitialSettings();

  // Update pagination
  function updatePagination(currPage) {
    // Get max page number
    let maxPage = $("#maxpage").text();
    // Get current page number
    currPage = currPage ? currPage : 1;
    // Reset page numbers
    let pagesContainer = $("#sobercollective__pages");
    $(pagesContainer).empty();
    if (maxPage > 4) {
      // Formatting
      if (currPage <= 3) {
        $(pagesContainer).append(`
          <button value=1>1</button><button value=2>2</button><button value=3>3</button><span>...</span><button value=${maxPage}>${maxPage}</button>
        `);
      } else if (maxPage - currPage <= 3) {
        $(pagesContainer).append(`
          <button value=1>1</button><span>...</span><button value=${maxPage -
            2}>${maxPage - 2}</button><button value=${maxPage - 1}>${maxPage -
          1}</button><button value=${maxPage}>${maxPage}</button>
        `);
      } else {
        $(pagesContainer).append(`
        <button value=1>1</button><span>...</span><button value=${currPage -
          1}>${currPage -
          1}</button><button value=${currPage}>${currPage}</button><span>...</span><button value=${maxPage}>${maxPage}</button>
      `);
      }
    } else {
      for (let i = 1; i <= maxPage; i++) {
        if (i == 1) {
          $(pagesContainer).append(
            `<button class="current" value=${i}>${i}</button>`
          );
        } else {
          $(pagesContainer).append(`<button value=${i}>${i}</button>`);
        }
      }
    }
    // Set Current Page on Pages Buttons
    $(pagesContainer)
      .children()
      .each(function() {
        if ($(this).val() == currPage) {
          $(this)
            .siblings()
            .removeClass("current");
          $(this).addClass("current");
        }
      });
    // Toggle active PREV NEXT buttons
    if (currPage == 1) {
      $("#prev img").removeClass("active");
    } else {
      $("#prev img").addClass("active");
    }
    if (currPage == maxPage) {
      $("#next img").removeClass("active");
    } else {
      $("#next img").addClass("active");
    }
  }
  updatePagination();

  // Connect desktop nav bar li.current to corresponding icon
  function updateActiveCatIcon(pos) {
    $(".sobercollective__cats-desktop-icons")
      .children()
      .css("opacity", 0.4);
    $(`.sobercollective__cats-desktop-icons img:eq(${pos})`).css("opacity", 1);
  }

  // Desktop nav bar hover over effect
  (function hoverCatIcon() {
    $(".sobercollective__cats-desktop li").hover(
      function() {
        if (!$(this).hasClass("current")) {
          let position = $(this).index();
          $(".sobercollective__cats-desktop-icons img")
            .eq(position)
            .css("opacity", 1);
        }
      },
      function() {
        if (!$(this).hasClass("current")) {
          let position = $(this).index();
          $(".sobercollective__cats-desktop-icons img")
            .eq(position)
            .css("opacity", 0.4);
        }
      }
    );
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
      type: "get",
      url: ajaxUrl,
      data: `&posts_per_page=${postsPerPage}&action=ajax_get_initial_posts`,
      dataType: "json",
      success: function(res) {
        ajaxLock = false;
        $(".sobercollective__posts-wrapper").empty();
        $(res[0])
          // .hide()
          .appendTo(".sobercollective__posts-wrapper");
        // .fadeIn(100);
        $("#maxpage").text(res[1]);
        updatePagination();
      },
      error: function() {
        ajaxLock = false;
        console.log("error");
      }
    });
  })();

  // ******************************************* //
  //  AJAX_GET_POSTS for next, prev pages
  // ******************************************* //
  function ajax_get_posts(direction, currPage, catID, tagID, maxPage) {
    ajaxLock = true;
    let offset, postsPerPage;
    let currentPageTotal = $(".sobercollective__post").length;

    if (windowSize > 1025) {
      postsPerPage = 12;
      // console.log(postsPerPage);
    } else {
      postsPerPage = 11;
      // console.log(postsPerPage);
    }

    if (direction == "next") {
      offset = currentPageTotal + postsPerPage * (currPage - 1);
    } else if (direction == "prev") {
      offset = postsPerPage * (currPage - 1);
    }
    $.ajax({
      type: "get",
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&curr_page=${currPage}&offset=${offset}&posts_per_page=${postsPerPage}&action=ajax_get_posts`,
      dataType: "json",
      success: function(res) {
        ajaxLock = false;
        $(".sobercollective__posts-wrapper").empty();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(res[0])
          .hide()
          .appendTo(".sobercollective__posts-wrapper")
          .fadeIn(500);
      },
      error: function() {
        ajaxLock = false;
        console.log("error");
      }
    });
  }

  // ************************************************* //
  //  AJAX_FILTER_POSTS for filtering by category/tag
  // ************************************************* //
  function ajax_filter_posts(catID, tagID) {
    catID = catID ? catID : 26;
    tagID = tagID ? tagID : 30;
    ajaxLock = true;
    let postsPerPage;
    if (windowSize > 1025) {
      postsPerPage = 12;
    } else {
      postsPerPage = 11;
    }
    $.ajax({
      type: "get",
      url: ajaxUrl,
      data: `&category=${catID}&tag=${tagID}&posts_per_page=${postsPerPage}&action=ajax_filter_posts`,
      dataType: "json",
      success: function(res) {
        ajaxLock = false;
        // Empty the current posts / clear last search results
        $(".sobercollective__posts-wrapper").empty();
        // Update max number of pages
        $("#maxpage").text(res.post_meta.total_pages);
        $("#sobercollective__query").css("display", "none");
        $("#sobercollective__pagination").show();
        // Hide/Show pagination arrows based on number of pages
        if (res.post_meta.total_pages <= 1) {
          $("#prev, #next").hide();
          if (res.post_meta.total_pages == 0) {
            $(".sobercollective__posts-wrapper").append(
              `<div id="sobercollective__noresults">Sorry, No Results Found</div>`
            );
          }
        } else {
          $("#prev, #next").show();
        }
        // Show filtered post results
        $(res[0])
          .hide()
          .appendTo(".sobercollective__posts-wrapper")
          .fadeIn(500);
        updatePagination();
        $(".sobercollective__clear-query button").remove();
        // AJAX pushstate??
        // window.history.pushState('object','Category ' + catID, rootUrl + 'category-' + catID)
      },
      error: function() {
        ajaxLock = false;
        console.log("error");
      }
    });
  }

  // ***************************************************** //
  //  AJAX_GET_SEARCH_RESULTS for initial search results
  // ***************************************************** //
  function ajax_get_search_results(query) {
    let $input = $("#search-input");
    let currPage = $("#curpage").text();
    ajaxLock = true;
    let postsPerPage;

    if (windowSize > 1025) {
      postsPerPage = 12;
    } else {
      postsPerPage = 11;
    }

    $.ajax({
      type: "get",
      url: ajaxUrl,
      data: `&posts_per_page=${postsPerPage}&query=${query}&action=ajax_get_search_results`,
      dataType: "json",
      beforeSend: function() {
        $input.prop("disabled", true);
      },
      success: function(res) {
        $input.prop("disabled", false);
        ajaxLock = false;
        $(".sobercollective__posts-wrapper").empty();
        // $('#maxpage').text(`${Math.ceil(res.post_meta.total_posts / postsPerPage)}`);
        $("#sobercollective__pagination").hide();
        $("#search-input").val("");
        setInitialSettings();

        if (res.post_meta.total_posts == 0) {
          $(".sobercollective__posts-wrapper").append(
            `<div id="sobercollective__noresults">Sorry, No Results Found</div>`
          );
        }
        $(".sobercollective__clear-query").empty();
        $(".sobercollective__clear-query").append(
          `<button>Clear Results</button>`
        );

        $(res[0]).appendTo(".sobercollective__posts-wrapper");
        $("#sobercollective__query")
          .empty()
          .css("display", "flex")
          .append(`<div>Search results for: <strong>${query}</strong></div>`);
        // $('#sobercollective__query').append(`<div>Search results for: <strong>${query}</strong></div>`);
        $("#sobercollective__query").val(`${query}`);
        // updatePagination();
      },
      error: function(res) {
        ajaxLock = false;
        console.log("error", res);
      }
    });
  }
  // *************************************************** EVENT HANDLERS ****************************************************** //
  // ********************** //
  //         SEARCH
  // ********************** //
  (function search() {
    $("#search-form").on("keypress", function(e) {
      let $input = $(this).find('input[name="s"]');
      let query = $input.val();

      if (e.which === 13) {
        ajax_get_search_results(query);
        return false;
      }
    });
  })();

  // ************** //
  //  PAGINATION
  // ************** //
  (function pagination() {
    // On Next Click
    $("#next").click(function() {
      let currentPage = Number($("#curpage").text());
      let max = Number($("#maxpage").text());
      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $(".sobercollective__cats-desktop li.current").val();
        currTag = $(".sobercollective__tags-desktop li.current").val();
      } else {
        currCat = $(
          ".sobercollective__cats-mobile select option.current"
        ).val();
        currTag = $(
          ".sobercollective__tags-mobile div select option.current"
        ).val();
      }

      // Don't allow next click action when on first page
      if (currentPage < max) {
        let newPageNum = currentPage + 1;
        // Update current page
        $("#curpage").text(newPageNum);
        ajax_get_posts("next", currentPage, currCat, currTag);
        updatePagination(newPageNum);
      }
    });

    // On Prev Click
    $("#prev").click(function() {
      let currentPage = Number($("#curpage").text());
      let max = Number($("#maxpage").text());
      let currCat, currTag;
      if (windowSize > 1025) {
        currCat = $(".sobercollective__cats-desktop li.current").val();
        currTag = $(".sobercollective__tags-desktop li.current").val();
      } else {
        currCat = $(
          ".sobercollective__cats-mobile select option.current"
        ).val();
        currTag = $(
          ".sobercollective__tags-mobile div select option.current"
        ).val();
      }

      // Don't allow prev click action when on first page
      if (currentPage > 1) {
        let newPageNum = currentPage - 1;
        // Update current page
        $("#curpage").text(newPageNum);
        ajax_get_posts("prev", newPageNum, currCat, currTag, max);
        updatePagination(newPageNum);
      }
    });
  })();
  // On Page Number Button Click

  // ********************** //
  //  CATEGORY/TAG FILTERS
  // ********************** //
  (function currentFilters() {
    if (windowSize > 1025) {
      let currCat = $(".sobercollective__cats-desktop li.current").val();
      let currTag = $(".sobercollective__tags-desktop li.current").val();

      // On Category Click
      $(".sobercollective__cats-desktop li a").click(function(e) {
        e.preventDefault();
        $($(".sobercollective__tags-desktop li a")[0]).click();
        $("#curpage").text("1");
        let newCat = $(this)
          .parent()
          .val();
        $(this)
          .parent()
          .siblings()
          .removeClass("current");
        $(this)
          .parent()
          .addClass("current");
        currCat = newCat;
        ajax_filter_posts(currCat, currTag);
        updateActiveCatIcon(
          $(this)
            .parent()
            .index()
        );
      });

      // On Tag Click
      $(".sobercollective__tags-desktop li a").click(function(e) {
        e.preventDefault();
        $("#curpage").text("1");
        let newTag = $(this)
          .parent()
          .val();
        $(this)
          .parent()
          .siblings()
          .removeClass("current");
        $(this)
          .parent()
          .addClass("current");
        currTag = newTag;
        ajax_filter_posts(currCat, currTag);
      });
    } else {
      let currCat = $(
        ".sobercollective__cats-mobile select option.current"
      ).val();
      let currTag = $(
        ".sobercollective__tags-mobile div select option.current"
      ).val();

      // On Category Change
      $(".sobercollective__cats-mobile > select").on("change", function() {
        $("#curpage").text("1");
        let newCat = $(this).val();
        $(this)
          .children()
          .each(function() {
            $(this).removeClass("current");
            if ($(this).val() == newCat) {
              $(this).addClass("current");
            }
          });
        currCat = newCat;
        ajax_filter_posts(currCat, currTag);
      });

      // On Tag Change
      $(".sobercollective__tags-mobile-dropdown > select").on(
        "change",
        function() {
          $("#curpage").text("1");
          let newTag = $(this).val();
          $(this)
            .children()
            .each(function() {
              $(this).removeClass("current");
              if ($(this).val() == newTag) {
                $(this).addClass("current");
              }
            });
          currTag = newTag;
          ajax_filter_posts(currCat, currTag);
        }
      );
    }
  })();

  // ** SERVICES **

  // On click, only one li open at one time
  (function clickApproachIcons() {
    $(
      "#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper"
    ).click(function() {
      if (
        $(this)
          .parent()
          .hasClass("open")
      ) {
        $(this)
          .parent()
          .removeClass("open");
        let description = $(this)
          .parent()
          .children()[1];
        $(description).slideUp();
      } else {
        // Open and add '-' sign
        $(this)
          .parent()
          .addClass("open");
        let description = $(this)
          .parent()
          .children()[1];
        $(description).slideDown();
      }
    });
  })();

  (function singlePostSlick() {
    if ($(window).width() <= 768) {
      $(".single-post__first-gallery").slick({
        centerMode: true,
        centerPadding: "6%",
        slidesToShow: 1,
        arrows: true
      });
      $(".single-post__second-gallery").slick({
        centerMode: true,
        centerPadding: "6%",
        slidesToShow: 1,
        arrows: true
      });
      $(".related-posts").slick({
        centerMode: true,
        centerPadding: "6%",
        slidesToShow: 2,
        arrows: true
      });
    }

    if ($(window).width() > 768) {
      $(".related-posts").slick({
        centerMode: true,
        centerPadding: "4%",
        slidesToShow: 3,
        arrows: true,
        draggable: false,
        appendArrows: "$('.single-post__carousel-navigation')",
        prevArrow: $(".single-post__prev-arrow"),
        nextArrow: $(".single-post__next-arrow")
      });
    }
  })();

  (function successStoriesSlick() {
    if ($(window).width() < 768) {
      $(".other-success-stories").slick({
        centerMode: true,
        centerPadding: "6%",
        slidesToShow: 2,
        arrows: false
      });
    }

    $(".other-success-stories").slick({
      centerMode: true,
      centerPadding: "4%",
      slidesToShow: 3,
      arrows: true,
      draggable: false,
      appendArrows: "$('.carousel-navigation')",
      prevArrow: $(".prev-arrow"),
      nextArrow: $(".next-arrow")
    });
  })();
}

function AAPL_click_code(thiss) {
  //This file is generated from the admin panel - dont edit here!
  // On click, only one li open at one time

  $(
    "#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper"
  ).click(function() {
    if (
      $(this)
        .parent()
        .hasClass("open")
    ) {
      $(this)
        .parent()
        .removeClass("open");
      let description = $(this)
        .parent()
        .children()[1];
      $(description).slideUp();
    } else {
      // Open and add '-' sign
      $(this)
        .parent()
        .addClass("open");
      let description = $(this)
        .parent()
        .children()[1];
      $(description).slideDown();
    }
  });
}

function AAPL_data_code(dataa) {
  //This file is generated from the admin panel - dont edit here!
  // Open Form
  function toggleForm() {
    document.getElementById("soberlife-form-wrapper").style.left = "0";
  }

  // Open/Close Nav Menu
  function toggleMenu() {
    let isOpen = document
      .getElementById("header__hamburger")
      .classList.contains("open");
    if (isOpen) {
      document.getElementById("header__menu-overlay").style.width = "0%";
      document.getElementById("header__hamburger").classList.remove("open");
      document.getElementById("header__menu-overlay-content").style.right =
        "-400px";
      document.getElementById("header__menu-overlay-content").style.opacity =
        "0";
      document.documentElement.style.overflow = "";
      document
        .getElementById("header__menu-nav")
        .childNodes[1].firstChild.getElementsByClassName(
          "sub-menu"
        )[0].style.display =
        "none";
      // document.documentElement.style.position = 'initial';
    } else {
      document.getElementById("header__menu-overlay").style.width = "100%";
      document.getElementById("header__hamburger").classList.add("open");
      document.getElementById("header__menu-overlay-content").style.right = "0";
      document.getElementById("header__menu-overlay-content").style.opacity =
        "1";
      document.documentElement.style.overflow = "hidden";
      // document.documentElement.style.position = 'fixed';
    }
  }

  jQuery(document).ready(function($) {
    // Remove a href of SERVICES button on desktop and mobile
    $(
      "#header__menu-nav-bar #primary-menu > li:eq(0) > a, #header__menu-nav #primary-menu > li:eq(0) > a"
    ).removeAttr("href");

    // Add desktop icon behind each page link on DESKTOP nav bar
    (function setPrimaryMenuIcons() {
      $("#header__menu-nav-bar #primary-menu li a").each(function() {
        $(this).append(
          `<img src="https://soberlifesd.com/wp-content/themes/sober-life/img/src/SBL_11-11.svg"/>`
        );
      });
    })();

    function setCurrentPrimaryMenuIcon() {
      let locationSplit = window.location.href.split("/");
      let location = locationSplit[locationSplit.length - 2];
      $("#header__menu-nav-bar #primary-menu li a").each(function() {
        // Remove class 'active' from all menu options
        // let icons = $(this).children()[0];
        // $(icons).removeClass('active');
        // Get slug
        let slug = slugify($(this).text());
        if (slug == location) {
          let target = $(this).children()[0];
          $(target).addClass("active");
        } else {
          let icons = $(this).children()[0];
          $(icons).removeClass("active");
        }
      });
      // If Services sub-menu item is 'active', make 'Services' 'active' as well.
      if (
        $("#header__menu-nav-bar #primary-menu li a img.active")
          .parent()
          .parent()
          .parent()
          .hasClass("sub-menu")
      ) {
        $(
          "#header__menu-nav-bar #primary-menu > li:first-of-type > a > img"
        ).addClass("active");
      } else {
        $(
          "#header__menu-nav-bar #primary-menu > li:first-of-type > a > img"
        ).removeClass("active");
      }
    }
    setCurrentPrimaryMenuIcon();

    function slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    }
  });

  let windowSize = $(window).width();

  if (windowSize < 768) {
    (function aboutPageMobileCarousels() {
      $("#about__our-team-wrapper, #about__certification-logo-wrapper").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1
      });
    })();
  }

  if (windowSize < 1024) {
    (function aboutPageMobileCarousels() {
      $("#about__our-team-wrapper").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1
      });
      if (windowSize < 768) {
        $("#about__certification-logo-wrapper").slick({
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1
        });
      }
    })();
  }

  // On click, only one li open at one time
  (function clickApproachIcons() {
    $(
      "#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper"
    ).click(function() {
      if (
        $(this)
          .parent()
          .hasClass("open")
      ) {
        $(this)
          .parent()
          .removeClass("open");
        let description = $(this)
          .parent()
          .children()[1];
        $(description).slideUp();
      } else {
        // Open and add '-' sign
        $(this)
          .parent()
          .addClass("open");
        let description = $(this)
          .parent()
          .children()[1];
        $(description).slideDown();
      }
    });
  })();

  (function reformatSuccessStoriesName() {
    let latestStoryTitle = $(".latest-story-track-number")[0].innerHTML;
    let latestStoryDate = $(".latest-story-track-date")[0].innerHTML;
    let colonePosition = latestStoryTitle.indexOf(":");
    if ($(".play-button-wapper").length !== 0) {
      $(
        ".latest-story-track-number"
      )[0].innerHTML = `Podcast ${latestStoryTitle.slice(0, colonePosition)}`;
    } else {
      $(".latest-story-track-number")[0].innerHTML = "Article";
    }

    $(".latest-story-track-title")[0].innerHTML = `${latestStoryTitle.slice(
      colonePosition + 1,
      latestStoryTitle.length
    )}`;

    let singleStoryNumbers = $(".single-story-podcast-track-number");
    singleStoryNumbers.each(function() {
      let singleStoryNumber = $(this)[0].innerHTML;
      let colonePosition = singleStoryNumber.indexOf(":");
      $(this)[0].innerHTML = `Podcast ${singleStoryNumber.slice(
        0,
        colonePosition
      )}`;
    });

    let singleStoryTitles = $(".single-story-track-title");
    singleStoryTitles.each(function() {
      let singleStoryTitle = $(this)[0].innerHTML;
      let colonePosition = singleStoryTitle.indexOf(":");
      $(this)[0].innerHTML = `${singleStoryTitle.slice(
        colonePosition + 1,
        singleStoryTitle.length
      )}`;
    });
  })();

  if (window.location.pathname == "/") {
    clearInterval(changingSlogans);
    clearInterval(movingArrows);
    (function sloganAnimation() {
      for (
        let i = 0;
        i <
        $(".front-page__header__changing-slogans-wrapper")[0].children.length;
        i++
      ) {
        setTimeout(() => {
          $($(".front-page__header__changing-slogans-wrapper")[0].children).css(
            "opacity",
            "0"
          );
          $(
            $(".front-page__header__changing-slogans-wrapper")[0].children[i]
          ).css("opacity", "1");
          // $($('.front-page__header__changing-slogans-wrapper')[0].children[1 + i]).css('opacity', '1');
        }, 1500 * i);
      }
      let changingSlogans = setInterval(() => {
        if ($(".front-page__header__changing-slogans-wrapper").length != 0) {
          for (
            let i = 0;
            i <
            $(".front-page__header__changing-slogans-wrapper")[0].children
              .length;
            i++
          ) {
            setTimeout(() => {
              $(
                $(".front-page__header__changing-slogans-wrapper")[0].children
              ).css("opacity", "0");
              $(
                $(".front-page__header__changing-slogans-wrapper")[0].children[
                  i
                ]
              ).css("opacity", "1");
              // $($('.front-page__header__changing-slogans-wrapper')[0].children[1 + i]).css('opacity', '1');
            }, 1500 * i);
          }
        }
      }, ($(".front-page__header__changing-slogans-wrapper")[0].children.length - 1) * 2500);
    })();
    (function movingForwardAnimation() {
      setTimeout(() => {
        $(".moving-forward__content__arrows > img")[0].src =
          "./wp-content/themes/sober-life/img/src/arrow--black.svg";
        $(".moving-forward__content__arrows > img")[1].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $(".moving-forward__content__arrows > img")[2].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      }, 0);
      setTimeout(() => {
        $(".moving-forward__content__arrows > img")[0].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $(".moving-forward__content__arrows > img")[1].src =
          "./wp-content/themes/sober-life/img/src/arrow--black.svg";
        $(".moving-forward__content__arrows > img")[2].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      }, 500);
      setTimeout(() => {
        $(".moving-forward__content__arrows > img")[0].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $(".moving-forward__content__arrows > img")[1].src =
          "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $(".moving-forward__content__arrows > img")[2].src =
          "./wp-content/themes/sober-life/img/src/arrow--black.svg";
      }, 1000);

      let movingArrows = setInterval(() => {
        if ($(".moving-forward__content__arrows").length != 0) {
          setTimeout(() => {
            $(".moving-forward__content__arrows > img")[0].src =
              "./wp-content/themes/sober-life/img/src/arrow--black.svg";
            $(".moving-forward__content__arrows > img")[1].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
            $(".moving-forward__content__arrows > img")[2].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
          }, 0);
          setTimeout(() => {
            $(".moving-forward__content__arrows > img")[0].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
            $(".moving-forward__content__arrows > img")[1].src =
              "./wp-content/themes/sober-life/img/src/arrow--black.svg";
            $(".moving-forward__content__arrows > img")[2].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
          }, 500);
          setTimeout(() => {
            $(".moving-forward__content__arrows > img")[0].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
            $(".moving-forward__content__arrows > img")[1].src =
              "./wp-content/themes/sober-life/img/src/arrow--white.svg";
            $(".moving-forward__content__arrows > img")[2].src =
              "./wp-content/themes/sober-life/img/src/arrow--black.svg";
          }, 1000);
        }
      }, 1800);
    })();
  }
}
