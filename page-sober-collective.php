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
					'option_none_value'	=> 26,
					'show_option_none'	=> 'All Media',
					'orderby' 		=> 'include', 
					'include' 		=> array(28, 29, 27));
				$argsCatsDesktop = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(26, 28, 29, 27),
				);
			?>	
				<div class="sobercollective__top-bar">
					<div class="sobercollective__searchbar"><?php get_search_form(); ?></div>
					<div class="sobercollective__cats-mobile dropdown"><?php wp_dropdown_categories($argsCatsMobile); ?></div>
					<ul class="sobercollective__cats-desktop"><?php wp_list_categories($argsCatsDesktop); ?></ul>
					<div class="sobercollective__cats-desktop-icons-wrapper">
						<div class="sobercollective__cats-desktop-icons">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_blog-01.svg">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_blog-02.svg">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_blog-03.svg">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_blog-04.svg">						
						</div>
					</div>					
					<div class="sobercollective__tags-mobile dropdown"> 
						<div class="sobercollective__tags-mobile-dropdown">
							<?php 
								$tagsMobile = get_tags(array(
									'hide_empty' 	=> 0,
									'exclude'			=> 30
								));
								if ($tagsMobile) { ?>
									<select name="tag" id="tag">
										<option value="30" class="current">All Topics</option>
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
							));
							foreach($tagsDesktop as $tag) :
								echo '<li value="'. $tag->term_id .'"><a href="'. get_term_link($tag) .'"> '.$tag->name.'</a></li>';
							endforeach;
						?>
					</ul>					
				</div>
				<div class="sobercollective__query-bar">
					<div id="sobercollective__query" value=""></div>
					<div class="sobercollective__clear-query"></div>
				</div>
				<div id="sobercollective__noresults"></div>
				<div class="sobercollective__posts-wrapper"></div><!-- sobercollective posts wrapper -->
			<?php	endif; ?>

				<div id="sobercollective__pagination">
					<button id="prev"><img class="active" src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg"></button>					
					<div class="pagecount" style="">
						<var id="curpage" style="display:none;">1</var>
						<var id="maxpage" style="display:none;"><?php echo $wp_query->max_num_pages; ?></var>
						<div id="sobercollective__pages"></div>
					</div>
					<button id="next"><img class="active" src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg"></button>
				</div><!-- sobercollective pagination -->
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
get_footer();
