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
      while( have_rows('opening_section') ): the_row(); 
        $serviceInitials = get_sub_field('service_initials'); ?>
        <!-- <div class="services-child__service-image"></div> -->
        <img src="<?php echo get_sub_field('service_background_image'); ?>" alt="" class="services-child__service-image"/>
        <div class="services-child__service-initial"><?php echo $serviceInitials; ?></div>
        <div class="services-child__service-name"><?php echo get_sub_field('service_name'); ?></div>
        <div class="services-child__service-description"><?php echo get_sub_field('service_description'); ?></div>
        <a href="#" class="services-child__opening-get-started" onclick="toggleForm()">Join Our Community</a>
      <?php endwhile;
    endif; ?>
  </section>
  <div class="services-child__content-wrap">
    <section class="services-child__our-services">
      <?php if( have_rows('our_services_section') ): 
        while( have_rows('our_services_section') ): the_row(); ?>
          <div class="services-child__our-services-title">Our Services</div>
          <div class="services-child__our-services-text"><?php echo get_sub_field('our_services_text'); ?></div>
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_timelines-01.svg ?>" alt=""  class="services-child__our-services-image-desktop"/>
          <div class="services-child__our-services-mobile-image-wrap">
            <div class="services-child__our-services-image-background"></div>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/SBL_timelines-02.svg ?>" alt=""  class="services-child__our-services-image-mobile"/>        
          </div>
        <?php endwhile;
      endif; ?>
    </section>
    <section class="services-child__whos-it-for">
      <?php if( have_rows('whos_it_for_section') ): 
        while( have_rows('whos_it_for_section') ): the_row(); ?>
          <div class="services-child__whos-it-for-title">Who is <?php echo $serviceInitials; ?> for?</div>
          <ul>
            <?php if( have_rows('whos_it_for_list') ):
              while( have_rows('whos_it_for_list') ): the_row(); ?>
                <li><?php echo get_sub_field('whos_it_for_list_item'); ?></li>
              <?php endwhile;
            endif; ?>
          </ul>
          <img src="<?php echo get_sub_field('whos_it_for_image'); ?>" alt="" class="services-child__whos-it-for-image"/>
        <?php endwhile;
      endif; ?>
    </section>

    <section class="services-child__our-approach">
      <?php if( have_rows('our_approach_section') ): 
        while( have_rows('our_approach_section') ): the_row(); ?>
          <img src="<?php echo get_sub_field('approach_background_image') ?>" alt="" class="services-child__our-approach-logo"/>
          <div class="services-child__our-approach-title">Our Approach</div>
          <ul>
            <?php if( have_rows('approach_list') ): 
              while( have_rows('approach_list') ): the_row(); ?>
                <li>
                  <div class="services-child__our-approach-list-title-wrapper">
                    <div class="services-child__our-approach-list-title"><?php echo get_sub_field('approach_title'); ?></div>
                    <div class="services-child__our-approach-list-icon-wrapper">                
                      <div class="services-child__our-approach-list-icon">
                        <span></span>
                        <span></span>
                      </div>
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

    <!-- ADD SOBER COLLECTIVE HERE -->
    <section class="services-child__success-stories">
			<?php  
				get_template_part( 'template-parts/content', 'success-stories' );
			?>
    </section>
      
    <section class="services-child__our-team">
      <?php if( have_rows('our_team_section') ): 
        while( have_rows('our_team_section') ): the_row(); ?>
          <img src="<?php echo get_sub_field('team_image');  ?>" alt="" class="services-child__our-team-image"/>
          <div class="services-child__our-team-wrapper">
            <div class="services-child__our-team-title">Our Team</div>
            <div class="services-child__our-team-description"><?php echo get_sub_field('team_description'); ?></div>
            <a href="<?php echo site_url('/about'); ?>" class="services-child__our-team-learn-more">About Us</a>  
          </div>
        <?php endwhile;
      endif; ?>  
    </section>
  </div>
</div>