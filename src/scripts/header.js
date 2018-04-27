// Open Form
function toggleForm() {
  document.getElementById('soberlife-form-wrapper').style.left = '0';
  let isOpen = document.getElementById('header__hamburger').classList.contains('open');
  if (isOpen) {
    document.getElementById('header__menu-overlay').style.width = '0%';
    document.getElementById('header__hamburger').classList.remove('open');
    document.getElementById('header__menu-overlay-content').style.right = '-1000px';
    document.getElementById('header__menu-overlay-content').style.opacity = '0';
    document.documentElement.style.overflow = '';
    document
      .getElementById('header__menu-nav')
      .childNodes[1].firstChild.getElementsByClassName('sub-menu')[0].style.display =
      'none';
  }
}

// Open/Close Nav Menu
function toggleMenu() {
  let isOpen = document.getElementById('header__hamburger').classList.contains('open');
  if (isOpen) {
    document.getElementById('header__menu-overlay').style.width = '0%';
    document.getElementById('header__hamburger').classList.remove('open');
    document.getElementById('header__menu-overlay-content').style.right = '-1000px';
    document.getElementById('header__menu-overlay-content').style.opacity = '0';
    document.documentElement.style.overflow = '';
    document
      .getElementById('header__menu-nav')
      .childNodes[1].firstChild.getElementsByClassName('sub-menu')[0].style.display =
      'none';
    // document.documentElement.style.position = 'initial';
  } else {
    document.getElementById('header__menu-overlay').style.width = '100%';
    document.getElementById('header__hamburger').classList.add('open');
    document.getElementById('header__menu-overlay-content').style.right = '0';
    document.getElementById('header__menu-overlay-content').style.opacity = '1';
    document.documentElement.style.overflow = 'hidden';
    // document.documentElement.style.position = 'fixed';
  }
}

jQuery(document).ready(function($) {
  // Remove a href of SERVICES button on desktop and mobile
  $(
    '#header__menu-nav-bar #primary-menu > li:eq(0) > a, #header__menu-nav #primary-menu > li:eq(0) > a'
  ).removeAttr('href');

  // On click of link in mobile menu, close menu
  $(
    '#header__menu-nav #primary-menu > li:not(li:eq(0)) > a, #header__menu-nav #primary-menu > li:eq(0) > .sub-menu > li > a'
  ).click(function() {
    document.getElementById('header__menu-overlay').style.width = '0%';
    document.getElementById('header__hamburger').classList.remove('open');
    document.getElementById('header__menu-overlay-content').style.right = '-1000px';
    document.getElementById('header__menu-overlay-content').style.opacity = '0';
    document.documentElement.style.overflow = '';
    document
      .getElementById('header__menu-nav')
      .childNodes[1].firstChild.getElementsByClassName('sub-menu')[0].style.display =
      'none';
  });

  // Show submenu of services on MOBILE
  $('#header__menu-nav #primary-menu > li:eq(0) > a').click(function(e) {
    e.preventDefault();
    $('#header__menu-nav #primary-menu .sub-menu').slideToggle();
  });

  let windowSize = $(window).width();
  if (windowSize > 768) {
    // Show submenu of services on DESKTOP
    $('#header__menu-nav-bar #primary-menu > li:eq(0) > a').click(function(e) {
      e.preventDefault();
    });

    // Add desktop icon behind each page link on DESKTOP nav bar
    (function setPrimaryMenuIcons() {
      $('#header__menu-nav-bar #primary-menu li a').each(function() {
        $(this).append(
          `<img src="https://devpnp.com/wp-content/themes/sober-life/img/src/SBL_11-11.svg"/>`
        );
      });
    })();
  }

  // Update menu to show icon of active page
  function setCurrentPrimaryMenuIcon() {
    let locationSplit = window.location.href.split('/');
    let location = locationSplit[locationSplit.length - 2];
    $('#header__menu-nav-bar #primary-menu li a').each(function() {
      // Remove class 'active' from all menu options
      // let icons = $(this).children()[0];
      // $(icons).removeClass('active');
      // Get slug
      let slug = slugify($(this).text());
      if (slug == location) {
        let target = $(this).children()[0];
        $(target).addClass('active');
      } else {
        let icons = $(this).children()[0];
        $(icons).removeClass('active');
      }
    });
    // If Services sub-menu item is 'active', make 'Services' 'active' as well.
    if (
      $('#header__menu-nav-bar #primary-menu li a img.active')
        .parent()
        .parent()
        .parent()
        .hasClass('sub-menu')
    ) {
      $('#header__menu-nav-bar #primary-menu > li:first-of-type > a > img').addClass('active');
    } else {
      $('#header__menu-nav-bar #primary-menu > li:first-of-type > a > img').removeClass('active');
    }
  }
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

  // $('.front-page__button, .go-to-sober-collective, .services-child__our-team-learn-more').click(function() {
  //   console.log('CLICKED');
  //   setCurrentPrimaryMenuIcon();    
  // });
});
