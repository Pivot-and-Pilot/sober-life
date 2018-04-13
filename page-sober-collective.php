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
					'show_option_none'	=> 'All Media',
					'orderby' 		=> 'include', 
					'include' 		=> array(10, 11, 12));
				$argsCatsDesktop = array(
					'hide_empty' 	=> 0, 
					'title_li' 		=> 0, 
					'orderby' 		=> 'include', 
					'include' 		=> array(13, 10, 11, 12),
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

				<?php
					if( isset( $_GET['search']) ) {
						// if (have_posts()) : 
							
							printf( esc_html__( 'Search Results for: '. $_GET['search'] , 'sober-life' ), '<span>' . get_search_query() . '</span>' );

							// while (have_posts()):
							// 	get_template_part('template-parts/content', 'sober-collective');
							// endwhile;
						// endif;
							if ( have_posts() ) : while ( have_posts() ) : the_post();
							the_permalink();
							endwhile;endif;
							
					}
				?>
			<!-- <div id="search">
				<?php if ( have_posts() ) : 
					/* Start the Loop */
					while ( have_posts() ) : 
						the_post();

						/**
						 * Run the loop for the search to output the results.
						 * If you want to overload this in a child theme then include a file
						 * called content-search.php and that will be used instead.
						 */
						get_template_part( 'template-parts/content', 'sober-collective' );

					endwhile;


				else :

					get_template_part( 'template-parts/content', 'none' );

				endif;
				?>
			</div> -->

				<div class="sobercollective__posts-wrapper">

				</div>

				<!-- PAGINATION -->
			
				<?php	endif; ?>
				<div id="sobercollective__pagination">
					<button id="prev"><img class="active" src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg"></button>					
					<div class="pagecount" style="">
						<var id="curpage" style="display:none;">1</var>
						<var id="maxpage" style="display:none;"><?php echo $wp_query->max_num_pages; ?></var>
						<div id="sobercollective__pages"></div>
					</div>
					<button id="next"><img class="active" src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg"></button>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
get_footer();
