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
			  $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
				$wp_query = new WP_Query(array(
					'post_type' 			=> 'post', 
					'post_status'			=> 'publish', 
					'posts_per_page'	=> 11, // MAKE THIS CONDITIONAL..........
					'paged'						=> $paged
				)); 
				$argsCatsMobile = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'option_none_value'	=> 13,
					'show_option_none'	=> 'All Media',
					'orderby' 		=> 'include', 
					'include' 		=> array(10, 11, 12));
				$argsCatsDesktop = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12),
				);
					//'feed_image' => svg images
			?>	
				<div class="sobercollective__top-bar">
					<div class="sobercollective__searchbar"><?php echo do_shortcode('[searchandfilter fields="search"]'); ?></div>
					<!-- <div class="sobercollective__searchbar"><input id="sobercollective__search-input" placeholder="Search" value=""/></div> -->
					<div class="sobercollective__cats-mobile dropdown"><?php wp_dropdown_categories($argsCatsMobile); ?></div>
					<ul class="sobercollective__cats-desktop"><?php wp_list_categories($argsCatsDesktop); ?></ul>
					<div class="sobercollective__tags-mobile dropdown">
						<div class="sobercollective__tags-mobile-dropdown">
							<?php 
								$tagsMobile = get_tags(array(
									'hide_empty' 	=> 0,
									'exclude'			=> 14
								));
								if ($tagsMobile) { ?>
									<select name="tag" id="tag">
										<option value="14" class="current">All Topics</option>
										<?php foreach($tagsMobile as $tag) {
											echo '<option value="'. $tag->term_id .'">' . $tag->name ;
										} ?>
									</select>

							<?php	}
							?>
						</div>
					</div>
					<ul class="sobercollective__tags-desktop">
						<?php 
							$tagsDesktop = get_tags(array(
								'hide_empty'	=> 0,
								// 'orderby' 		=> 'include', 
								// 'include' 		=> array(13, 10, 11, 12))
							));
							foreach($tagsDesktop as $tag) :
								echo '<li value="'. $tag->term_id .'"><a href="'. get_term_link($tag) .'"> '.$tag->name.'</a></li>';
							endforeach;
						?>
					</ul>					
				</div>
				<div class="sobercollective__posts-wrapper">
					<?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); 
						get_template_part( 'template-parts/content', 'sober-collective' ); 
					endwhile; ?>
				</div>

				<!-- PAGINATION -->
			
				<?php	endif; ?>
				<div id="sobercollective__pagination">
					<button id="prev">PREV</button>					
					<div class="pagecount" style="">
						<var id="curpage">1</var>
						<var id="maxpage"><?php echo $wp_query->max_num_pages; ?></var>
						<div id="sobercollective__pages"></div>
					</div>
					<button id="next">NEXT</button>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
get_footer();
