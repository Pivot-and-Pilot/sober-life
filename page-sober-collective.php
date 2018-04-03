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
			<?php if ( $wp_query->have_posts() ) : 
				$argsCatsMobile = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'option_none_value'	=> 13,
					'show_option_none'	=> 'Media',
					'orderby' 		=> 'include', 
					'include' 		=> array(10, 11, 12));
				$argsCatsDesktop = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12));
			?>	
				<div class="sobercollective__top-bar">
					<div class="sobercollective__searchbar"><?php echo do_shortcode('[searchandfilter fields="search"]'); ?></div>
					<!-- <div class="sobercollective__searchbar"><input id="sobercollective__search-input" placeholder="Search" value=""/></div> -->
					<div class="sobercollective__cats-mobile"><?php wp_dropdown_categories($argsCatsMobile); ?></div>
					<ul class="sobercollective__cats-desktop"><?php wp_list_categories($argsCatsDesktop); ?></ul>
					<div class="sobercollective__tags-mobile">
						<div class="sobercollective__tags-mobile-dropdown">
							<?php 
								$tags = get_tags(array(
									'hide_empty' 	=> 0,
									'exclude'			=> 14
								));
								if ($tags) { ?>
									<select name="tag" id="tag">
										<option value="14">Topics</option>
										<?php foreach($tags as $tag) {
											echo '<option value="'. $tag->term_id .'">' . $tag->name ;
										} ?>
									</select>

							<?php	}
							?>
						</div>
					</div>
				</div>
				<div class="sobercollective__posts-wrapper">
					<!-- <?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); 
						get_template_part( 'template-parts/content', 'sober-collective' ); 
					endwhile; ?> -->
				</div>

				<!-- PAGINATION -->
				<!-- <?php if (function_exists("pagination")) {
					pagination($wp_query->max_num_pages);
				} 
				wp_reset_postdata(); 
				endif; ?> -->
				<div class="pagecount" style="visibility: hidden;">
					<var id="curpage"></var>
					<span>...</span>
					<var id="maxpage"></var>
				</div>
					<!-- <?php
						the_posts_pagination(array(
							'mid_size'	=> -1,
							'prev_text'	=> '',
							'next_text'	=> '',
						));
					// wp_reset_postdata(); 						
					?> -->
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
// get_sidebar();
get_footer();
