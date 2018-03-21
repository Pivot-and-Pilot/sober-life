<?php
/**
 * sober-life functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package sober-life
 */

if ( ! function_exists( 'sober_life_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function sober_life_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on sober-life, use a find and replace
		 * to change 'sober-life' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'sober-life', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'sober-life' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'sober_life_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'sober_life_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function sober_life_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'sober_life_content_width', 640 );
}
add_action( 'after_setup_theme', 'sober_life_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function sober_life_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'sober-life' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'sober-life' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'sober_life_widgets_init' );

// Google Maps ACF 
function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyCVSwSIPSQM_lhAjS0n3IcMCXr5rvFrn9E');
}
add_action('acf/init', 'my_acf_init');

/**
 * Enqueue scripts and styles.
 */
function sober_life_scripts() {
	wp_enqueue_style( 'sober-life-fonts', get_template_directory_uri() . '/fonts/MyFontsWebfontsKit.css');	

	wp_enqueue_style( 'sober-life-style', get_template_directory_uri() . '/build/styles/final-styles.css' );
	// wp_enqueue_script( 'sober-life-js', get_template_directory_uri() . '/build/scripts/final-script.js', array(), true );	
	wp_enqueue_script( 'sober-life-googlemaps-js', get_template_directory_uri() . '/src/scripts/googlemaps.js', array(), true );					
	wp_enqueue_script( 'sober-life-front-page-js', get_template_directory_uri() . '/src/scripts/front-page.js', array(), true );		
	wp_enqueue_script( 'sober-life-header-js', get_template_directory_uri() . '/src/scripts/header.js', array(), true );
	wp_enqueue_script( 'sober-life-about-js', get_template_directory_uri() . '/src/scripts/about.js', array(), true );
	

	wp_enqueue_script( 'sober-life-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'sober-life-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	
	// Slick
	wp_enqueue_style( 'sober-life-slick-css', get_template_directory_uri() . '/js/slick/slick/slick.css');
	wp_enqueue_style( 'sober-life-slick-css-theme', get_template_directory_uri() . '/js/slick/slick/slick-theme.css');
	wp_enqueue_script( 'sober-life-slick-js', get_template_directory_uri() . '/js/slick/slick/slick.min.js', '2017', true );
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'sober_life_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

