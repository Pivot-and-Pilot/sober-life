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
    <div class="prev-arrow">prev</div>
    <div class="next-arrow">next</div>   
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
          ?>

          <div class="single-story-play-button-wapper">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="">
          </div>
          <div class="single-story-track-number single-story-podcast-track-number"><?php the_title(); ?></div>

          <?php else :?>

          <div class="single-story-track-number">Article</div>

          <?php
              endif;
            endforeach;
          ?>

        </div>

        <div class="single-story-track-title">
          <?php the_title(); ?>
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
