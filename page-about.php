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
		<main id="about-page" class="site-main">
			<div class="about__opening">
				<?php if( have_rows('opening_section') ):
					while( have_rows('opening_section') ): the_row(); ?>
						<div class="about__opening-image-wrapper">
							<img src="<?php echo get_sub_field('opening_image'); ?>" alt="opening_image" class="about__opening-image"/>
						</div>
						<div class="about__opening-text-wrapper">
							<div class="about__opening-title"><?php echo get_sub_field('section_title'); ?></div>
							<div class="about__opening-text"><?php echo get_sub_field('opening_text'); ?></div>		
						</div>
					<?php endwhile;
				endif; ?>
			</div><!-- Opening Section -->
			<div class="about__our-philosophy">
				<?php if( have_rows('our_philosophy_section') ):
					while( have_rows('our_philosophy_section') ): the_row(); ?>
						<div class="about__philosophy-title"><?php echo get_sub_field('section_title'); ?></div>
						<img class="about__philosophy-arrows" src="<?php echo get_stylesheet_directory_uri(); ?>/img/SBL_Logo_final-1-03.png"/>
						<div class="about__philosophy-text1"><?php echo get_sub_field('text_1'); ?></div>		
						<img src="<?php echo get_sub_field('image_1'); ?>" alt="philosophy_image1" class="about__philosophy-image1"/>
						<div class="about__philosophy-text2"><?php echo get_sub_field('text_2'); ?></div>		
						<img src="<?php echo get_sub_field('image_2'); ?>" alt="philosophy_image2" class="about__philosophy-image2"/>
					<?php endwhile;
				endif; ?>
			</div><!-- Our Philosophy Section -->
			<div class="about__our-team">
				<?php if( have_rows('our_team_section') ):
					while( have_rows('our_team_section') ): the_row(); ?>
						<div class="about__our-team-title"><?php echo get_sub_field('section_title'); ?></div>
						<div id="about__our-team-wrapper">
							<?php if( have_rows('team_member') ):
								while( have_rows('team_member') ): the_row(); ?>
									<div class="about__our-team-member">
										<img src="<?php echo get_sub_field('team_member_image'); ?>" alt="team_member_image" class="about__our-team-member-image"/>					
										<div class="about__our-team-member-name"><?php echo get_sub_field('team_member_name'); ?></div>
										<div class="about__our-team-member-title"><?php echo get_sub_field('team_member_title'); ?></div>
										<div class="about__our-team-member-about"><?php echo get_sub_field('team_member_about'); ?></div>
									</div>
								<?php endwhile;
							endif; ?>
						</div>
					<?php endwhile;
				endif; ?>
			</div><!-- Our Team Section -->
			<div class="about__get-in-touch-wrapper">
				<a href="#" class="about__get-in-touch">Get In Touch</a>
			</div>
			<div class="about__certifications">
				<?php if( have_rows('certifications_section') ):
					while( have_rows('certifications_section') ): the_row(); ?>
						<div class="about__certifications-title"><?php echo get_sub_field('section_title'); ?></div>
						<?php if( get_sub_field('certification_logos') ): ?>
							<div id="about__certification-logo-wrapper">
								<?php foreach( get_sub_field('certification_logos') as $image ): ?>
									<?php	echo wp_get_attachment_image( $image['ID'], 'full'); ?>
								<?php endforeach; ?>
							</div>	
						<?php	endif; ?>
				<?php endwhile;
				endif; ?>
			</div><!-- Certifications Section -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
