function AAPL_reload_code() {
//This file is generated from the admin panel - dont edit here! 
if ($(window).width() <= 768) {
      $('.single-post__first-gallery').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 1,
        arrows: true,
      })
      $('.single-post__second-gallery').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 1,
        arrows: true,
      })
      $('.related-posts').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 2,
        arrows: true,
      })
    }

    if ($(window).width() > 768) {
      $('.related-posts').slick({
        centerMode: true,
        centerPadding: '4%',
        slidesToShow: 3,
        arrows: true,
      })
    }

    if ($(window).width() < 768) {
      $('.other-success-stories').slick({
        centerMode: true,
        centerPadding: '6%',
        slidesToShow: 2,
        arrows: true,
      })
    }

    $('.other-success-stories').slick({
      centerMode: true,
      centerPadding: '4%',
      slidesToShow: 3,
      arrows: true,
    })
}

function AAPL_click_code(thiss) {
//This file is generated from the admin panel - dont edit here! 
// highlight the current menu item
jQuery('ul.menu li').each(function() {
	jQuery(this).removeClass('current-menu-item');
});
jQuery(thiss).parents('li').addClass('current-menu-item');




(function setInitialApproachIcons() {
  $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li:eq(0)').addClass('open');
})();

// On click, only one li open at one time

  $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
    // Remove all other '+' signs and close description
    let siblings = $(this).parent().siblings();
    $(siblings).each(function() {
      let siblingsDescription =  $(this).children()[1];
      $(siblingsDescription).slideUp()
    });
    $(siblings).removeClass('open');

    // Add '+' sign and open description
    $(this).parent().addClass('open');
    let description = $(this).parent().children()[1];
    $(description).slideDown();
  });
}

function AAPL_data_code(dataa) {
//This file is generated from the admin panel - dont edit here! 
function toggleForm() {
  document.getElementById('soberlife-form-wrapper').style.left = '0';
};

// Open/Close Nav Menu
function toggleMenu() {
  let isOpen = document.getElementById('header__hamburger').classList.contains('open');
  if (isOpen) {
    document.getElementById('header__menu-overlay').style.width = '0%';
    document.getElementById('header__hamburger').classList.remove('open');  
    document.getElementById('header__menu-overlay-content').style.right = '-1000px';
    document.getElementById('header__menu-overlay-content').style.opacity = '0';           
    document.documentElement.style.overflow = ''; 
    document.getElementById('header__menu-nav').childNodes[1].firstChild.getElementsByClassName('sub-menu')[0].style.display = 'none';
    // document.documentElement.style.position = 'initial';        
  } else {
    document.getElementById('header__menu-overlay').style.width = '100%';   
    document.getElementById('header__hamburger').classList.add('open'); 
    document.getElementById('header__menu-overlay-content').style.right = '0';   
    document.getElementById('header__menu-overlay-content').style.opacity = '1';       
    document.documentElement.style.overflow = 'hidden'; 
    // document.documentElement.style.position = 'fixed';    

  }
};

jQuery(document).ready(function($) {

  // Remove a href of SERVICES button on desktop and mobile
  $('#header__menu-nav-bar #primary-menu > li:eq(2) > a, #header__menu-nav #primary-menu > li:eq(2) > a').removeAttr('href');
  
  // Add desktop icon behind each page link on DESKTOP nav bar
  (function setPrimaryMenuIcons() {
    $('#header__menu-nav-bar #primary-menu li a').each(function() {
      $(this).append(`<img src="http://localhost:3000/soberlife/wp-content/themes/sober-life/img/src/SBL_11-11.svg"/>`);
    });
  })();

  // Update menu to show icon of active page ******************* CHANGE FOR ADVANCED AJAX *************************
  function setCurrentPrimaryMenuIcon() {
    let locationSplit = window.location.href.split('/');
    let location = locationSplit[locationSplit.length - 2];
    $('#header__menu-nav-bar #primary-menu li a').each(function() {
      // Remove class 'active' from all menu options
      let icons = $(this).children()[0];
      $(icons).removeClass('active');
      // Get slug 
      let slug = slugify($(this).text());
      if (slug == location) {
        console.log('YUP, slug is', slug);
        let target = $(this).children()[0];
        // $(target).css('display', 'block');
        $(target).addClass('active')
      }
    })
    // If Services sub-menu item is 'active', make 'Services' 'active' as well.
    if ($('#header__menu-nav-bar #primary-menu li a img.active').parent().parent().parent().hasClass('sub-menu')) {
      $('#header__menu-nav-bar #primary-menu > li:last-of-type > a > img').addClass('active');
    }
  };
  setCurrentPrimaryMenuIcon();

  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
});

  let windowSize = $(window).width();

  if (windowSize < 1024) {
    (function aboutPageMobileCarousels() {
      $('#about__our-team-wrapper').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      });
      if (windowSize < 768) {
        $('#about__certification-logo-wrapper').slick({
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        });
      }
    })();
  }

  // Set initial setting of first li item open
  (function setInitialApproachIcons() {
    $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li:eq(0)').addClass('open');
  })();

  // On click, only one li open at one time
  (function clickApproachIcons() {
    $('#services-child > .services-child__content-wrap > .services-child__our-approach > ul > li > .services-child__our-approach-list-title-wrapper').click(function() {
      // Remove all other '+' signs and close description
      let siblings = $(this).parent().siblings();
      $(siblings).each(function() {
        let siblingsDescription =  $(this).children()[1];
        $(siblingsDescription).slideUp()
      });
      $(siblings).removeClass('open');

      // Add '+' sign and open description
      $(this).parent().addClass('open');
      let description = $(this).parent().children()[1];
      $(description).slideDown();
    });
  })();
}