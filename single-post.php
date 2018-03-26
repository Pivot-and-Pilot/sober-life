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
						<?php	the_content(); ?>
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
				?>
					<div class="related-posts">

					<?php
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
							<a href="<?php the_permalink();?>">

								<div class="featured-post-player-wrapper">
									<div class="featured-post__thumbnail-wrapper">
										<?php the_post_thumbnail(); ?>
									</div>
								</div>

								<div class="featured-post__title-date-wrapper">
									<div class="featured-post-track-title">
										<?php the_title(); ?>
									</div>

									<div class="featured-post-track-date">
										<?php the_date() ?>
									</div> 
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
					<div class="quotation-mark">"</div>
					<div class="quote-content"><?php the_field('content_quote') ?></div>
				</div>

				<div class="single-post__related-posts">
				<?php
				//for use in the loop, list 5 post titles related to first tag on current post
				$tags = wp_get_post_tags($post->ID);
				if ($tags) {
				?>
					<div class="related-post__header">Related Posts</div>
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
									?>

									<div class="related-post-play-button-wapper">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="">
									</div>
									<div class="related-post-track-number related-post-podcast-track-number"><?php the_title(); ?></div>

									<?php else :?>

									<div class="related-post-track-number">Article</div>

									<?php
											endif;
										endforeach;
									?>

								</div>

								<div class="related-post-track-title">
									<?php the_title(); ?>
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
