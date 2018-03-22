
// Open/Close Nav Menu
function toggleMenu() {
  let isOpen = document.getElementById('header__hamburger').classList.contains('open');
  if (isOpen) {
    document.getElementById('header__menu-overlay').style.width = '0%';
    document.getElementById('header__hamburger').classList.remove('open');  
    document.getElementById('header__menu-overlay-content').style.right = '-1000px';
    document.getElementById('header__menu-overlay-content').style.opacity = '0';           
    document.documentElement.style.overflow = '';  
  } else {
    document.getElementById('header__menu-overlay').style.width = '100%';   
    document.getElementById('header__hamburger').classList.add('open'); 
    document.getElementById('header__menu-overlay-content').style.right = '0';   
    document.getElementById('header__menu-overlay-content').style.opacity = '1';       
    document.documentElement.style.overflow = 'hidden';   
  }
};

jQuery(document).ready(function($) {
  // Show submenu of services
  $('#header__menu-nav #primary-menu > li:eq(2) > a').click(function(e) {
    e.preventDefault();
    // $('#header__menu-nav #primary-menu .sub-menu').css({'display': 'block', 'position': 'relative', 'height': '100%'});
    $('#header__menu-nav #primary-menu .sub-menu').slideToggle();      
  });

  $('#header__menu-nav-bar #primary-menu > li:eq(2) > a').click(function(e) {
    e.preventDefault();
  });

});
