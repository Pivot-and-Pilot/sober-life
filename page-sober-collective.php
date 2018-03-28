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
			<div id="sobercollective-page">

			<?php $wp_all_posts = new WP_Query(array(
				'post_type' 			=> 'post', 
				'post_status'			=> 'publish', 
				'posts_per_page'	=> 12,
			)); ?>

			<?php if ( $wp_all_posts->have_posts() ) : 
				$args = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12));
			?>	
				<div class="sobercollective__top-bar">
					<ul><?php wp_list_categories($args); ?></ul>
					<div class="sobercollective__searchbar"><input placeholder="Search"></input></div>
				</div>
				<?php while ( $wp_all_posts->have_posts() ) : $wp_all_posts->the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'sober-collective' ); ?>

				<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
			<?php endif; ?>
	
					
			<!-- PAGINATION -->
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
// get_sidebar();
get_footer();
