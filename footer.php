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

		<div class="footer__social-media">
			<div class="footer__social-media-title">Follow Us</div>
			<a href="#" class="footer__social-media-instagram"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_svg-files-07.svg"/></a>
			<a href="#" class="footer__social-media-facebook"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_svg-files-08.svg"/></a>
		</div>
		<div class="footer__newsletter-signup">
			<div class="footer__newsletter-signup-title">Join Our Newsletter</div>
			<?php echo do_shortcode('[mc4wp_form id="43"]'); ?>
		</div>
		<div class="footer__contact">
			<div class="footer__contact-title">Contact Us</div>
			<a href="tel:6041234567" class="footer__contact-phone">604.123.4567</a>
			<a href="mailto:info@soberlifesd.com" class="footer__contact-email">info@soberlifesd.com</a>
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
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
