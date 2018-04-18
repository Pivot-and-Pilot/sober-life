<?php
// ******************** //
//  Get Initial Posts
// ******************** //
function ajax_get_initial_posts() {
  $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
  $wp_query = new WP_Query(array(
    'post_type'     => 'post',
    'post_status'   => 'publish',
    'posts_per_page'=> $_GET['posts_per_page'],
    'paged'         => $paged
  ));

  if( $wp_query->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $wp_query->have_posts() ) {
      $wp_query->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    $results_html = ob_get_clean();   
  }

  // Build Response
  $response = array();
  array_push( $response, $results_html );
  array_push( $response, $wp_query->max_num_pages );  
  echo json_encode( $response );
  die();
}
add_action('wp_ajax_ajax_get_initial_posts', 'ajax_get_initial_posts');
add_action('wp_ajax_nopriv_ajax_get_initial_posts', 'ajax_get_initial_posts');


// ***************** //
//     Get Posts
// ***************** //
function ajax_get_posts() {
  // Variables
  $paged = $_GET['curr_page'];
  $offset = $_GET['offset'];  
  $catID = $_GET['category'];
  $tagID = $_GET['tag'];
  
  // Build Query
  $args = array(
    'post_type' => 'post',
    'paged'     => $paged,
    'offset'    => $offset,
    'category__and' => $catID,
    'tag__in'    => $tagID,
    'posts_per_page' => $_GET['posts_per_page'],
  );

  $query_results = new WP_Query( $args );
  
  if( $query_results->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $query_results->have_posts() ) {
      $query_results->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    $results_html = ob_get_clean();  
  }

  // Build Response
  $response = array();
  array_push( $response, $results_html );
  echo json_encode( $response );
  die();
}
add_action('wp_ajax_ajax_get_posts', 'ajax_get_posts');
add_action('wp_ajax_nopriv_ajax_get_posts', 'ajax_get_posts');

// ****************** //
//   Filter Posts
// ****************** //
function ajax_filter_posts() {
  $paged = isset( $request['paged'] ) ? intval($request['paged']) : 1;
  $catID = $_GET['category'];
  $tagID = $_GET['tag'];

  // Build Query
  $args = array(
    'paged'     => $paged,
    'category__and'       => $catID,
    'tag__in'    => $tagID, 
    'posts_per_page' => $_GET['posts_per_page']
  );

  $query_results = new WP_Query($args);

  if ( $query_results->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $query_results->have_posts() ) {
      $query_results->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    $results_html = ob_get_clean();
  }

  // Build Response
  $response = array(
    'post_meta' => array(
      'paged'       => $paged,
      'total_pages' => $query_results->max_num_pages
    )
  );
	array_push ( $response, $results_html );
	echo json_encode( $response );
	die();  
}
add_action('wp_ajax_ajax_filter_posts', 'ajax_filter_posts');
add_action('wp_ajax_nopriv_ajax_filter_posts', 'ajax_filter_posts');

// ****************** //
// Get Search Results
// ****************** //
function ajax_get_search_results() {
  $paged = isset( $request['paged'] ) ? intval($request['paged']) : 1;  
  // Search query string
  $query = $_GET['query'];

  // Build Query
  $args = array(
    // 'posts_per_page'=> $_GET['posts_per_page'],
    'posts_per_page'=> -1,
    // 'offset'        => '11',
    'post_type'     => 'post',
    'post_status'   => 'publish', 
    's'=> $query
  );

  $search = new WP_Query($args);
  // Relevanssi plugin to add cat/tag search   
  relevanssi_do_query($search);

  if ( $search->have_posts() ) {
    $results_html = '';
    ob_start();
    while ( $search->have_posts() ) {
      $search->the_post();
      get_template_part( 'template-parts/content-sober-collective', get_post_format() );
    }
    $results_html = ob_get_clean();
  }

  // Build Response
  $response = array(
    'post_meta' => array(
      'paged'       => $paged,
      'total_posts' => $search->found_posts
    )
  );
	array_push( $response, $results_html );
	echo json_encode( $response );
	die();  
}
add_action('wp_ajax_ajax_get_search_results', 'ajax_get_search_results');
add_action('wp_ajax_nopriv_ajax_get_search_results', 'ajax_get_search_results');

// ********************************** //
// Get Search Result Next/Prev Pages
// ********************************** //
// PAGINATION FOR SEARCH RESULTS
// function ajax_get_search_result_pages() {
//   $query = $_GET['query'];
//   $paged = $_GET['curr_page'];
//   $offset = $_GET['offset'];


//   $args = array (
//     // 'paged'         => $paged,
//     'post_type'     => 'post',
//     'post_status'   => 'publish',
//     's'             => $query,
//     // 'offset'        => $offset,
//     'posts_per_page'=> $_GET['posts_per_page'],
//   );

//   $search = new WP_Query($args);
//   relevanssi_do_query($search);

//   if ( $search->have_posts() ) {
//     $results_html = '';
//     ob_start();
//     while ( $search->have_posts() ) {
//       $search->the_post();
//       get_template_part( 'template-parts/content-sober-collective', get_post_format() );
//     }
//     $results_html = ob_get_clean();
//   }

//   // Build Response
//   $response = array();
// 	array_push ( $response, $results_html );
// 	echo json_encode( $response );
// 	die();  
// }
// add_action('wp_ajax_ajax_get_search_result_pages', 'ajax_get_search_result_pages');
// add_action('wp_ajax_nopriv_ajax_get_search_result_pages', 'ajax_get_search_result_pages');

?>