<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sober-life
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

      <section class="front-page__header">
				<div class="front-page__header__image">
					<img src="" alt="">
				</div>
				<div class="front-page__header__slogans">
					<p class="front-page__header__slogans-reclaim">Reclaim</p>
					<div class="front-page__header__changing-slogans-wrapper">
					<?php
					// check if the repeater field has rows of data
					if( have_rows('header_changing_slogans') ):
						// loop through the rows of data
						while ( have_rows('header_changing_slogans') ) : the_row();
							// display a sub field value
					?>

						<div class="front-page__header__changing-slogans"><?php the_sub_field('slogan'); ?></div>
						<div class="front-page__header__changing-slogans-detail"><?php the_sub_field('slogan_detail'); ?></div>

					<?php
						endwhile;
					endif;
					?>
					</div>
					
				</div>
				<button>Get Started</button>
			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
