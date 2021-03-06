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
					<img src="<?php the_field('header_image');?>" alt="">
				</div>
				<div class="front-page__header__wrapper">
					<div class="front-page__header__slogans">
						<p class="front-page__header__slogans-reclaim">Reclaim</p>
						<div class="front-page__word-wrapper">
							<div class="front-page__your-word">your</div>
							<div class="front-page__header__changing-slogans-wrapper">
							<?php
							// check if the repeater field has rows of data
							if( have_rows('header_changing_slogans') ):
								// loop through the rows of data
								while ( have_rows('header_changing_slogans') ) : the_row();
									// display a sub field value
							?>
								
								<div class="front-page__header__changing-slogans"><?php the_sub_field('slogan'); ?></div>
								

							<?php
								endwhile;
							endif;
							?>
							</div>
						</div>
						<div class="front-page__header__changing-slogans-detail">The strength is in you. <br> We'll help you find it</div>
						
					</div>
					<button class="get-started" onclick="toggleForm()">Join Our Community</button>
				</div>
			</section>

			<section class="front-page__moving-forward">
				<div class="moving-forward__content">
					<div class="moving-forward__content__arrows">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--black.svg" alt="">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg" alt="">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--white.svg" alt="">
					</div>
					<div class="moving-forward__content__header"><?php the_field('moving_forward_header')?></div>
					<div class="moving-forward__content__detail"><?php the_field('moving_forward_content')?></div>
				</div>
				<div class="moving-forward__image">
					<img src="<?php the_field('moving_forward_image')?>" alt="">
				</div>
			</section>

			<section class="front-page__services">
				<div class="services__title">Services</div>
				<div class="services-wapper">
				<?php
				$services = get_field('services');	
				if( $services ): 
				?>
					<div class="service">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/php.svg" alt="" />
						<div class="service__title"><?php echo $services['php_title']?></div>
						<div class="service__description"><?php echo $services['php_description']?></div>
						<a class="front-page__button" href="<?php echo site_url('/services/partial-hospital-program'); ?>">Learn More</a>
					</div>
					<div class="service">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/iop.svg" alt="" />
						<div class="service__title"><?php echo $services['iop_title']?></div>
						<div class="service__description"><?php echo $services['iop_description']?></div>
						<a class="front-page__button" href="<?php echo site_url('/services/intensive-outpatient-program'); ?>">Learn More</a>						
					</div>
					<div class="service">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/op.svg" alt="" />
						<div class="service__title"><?php echo $services['op_title']?></div>
						<div class="service__description"><?php echo $services['op_description']?></div>
						<a class="front-page__button" href="<?php echo site_url('/services/outpatient-program'); ?>">Learn More</a>						
					</div>
				<?php 
				endif; 
				?>
				</div>
			</section>

			<section class="front-page__our-story">
			<?php
			$ourStory = get_field('our_story');	
			if( $ourStory ): 
			?>
				<div class="our-story__image">
					<img src="<?php echo $ourStory['our_story_image'];?>" alt="">
				</div>
				<div class="our-story__text">
					<div class="our-story__header"><?php echo $ourStory['our_story_header'];?></div>
					<div class="our-story__description"><?php echo $ourStory['our_story_description'];?></div>
					<a class="front-page__button" href="<?php echo site_url('/about'); ?>">About Us</a>
				</div>
			<?php 
			endif; 
			?>
			</section>
			
			<section class="front-page__success-stories">
			<?php  
				get_template_part( 'template-parts/content', 'success-stories' );
			?>
			</section>
			
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
