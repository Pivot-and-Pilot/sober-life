<?php
function soberlife_get_client_arguments() {

}

function soberlife_get_posts( $request ) {

}

function pagination($pages = '', $range = 4) {
  // $showitems = ($range * 2)+1;
  $showitems = $current - round($range/2);
 
  global $paged;
  if(empty($paged)) $paged = 1;

  if($pages == '')
  {
    global $wp_query;
    $pages = $wp_query->max_num_pages;
    if(!$pages)
    {
      $pages = 1;
    }
  }

  if(1 != $pages)
  {
      echo "<div class=\"pagination\">";
      // if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
      if($paged > 1 && $showitems < $pages) echo "<a href='".get_pagenum_link($paged - 1)."'><-</a>";

      for ($i=1; $i <= $pages; $i++)
      {
        if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
        {
          echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
        }
      }
      // FIX ARROW
      $arrow = get_stylesheet_directory_uri() . '/img/src/arrow--white.svg';
      if ($paged < $pages && $showitems < $pages) echo "<a href=\"".get_pagenum_link($paged + 1)."\">-></a>";
      // if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
      echo "</div>\n";
  }
}

?>