<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sober-life
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header id="masthead" class="site-header">
		<section class="site-branding">
			<div class="header__top-bar">
				<a href="tel:6041234567" class="header__nav-bar-tel">604.123.4567</a>
				<a href="mailto:info@soberlifesd.com" class="header__nav-bar-email">info@soberlifesd.com</a>
			</div>
			<div class="header__bottom-bar">
				<div class="header__logo">
					<img class="header__logo-green-arrows" src="<?php echo get_stylesheet_directory_uri(); ?>/img/SBL_Logo_final-1-03.png" />
					<img class="header__logo-text" src="<?php echo get_stylesheet_directory_uri(); ?>/img/SBL_Logo_final-1-05.png" />
				</div>
				<div id="header__hamburger" onclick="toggleMenu()">
					<span class="header__hamburger-line"></span>
					<span class="header__hamburger-line"></span>
					<span class="header__hamburger-line"></span>
					<span></span>
				</div>
				<div id="header__menu-nav-bar">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						) );
					?>
					<a href="#" class="header__menu-nav-bar-get-started">Get Started</a>
				</div>
			</div>
		</section><!-- .site-branding -->

		<section id="header__menu-overlay" class="main-navigation">
			<div id="header__menu-overlay-content">
				<div id="header__menu-nav">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						) );
					?>
				</div>
				<div class="header__menu-buttons">
					<a href="#" class="header__menu-button-get-started">Get Started</a>
					<a href="tel:6041234567" class="header__menu-button-phone">604.123.4567</a>
					<a href="mailto:info@soberlifesd.com" class="header__menu-button-email">info@soberlifesd.com</a>
				</div>
			</div>
		</section><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
