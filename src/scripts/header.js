
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

  // Show submenu of services on MOBILE
  $('#header__menu-nav #primary-menu > li:eq(2) > a').click(function(e) {
    e.preventDefault();
    $('#header__menu-nav #primary-menu .sub-menu').slideToggle();      
  });

  // Show submenu of services on DESKTOP
  $('#header__menu-nav-bar #primary-menu > li:eq(2) > a').click(function(e) {
    e.preventDefault();
  });

  $('#primary-menu li a').each(function() {
    $(this).append(`<img src="http://localhost:3000/soberlife/wp-content/themes/sober-life/img/src/SBL_11-11.svg"/>`);
  });
});
