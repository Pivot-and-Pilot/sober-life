<a class="sobercollective__post" href="<?php the_permalink(); ?>">
		<?php
			$category = get_the_category(); $cat_name =  $category[1]->cat_name;
			// If category is Podcast, split title and update category/title accordingly, show PLAY button
			if( $cat_name == 'Podcast' ) {
				$title = get_the_title(); 
				$pos = strpos($title, ':'); // Get index of ':' in the title
				$substr = substr($title, 0, $pos + 1); // Get substring using found index of ': + space'
				$newtitle = str_replace($substr, "", $title); // New title (without the '##: ')
				$catsubstr = substr($substr, 0, $pos); // Category substring ('##')
				$catname = 'Podcast ' . $catsubstr; // Concatenate Podcast with ##
		?>
				<div class="sobercollective__play-btn"><img src="https://soberlifesd.com/wp-content/themes/sober-life/img/src/play-button.svg"></div>		
				<div class="sobercollective__post--image"><?php the_post_thumbnail(); ?></div>
				<div class="sobercollective__post--cat-name"><?php echo $catname; ?></div>
				<div class="sobercollective__post--title"><?php echo $newtitle; ?></div>
				<div class="sobercollective__post--date"><?php the_date('m/d/y'); ?></div>
			<?php }	else { // No PLAY button ?>
				<div class="sobercollective__post--image"><?php the_post_thumbnail(); ?></div>
				<div class="sobercollective__post--cat-name"><?php echo $cat_name; ?></div>
				<div class="sobercollective__post--title"><?php the_title(); ?></div>
				<div class="sobercollective__post--date"><?php the_date('m/d/y'); ?></div>
			<?php } ?>
</a>