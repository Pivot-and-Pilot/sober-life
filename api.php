<?php
// **********************************************************************
// Get current page, get offset, get max pages
// <- or number less than curr page == PREV posts (+ 11)
// -> number > curr page == NEXT posts (- 11)
// if on page 4, press page 2  (- 22)
// **********************************************************************
// function pagination($pages = '', $range = 2) {
  // $showitems = $paged - round($range/2);
  // ?? what is $current.....
  // $showitems = $current - round($range/2);
  // Get arrow svg for prev/next buttons
  // $arrow = get_stylesheet_directory_uri() . '/img/src/arrow--white.svg';

  // global $paged;
  // if(empty($paged)) $paged = 1;
  // if($pages == '') {
  //   global $wp_get_posts;
  //   $pages = $wp_get_posts->max_num_pages;
  //   if(!$pages)
  //   {
  //     $pages = 1;
  //   }
  // }
  // If MORE than 1 page
//   if(1 != $pages) {
//     echo "<div class=\"pagination\" id=\"sobercollective__pagination\">";
//     // if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
//     if($paged > 1 && $showitems < $pages) {
//       echo "<a class=\"pagination-prev\" href='".get_previous_posts_link()."'>";
//       // echo "<a class=\"pagination-prev\" href='javascript:void(0)'>";      
//       echo "<img src=\"". $arrow . "\"/>";      
//       echo "</a>";
//     }
//     if (($paged - (($pages-$pages)+1)) > 2) {
//       echo "<div class=\"sobercollective__ellipses\"><a href=\"".get_next_posts_link()."\"</a>...</div>";
//       // echo "<div class=\"sobercollective__ellipses\"><a href='javascript:void(0)'</a>...</div>";      
//     }

//     for ($i=1; $i <= $pages; $i++)
//     {
//       if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
//       {
//         echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_next_posts_link()."' class=\"inactive\">".$i."</a>";
//         // echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='javascript:void(0)' class=\"inactive\">".$i."</a>";        
//       }
//     }
//     // FIX ARROW
//     if (($pages - $paged) > 2) {
//       // echo "<div class=\"sobercollective__ellipses\">...<a href=\"".get_pagenum_link($pages)."\"</a>". $pages ."</div>";
//       echo "<div class=\"sobercollective__ellipses\">...<a href='javascript:void(0)'</a>". $pages ."</div>";      
//     }
//     if ($paged < $pages && $showitems < $pages) {
//       // echo "<a class=\"pagination-next\" href=\"".get_pagenum_link($paged + 1)."\">";
//       echo "<a class=\"pagination-next\" href='javascript:void(0)'>";
//       echo "<img src=\"". $arrow . "\"/>";
//       echo "</a>";
//     }
//     // if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
//     echo "</div>\n";
//   }
// }

// function pagination() {
//   // Build pagination arguments 
//   $args = array(
//     'base'    => home_url( '/%_%' ),
//     'format'  => 'page/%#%/',
//     'current' => max( 1, get_query_var('paged') ),
//     'total'   => $temp->max_num_pages,
//   );

//   echo paginate_links( $args );
// }

// ****************** //
// Get Initial Posts
// ****************** //
// function ajax_get_initial_posts() {
//   $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
//   $wp_query = new WP_Query(array(
//     'post_type' 			=> 'post', 
//     'post_status'			=> 'publish', 
//     'posts_per_page'	=> 11,
//     'paged'						=> $paged
//   )); 
//   if ( $wp_query->have_posts() ) {
//     $results_html = '';
//     ob_start();
//     while( $wp_query->have_posts() ) {
//       $wp_query->the_post();
//       get_template_part( 'template-parts/content-sober-collective', get_post_format() );
//     }
//     $pagination = pagination($wp_query->max_num_pages);        
//     $results_html = ob_get_clean();
//   }
//   $response = array(
//     'post_meta' => array(
//       'paged'       => $paged,
//       'total_pages' => $wp_query->max_num_pages
//     ),
//     'pagination'=> $pagination    
//   );
// 	array_push ( $response, $results_html );
// 	echo json_encode( $response );
// 	die();  
// }
// add_action('wp_ajax_ajax_get_initial_posts', 'ajax_get_initial_posts');
// add_action('wp_ajax_nopriv_ajax_get_initial_posts', 'ajax_get_initial_posts');

// ***************** //
// Get Next Posts
// ***************** //
function ajax_get_next_posts() {
  $paged = $_GET['curr_page'];
  $postOffset = $_GET['post_offset'];  
  $catID = $_GET['category'];
  // $tagID = $_GET['tag'];
  
  $args = array(
    'post_type' => 'post',
    'paged'     => $paged,
  );

  if( !empty( $postOffset) ) {
    $args['offset'] = $postOffset;    
    $args['posts_per_page'] = 11;
  }
  // if category
  if ( !empty( $catID ) ) {
    $args['tax_query'] = array(
      array(
      'taxonomy'  => 'category',
      'field'     => 'term_id',
      'terms'     => $catID
      )
    );
  }
  
  // if tag 
  // if ( !empty( $tagID ) ) {
  //   $args['tax_query'] = array(
  //     array(
  //     'taxonomy'  => 'post_tag',
  //     'field'     => 'term_id',
  //     'terms'     => $tagID
  //     )
  //   );
  // }

  $count_results = '0';
  $query_results = new WP_Query( $args );
  
  if( $query_results->have_posts() ) {
    $count_results = $query_results->found_posts;
    $results_html = '';
    ob_start();
    while ( $query_results->have_posts() ) {
      $query_results->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    $results_html = ob_get_clean();  
  }

  $response = array();
  array_push( $response, $results_html, $count_results );
  echo json_encode( $response );
  die();
}
add_action('wp_ajax_ajax_get_next_posts', 'ajax_get_next_posts');
add_action('wp_ajax_nopriv_ajax_get_next_posts', 'ajax_get_next_posts');

// ********************************* //
// Sober Collective Category Filter
// ********************************* //
function ajax_filter_category() {
  $paged = isset( $request['paged'] ) ? intval($request['paged']) : 1;
  $categoryID = $_GET['category'];

  $args = array(
    'paged'     => $paged,
    'tax_query' => array(
      array(
        'taxonomy'  => 'category',
        'field'     => 'term_id',
        'terms'     => $categoryID
      )
    ),
    'posts_per_page' => 11
  );
  $query_results = new WP_Query($args);
  if ( $query_results->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $query_results->have_posts() ) {
      $query_results->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
      // echo paginate_links();    
    }
    $results_html = ob_get_clean();
  }
  $response = array(
    'post_meta' => array(
      'paged'       => $paged,
      'total_pages' => $query_results->max_num_pages
    ),
    // 'pagination'=> $pagination
  );
	array_push ( $response, $results_html );
	echo json_encode( $response );
	die();  
}
add_action('wp_ajax_ajax_filter_category', 'ajax_filter_category');
add_action('wp_ajax_nopriv_ajax_filter_category', 'ajax_filter_category');

// **************************** //
// Sober Collective Tag Filter
// **************************** //
function ajax_filter_tag() {
  $paged = isset( $request['paged'] ) ? intval($request['paged']) : 1;  
  $tagID = $_GET['tag'];
  $args = array(
    'paged'     => $paged,
    'tax_query' => array(
      array(
        'taxonomy' => 'post_tag',
        'terms' => $tagID
      )
    ),
    'posts_per_page' => 11
  );
  $query_results = new WP_Query($args);
  if ( $query_results->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $query_results->have_posts() ) {
      $query_results->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    // $pagination = pagination($query_results->max_num_pages);        
    $results_html = ob_get_clean();
  }
  $response = array(
    'post_meta' => array(
      'paged'   => $paged,
      'total_paged' => $query_results->max_num_pages 
    ),
    // 'pagination' => $pagination
  );
	array_push ( $response, $results_html );
	echo json_encode( $response );
	die();  
}
add_action('wp_ajax_ajax_filter_tag', 'ajax_filter_tag');
add_action('wp_ajax_nopriv_ajax_filter_tag', 'ajax_filter_tag');

?>