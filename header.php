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
				<a href="tel:18003230585" class="header__nav-bar-tel">1-800-323-0585</a>
				<a href="mailto:info@soberlifesd.com" class="header__nav-bar-email">info@soberlifesd.com</a>
			</div>
			<div class="header__bottom-bar">
				<a href="<?php echo get_site_url() . '/' ?>" class="header__logo">
					<img class="header__logo" src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/Website_Logo-01.svg" />									
					<!-- <div>Sober</div><div>Life</div> -->
				</a>
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
					<a href="#" class="header__menu-nav-bar-get-started" onclick="toggleForm()">Join Our Community</a>
				</div>
			</div>
		</section><!-- .site-branding -->

		<a href="tel:18003230585" class="header__fixed-call-button">Give Us a Call</a>

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
					<a href="#" class="header__menu-button-get-started" onclick="toggleForm()">Join Our Community</a>
					<a href="tel:18003230585" class="header__menu-button-phone">1.800.323.0585</a>
					<a href="mailto:info@soberlifesd.com" class="header__menu-button-email">info@soberlifesd.com</a>
				</div>
			</div>
		</section><!-- #site-navigation -->

		<?php
		get_template_part( 'template-parts/content', 'form' );
		?>
	</header><!-- #masthead -->
	<div id="content" class="site-content">
