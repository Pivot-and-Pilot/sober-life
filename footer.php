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
			<a href="#" class="footer__social-media-instagram"></a>
			<a href="#" class="footer__social-media-facebook"></a>
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
