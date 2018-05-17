<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sober-life
 */

?>

<section id="success-stories">
  <div class="success-stories-header">Success Stories</div>

  <div class="success-stories__latest">
  <?php
    $latestPodcast = new WP_Query(array(
      'post_type' => 'post',
      // 'category' => 'podcast',
      // 'offset'=> 1,
      'post_status' => 'publish',
      'posts_per_page'   => 1,
    ));

    while ($latestPodcast->have_posts()) {
      $latestPodcast->the_post();
  ?>
    <a href="<?php the_permalink(); ?>">

      <div class="player-wapper">
        <div class="latest-podcast-thumbnail-wrapper">
          <?php the_post_thumbnail(); ?>
        </div>   
        <?php
          $latestStoryCategories = get_the_category();
          foreach ($latestStoryCategories as $latestStoryCategorie) :
            if ($latestStoryCategorie->slug == 'podcast') :
        ?>
        <div class="play-button-wapper">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="">
        </div>
        <?php
            endif;
          endforeach;
        ?>

        <div class="latest-story-track-number"><?php the_title(); ?></div>
      </div>
      
      <div class="latest-story-track-title"><?php the_title(); ?></div>
      <div class="latest-story-track-date"><?php the_date('m/d/y'); ?></div>
    </a>
  <?php
    }
    wp_reset_query();
  ?>
  </div>
  <div class="carousel-navigation">
    <div class="prev-arrow navigation-arrow">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.36 336.36"><defs>
        <style>
        .cls-1{
          fill:#f5f0e8;
        }
        </style>
        </defs><title>SBL_svg-ARROWS</title><circle cx="168.18" cy="168.18" r="165"/><polygon class="cls-1" points="237.9 177.98 129.86 177.98 165.53 211.13 156.11 221.24 155.75 220.9 99.05 168.18 156.11 115.12 165.53 125.23 129.87 158.37 237.9 158.37 237.9 177.98"/>
      </svg>
    </div>
    <div class="next-arrow navigation-arrow">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.44 341.44"><defs>
        <style>
        .cls-1{
          fill:#f5f0e8;
        }
        </style></defs><title>SBL_svg-ARROWS</title><circle cx="170.72" cy="170.72" r="165"/><polygon class="cls-1" points="239.84 170.72 182.78 223.78 173.37 213.67 209.03 180.53 101 180.53 101 160.92 209.04 160.92 173.37 127.77 182.78 117.66 183.15 118 239.84 170.72"/>
      </svg>
    </div>   
  </div>
  <div class="other-success-stories">
  <?php
    $podcasts = new WP_Query(array(
      'post_type' => 'post',
      // 'category' => 'podcast',
      // 'offset'=> 1,
      'post_status' => 'publish',
      'posts_per_page' => 10,
    ));
    // foreach ($podcasts->posts as $podcast) :
    while ($podcasts->have_posts()) {
      $podcasts->the_post();
      
        // echo '<pre>' . var_export($podcast, true) . '</pre>';
  ?>
    <div class="single-success-story">
      <a href="<?php the_permalink(); ?>">

        <div class="single-story-player-wapper">
          <div class="single-story-thumbnail-wrapper">
            <?php the_post_thumbnail(); ?>
          </div>   

          <?php
            // check if the post is podcast 
            $latestStoryCategories = get_the_category();
            foreach ($latestStoryCategories as $latestStoryCategory) :
              if ($latestStoryCategory->slug == 'podcast') :
                $title = get_the_title(); 
                $pos = strpos($title, ':'); // Get index of ':' in the title
                $substr = substr($title, 0, $pos + 1); // Get substring using found index of ': + space'
                $newtitle = str_replace($substr, "", $title); // New title (without the '##: ')
                $catsubstr = substr($substr, 0, $pos); // Category substring ('##')
                $catname = 'Podcast ' . $catsubstr; // Concatenate Podcast with ##
          ?>

          <div class="single-story-play-button-wapper">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="">
          </div>
          <div class="single-story-track-number single-story-podcast-track-number"><?php echo $catname; ?></div>

          <?php else :?>

          <div class="single-story-track-number">Article</div>

          <?php 
              endif;
            endforeach;
          ?>

        </div>

        <div class="single-story-track-title">
          <?php echo $newtitle; ?>
        </div> 

        <div class="single-story-track-date">
          <?php the_date('m/d/y'); ?>
        </div> 
      </a>
    </div>

  <?php
    }
  // endforeach;
    wp_reset_query();
  ?>
  </div>

  <a href="<?php echo site_url('/sober-collective'); ?>" class="go-to-sober-collective">Go to <span>Sober Collective</span></a>
  
</section>
