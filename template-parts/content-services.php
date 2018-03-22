<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sober-life
 */

?>

<div id="services-child">
  <section class="services-child__service">
    <?php if( have_rows('opening_section') ): 
      while( have_rows('opening_section') ): the_row(); ?>
        <div class="services-child__service-image"></div>
        <div class="services-child__service-initial"><?php echo get_sub_field('service_initials'); ?></div>
        <div class="services-child__service-name"><?php echo get_sub_field('service_name'); ?></div>
        <div class="services-child__service-description"><?php echo get_sub_field('service_description'); ?></div>
        <a href="#" class="services-child__opening-get-started">Get Started</a>
      <?php endwhile;
    endif; ?>
  </section>

  <a href="#" class="services-child__call-button">Give Us a Call</a>

  <section class="services-child__whos-it-for">
    <?php if( have_rows('whos_it_for_section') ): 
      while( have_rows('whos_it_for_section') ): the_row(); ?>
        <div class="services-child__whos-it-for-title">Who's it for?</div>
        <ul>
          <?php if( have_rows('whos_it_for_list') ):
            while( have_rows('whos_it_for_list') ): the_row(); ?>
              <li><?php echo get_sub_field('whos_it_for_list_item') ?></li>
            <?php endwhile;
          endif; ?>
        </ul>
        <a href="#" class="services-child__whos-it-for-learn-more">Learn More</a>
        <img src="" alt="" class="services-child__whos-it-for-image"/>
      <?php endwhile;
    endif; ?>
  </section>

  <section class="services-child__our-approach">
    <?php if( have_rows('our_approach_section') ): 
      while( have_rows('our_approach_section') ): the_row(); ?>
        <img src="" alt="" class="services-child__our-approach-logo"/>
        <div class="services-child__our-approach-title">Our Approach</div>
        <ul>
          <?php if( have_rows('approach_list') ): 
            while( have_rows('approach_list') ): the_row(); ?>
              <li>
                <div class="services-child__our-approach-list-title"><?php echo get_sub_field('approach_title'); ?></div>
                <div class="services-child__our-approach-list-icon-wrapper">                
                  <div class="services-child__our-approach-list-icon">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="services-child__our-approach-list-description"><?php echo get_sub_field('approach_description'); ?></div>                
              </li>
            <?php endwhile;
          endif; ?>
        </ul>
      <?php endwhile;
    endif; ?>
  </section>

  <section class="services-child__our-team">

  </section>
</div>