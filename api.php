<?php
function soberlife_get_client_arguments() {

}

function soberlife_get_posts( $request ) {

}

function pagination($pages = '', $range = 2) {
  $showitems = $paged - round($range/2);

  // ?? what is $current.....
  // $showitems = $current - round($range/2);

  $arrow = get_stylesheet_directory_uri() . '/img/src/arrow--white.svg';
 
  global $paged;
  if(empty($paged)) $paged = 1;

  if($pages == '') {
    global $wp_get_posts;
    $pages = $wp_get_posts->max_num_pages;
    if(!$pages)
    {
      $pages = 1;
    }
  }


  if(1 != $pages) {
    echo "<div class=\"pagination\">";
    // if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
    if($paged > 1 && $showitems < $pages) {
      echo "<a class=\"pagination-prev\" href='".get_pagenum_link($paged - 1)."'>";
      echo "<img src=\"". $arrow . "\"/>";      
      echo "</a>";
    }
    if (($paged - (($pages-$pages)+1)) > 2) {
      echo "<div class=\"sobercollective__ellipses\"><a href=\"".get_pagenum_link($pages)."\"</a>...</div>";
    }

    for ($i=1; $i <= $pages; $i++)
    {
      if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
      {
        echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
      }
    }
    // FIX ARROW
    if (($pages - $paged) > 2) {
      echo "<div class=\"sobercollective__ellipses\">...<a href=\"".get_pagenum_link($pages)."\"</a>". $pages ."</div>";
    }
    if ($paged < $pages && $showitems < $pages) {
      echo "<a class=\"pagination-next\" href=\"".get_pagenum_link($paged + 1)."\">";
      echo "<img src=\"". $arrow . "\"/>";
      echo "</a>";
    }
    // if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
    echo "</div>\n";
  }
}

?>