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

        <div class="latest-story-track-number"><?php echo $latestPodcast->posts[0]->post_title; ?></div>
      </div>
      
      <div class="latest-story-track-title"><?php echo $latestPodcast->posts[0]->post_title; ?></div>
      <div class="latest-story-track-date"><?php echo $latestPodcast->posts[0]->post_date; ?></div>
    </a>
  <?php
    }
    wp_reset_query();
  ?>
  </div>
  
</section>
