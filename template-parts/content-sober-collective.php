<a class="sobercollective__post" href="<?php the_permalink(); ?>">
		<?php $category = get_the_category(); $cat_name =  $category[1]->cat_name; ?> 
		<?php
		if( $cat_name == 'Podcast' ) : ?>
			<!-- If Podcast, add PLAY icon button -->
			<div class="sobercollective__play-btn"><img src="http://localhost:8888/soberlife/wp-content/themes/sober-life/img/src/play-button.svg"></div>
		<?php endif;
	?>
	<div class="sobercollective__post--image"><?php the_post_thumbnail(); ?></div>
	<div class="sobercollective__post--cat-name"><?php echo $cat_name; ?></div>
	<div class="sobercollective__post--title"><?php the_title(); ?></div>
	<div class="sobercollective__post--date"><?php the_date('m/d/y'); ?></div>
</a>