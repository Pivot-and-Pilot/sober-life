<a class="sobercollective__post" href="<?php the_permalink(); ?>">
	<div class="sobercollective__post--image"><?php the_post_thumbnail(); ?></div>
	<div class="sobercollective__post--cat-name"><?php $category = get_the_category(); echo $category[1]->cat_name; ?></div>
	<div class="sobercollective__post--title"><?php the_title(); ?></div>
	<div class="sobercollective__post--date"><?php the_date('m/d/y'); ?></div>
</a>