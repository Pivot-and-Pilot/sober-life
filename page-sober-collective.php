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

			<?php 
			$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
			$wp_get_posts = new WP_Query(array(
				'post_type' 			=> 'post', 
				'post_status'			=> 'publish', 
				'posts_per_page'	=> 11,
				'paged'						=> $paged
			)); ?>

			<?php if ( $wp_get_posts->have_posts() ) : 
				$argsCatsMobile = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'option_none_value'	=> -1,
					'show_option_none'	=> 'Media',
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12));
				$argsCatsDesktop = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12));
			?>	
				<div class="sobercollective__top-bar">
					<div class="sobercollective__searchbar"><?php echo do_shortcode('[wpdreams_ajaxsearchlite]'); ?></div>
					<!-- <div class="sobercollective__searchbar"><input id="sobercollective__search-input" placeholder="Search"/></div> -->
					<div class="sobercollective__cats-mobile"><?php wp_dropdown_categories($argsCatsMobile); ?></div>
					<ul class="sobercollective__cats-desktop"><?php wp_list_categories($argsCatsDesktop); ?></ul>
					<div class="sobercollective__tags-mobile">
						<div class="sobercollective__tags-mobile-dropdown">
							<?php 
								$tags = get_tags(array(
									'hide_empty' => 0
								));
								if ($tags) { ?>
									<select name="tag" id="tag">
										<option>Topics</option>
										<?php foreach($tags as $tag) {
											echo '<option>' . $tag->name ;
										} ?>
									</select>

							<?php	}
							?>
						</div>
					</div>
				</div>
				<div class="sobercollective__posts-wrapper">
				<?php while ( $wp_get_posts->have_posts() ) : $wp_get_posts->the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'sober-collective' ); ?>

				<?php endwhile; ?>
				</div>

				<!-- PAGINATION -->
				<?php if (function_exists("pagination")) {
					pagination($wp_get_posts->max_num_pages);
				} 
				wp_reset_postdata(); 
				endif; ?>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
// get_sidebar();
get_footer();
