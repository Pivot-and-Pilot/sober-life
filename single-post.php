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

				<div class="single-post__first-paragraph">
					<div class="first-paragraph__title"><?php the_field('content_title') ?></div>
					<div class="first-paragraph__content"><?php the_field('content_1')?></div>
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
