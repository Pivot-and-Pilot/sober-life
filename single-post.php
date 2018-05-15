<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package sober-life
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<section class="single-post__wrapper">
				<div class="single-post__title">
					<?php the_title(); ?>
				</div>

				<div class="single-post__date">
					<?php echo get_the_date(); ?>
				</div>

				<div class="single-post__player-wrapper">
					<div class="single-post__thumbnail">
						<?php the_post_thumbnail(); ?>
					</div>
					<div class="single-post__podcast-player">
					<?php
            // check if the post is podcast 
            $singlePostCategories = get_the_category();
            foreach ($singlePostCategories as $singlePostCategory) :
              if ($singlePostCategory->slug == 'podcast') :
          ?>
						<div class="single-post__play-button">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="Play"/>
						</div>
						<?php	the_content(); ?>
					<?php
              endif;
            endforeach;
          ?>
					</div>
				</div>
				<div class="single-post__flex-box-wrapper">
					<div class="single-post__first-paragraph">
						<div class="first-paragraph__title"><?php the_field('content_title') ?></div>
						<div class="first-paragraph__content"><?php the_field('content_1')?></div>
					</div>

				<!-- you might also like part -->
				<?php
				//for use in the loop, list 5 post titles related to first tag on current post
				$tagNames = wp_get_post_tags($post->ID);
				if ($tagNames) {
				$first_tagName = $tagNames[0]->term_id;
				$feturedPosts=array(
				'tag__in' => array($first_tagName),
				'post__not_in' => array($post->ID),
				'posts_per_page'=>1,
				'caller_get_posts'=>1
				);
				$my_feturedPosts = new WP_Query($feturedPosts);
				if( $my_feturedPosts->have_posts() ) {
				while ($my_feturedPosts->have_posts()) : $my_feturedPosts->the_post();
				?>

					<div class="featured-post">
						<div class="featured-post__title">You might also like:</div>
						<a href="<?php the_permalink();?>">

							<div class="featured-post__thumbnail-wrapper">
								<?php the_post_thumbnail(); ?>
							</div>

							<div class="featured-post__title-date-wrapper">
								<div>
									<div class="featured-post-track-title">
										<?php the_title(); ?>
									</div>

									<div class="featured-post-track-date">
										<?php the_date() ?>
									</div> 
								</div>
							</div>
							
						</a>
					</div>

				<?php
				endwhile;
				}
				wp_reset_query();
				}
				?>

				</div>
				
				<div class="single-post__first-gallery">
				<?php 
				$images1 = get_field('content_images_1');
				$size1 = 'full'; // (thumbnail, medium, large, full or custom size)

				if( $images1 ):
					foreach( $images1 as $image1 ): 
				?>

					<div class="first-gallery__image-wrapper">
					<?php echo wp_get_attachment_image( $image1['ID'], $size1 ); ?>
					</div>

				<?php 
					endforeach; 
				endif; 
				?>
				</div>

				<div class="single-post__second-paragraph">
					<?php the_field('content_2');?>
				</div>

				<a href="" class="link-out-blog">Link Out of Blog Post</a>
				
				<div class="single-post__second-gallery">
				<?php 
				$images2 = get_field('content_images_2');
				$size2 = 'full'; // (thumbnail, medium, large, full or custom size)

				if( $images2 ):
					foreach( $images2 as $image2 ): 
				?>

					<div class="second-gallery-image-wrapper">
					<?php echo wp_get_attachment_image( $image2['ID'], $size2 ); ?>
					</div>

				<?php 
					endforeach; 
				endif; 
				?>
				</div>

				<div class="single-post__quote">
					<div class="quotation-mark">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/quotemarks.svg" alt="" />
					</div>
					<div class="quote-content"><?php the_field('content_quote') ?></div>
				</div>




				<?php
				// check if the flexible content field has rows of data
				if( have_rows('flexible_contents') ):
					// loop through the rows of data
					while ( have_rows('flexible_contents') ) : the_row();
						if( get_row_layout() == 'short_image_galary' ):
				?>
				<div class="single-post__first-gallery">
				<?php 
				$images1 = get_sub_field('short_image_galary_content');
				$size1 = 'full'; // (thumbnail, medium, large, full or custom size)

				if( $images1 ):
					foreach( $images1 as $image1 ): 
				?>

					<div class="first-gallery__image-wrapper">
					<?php echo wp_get_attachment_image( $image1['ID'], $size1 ); ?>
					</div>

				<?php 
					endforeach; 
				endif; 
				?>
				</div>

				<?php
					elseif( get_row_layout() == 'tall_image_galary' ): 
				?>
				<div class="single-post__second-gallery">
				<?php 
				$images2 = get_sub_field('tall_image_galary_content');
				$size2 = 'full'; // (thumbnail, medium, large, full or custom size)

				if( $images2 ):
					foreach( $images2 as $image2 ): 
				?>

					<div class="second-gallery-image-wrapper">
					<?php echo wp_get_attachment_image( $image2['ID'], $size2 ); ?>
					</div>

				<?php 
					endforeach; 
				endif; 
				?>
				</div>

				<?php
					elseif( get_row_layout() == 'paragraph' ): 
				?>

				<div class="single-post__second-paragraph">
					<?php the_sub_field('paragraph_content');?>
				</div>

				<?php
					elseif( get_row_layout() == 'quote' ): 
				?>
			
				<div class="single-post__quote">
					<div class="quotation-mark">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/quotemarks.svg" alt="" />
					</div>
					<div class="quote-content"><?php the_sub_field('quote_content') ?></div>
				</div>

				<?php
					elseif( get_row_layout() == 'button' ): 
				?>

				<a href="<?php the_sub_field('button_link') ?>" class="link-out-blog"><?php the_sub_field('button_content') ?></a>		

				<?php
						endif;
					endwhile;
				endif;

				?>

				<div class="single-post__related-posts">
				<?php
				//for use in the loop, list 5 post titles related to first tag on current post
				$tags = wp_get_post_tags($post->ID);
				if ($tags) {
				?>
					<div class="related-post__header">Related Posts</div>
					<div class="single-post__carousel-navigation">
						<div class="single-post__prev-arrow">
							<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.36 336.36"><defs>
								<style>
								.cls-1{
									fill:#f5f0e8;
								}
								</style>
								</defs><title>SBL_svg-ARROWS</title><circle cx="168.18" cy="168.18" r="165"/><polygon class="cls-1" points="237.9 177.98 129.86 177.98 165.53 211.13 156.11 221.24 155.75 220.9 99.05 168.18 156.11 115.12 165.53 125.23 129.87 158.37 237.9 158.37 237.9 177.98"/>
							</svg>
						</div>
						<div class="single-post__next-arrow">
							<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.44 341.44"><defs>
								<style>
								.cls-1{
									fill:#f5f0e8;
								}
								</style></defs><title>SBL_svg-ARROWS</title><circle cx="170.72" cy="170.72" r="165"/><polygon class="cls-1" points="239.84 170.72 182.78 223.78 173.37 213.67 209.03 180.53 101 180.53 101 160.92 209.04 160.92 173.37 127.77 182.78 117.66 183.15 118 239.84 170.72"/>
							</svg>
						</div>   
					</div>
					<div class="related-posts">

					<?php
					$first_tag = $tags[0]->term_id;
					$args=array(
					'tag__in' => array($first_tag),
					'post__not_in' => array($post->ID),
					'posts_per_page'=>5,
					'caller_get_posts'=>1
					);
					$my_query = new WP_Query($args);
					if( $my_query->have_posts() ) {
					while ($my_query->have_posts()) : $my_query->the_post();
					?>

						<div class="related-post">
							<a href="<?php the_permalink();?>">

								<div class="related-post-player-wrapper">
									<div class="related-post__thumbnail-wrapper">
										<?php the_post_thumbnail(); ?>
									</div>

									<?php
										// check if the post is podcast 
										$relatedPostCategories = get_the_category();
										foreach ($relatedPostCategories as $relatedPostCategory) :
											if ($relatedPostCategory->slug == 'podcast') :
												$title = get_the_title(); 
												$pos = strpos($title, ':'); // Get index of ':' in the title
												$substr = substr($title, 0, $pos + 1); // Get substring using found index of ': + space'
												$newtitle = str_replace($substr, "", $title); // New title (without the '##: ')
												$catsubstr = substr($substr, 0, $pos); // Category substring ('##')
												$catname = 'Podcast ' . $catsubstr; // Concatenate Podcast with ##
									?>

									<div class="related-post-play-button-wapper">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="">
									</div>
									<div class="related-post-track-number related-post-podcast-track-number"><?php echo $catname; ?></div>

									<?php else :?>

									<div class="related-post-track-number">Article</div>

									<?php
											endif;
										endforeach;
									?>

								</div>

								<div class="related-post-track-title">
									<?php echo $newtitle; ?>
								</div>

								<div class="related-post-track-date">
									<?php the_date() ?>
								</div> 
							</a>
						</div>

					<?php
					endwhile;
					?>

					</div>
					
				<?php
				}
				wp_reset_query();
				}
				?>
				</div>

				







			<?php
			// while ( have_posts() ) :
			// 	the_post();

			// 	get_template_part( 'template-parts/content', 'single-post' );

			// 	// the_post_navigation();

			// 	// If comments are open or we have at least one comment, load up the comment template.


			// endwhile; // End of the loop.
			?>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
