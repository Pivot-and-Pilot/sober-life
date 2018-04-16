<?php
/**
 * default search form
 */
?>
<!-- <form role="search" method="get" id="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>"> -->
<form role="search" method="get" id="search-form" action="#">
    <div class="search-wrap">
        <!-- <label class="screen-reader-text" for="s"><?php _e( 'Search for:', 'presentation' ); ?></label> -->
        <input placeholder="<?php echo esc_attr( 'Search', 'presentation' ); ?>" name="s" id="search-input" value="<?php echo esc_attr( get_search_query() ); ?>" autocomplete="off" />
        <!-- <input class="screen-reader-text" type="submit" id="search-submit" value="Search" /> -->
    </div>
</form>


