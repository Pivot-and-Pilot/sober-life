<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sober-life
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">

		<div class="footer__wrap">
			<div class="footer__desktop-wrap">
				<div class="footer__social-media">
					<div class="footer__social-media-title">Follow Us</div>
					<a href="https://www.instagram.com/thesoberlifecoach" class="footer__social-media-instagram"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.52 95.52"><title>SBL_svg-files</title><path d="M60.44,50.44A12.69,12.69,0,1,1,47.76,38.05,12.55,12.55,0,0,1,60.44,50.44"/><path d="M76.26,25.51a7.35,7.35,0,0,1-7.43-7.25,7.43,7.43,0,0,1,14.86,0,7.35,7.35,0,0,1-7.43,7.25M47.76,71.92c-12.13,0-22-9.63-22-21.48S35.63,29,47.76,29s22,9.64,22,21.49-9.88,21.48-22,21.48M.88,16.73V78.79A15.85,15.85,0,0,0,16.73,94.64H78.79A15.85,15.85,0,0,0,94.64,78.79V16.73A15.85,15.85,0,0,0,78.79.88H16.73A15.85,15.85,0,0,0,.88,16.73"/></svg></a>
					<a href="https://www.facebook.com/Soberlifecoach/" class="footer__social-media-facebook"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.9 94.9"><title>SBL_svg-files</title><path d="M94.33,16.42V78.48A15.85,15.85,0,0,1,78.48,94.32H66.8V53h9.93V43.07H66.8V35.76c0-3.5,2-4.76,4.78-4.76a7.71,7.71,0,0,1,5,1.76h.3l1.61-8,.24-1.18C76.83,22.05,73.81,21,69.63,21H69.2c-6.71.12-11.38,3.39-13.2,9.35a21.18,21.18,0,0,0-.87,6.32v6.42H47.05V53h8.08V94.32H16.42A15.85,15.85,0,0,1,.57,78.48V16.42A15.85,15.85,0,0,1,16.42.57H78.48A15.85,15.85,0,0,1,94.33,16.42"/></svg></a>
				</div>
				<div class="footer__contact-desktop">
					<div class="footer__contact-desktop-title">Contact Us</div>
					<a href="tel:18003230585" class="footer__contact-desktop-phone">1.800.323.0585</a>
					<a href="mailto:info@soberlifesd.com" class="footer__contact-desktop-email">info@soberlifesd.com</a>
					<div class="footer__contact-desktop-address"><?php echo get_field('address', 27); ?></div>
				</div>
				<div class="footer__newsletter-signup">
					<div class="footer__newsletter-signup-title">Join Our Newsletter</div>
					<?php echo do_shortcode('[mc4wp_form id="43"]'); ?>
				</div>
				<div class="footer__contact">
					<div class="footer__contact-title">Contact Us</div>
					<a href="tel:18003230585" class="footer__contact-phone">1.800.323.0585</a>
					<a href="mailto:info@soberlifesd.com" class="footer__contact-email">info@soberlifesd.com</a>
				</div>
			</div>
			<div class="footer__map">
				<div class="footer__map-address"><?php echo get_field('address', 27); ?></div>
				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVSwSIPSQM_lhAjS0n3IcMCXr5rvFrn9E"></script>	
				<?php 
					$location = get_field('map', 27); 
					if( !empty($location) ):
				?>
				<div class="acf-map">
					<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
				</div>
				<?php endif; ?>
			</div>
			<div class="footer__copyright">
				<div class="footer__copyright-soberlife">2018 &copy; Sober Life</div>
				<div class="footer__copyright-pnp">Design and code by <a href="https://pivotandpilot.com">Pivot & Pilot</a></div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->
<div id="soberlife__jplayer"><?php get_template_part( 'template-parts/content', 'jplayer' ); ?></div>

<?php wp_footer(); ?>

</body>
</html>
