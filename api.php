<?php
// ***************** //
//     Get Posts
// ***************** //
function ajax_get_posts() {
  $paged = $_GET['curr_page'];
  $offset = $_GET['offset'];  
  $catID = $_GET['category'];
  $tagID = $_GET['tag'];
  
  $args = array(
    'post_type' => 'post',
    'paged'     => $paged,
    'offset'    => $offset,
    'posts_per_page' => 11,
    'cat'       => $category,
    'tag_id'    => $tag  
  );

  // if( !empty( $offset) ) {
  //   $args['offset'] = $offset;    
  //   $args['posts_per_page'] = 11;
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
add_action('wp_ajax_ajax_get_posts', 'ajax_get_posts');
add_action('wp_ajax_nopriv_ajax_get_posts', 'ajax_get_posts');

// ********************************* //
//   Sober Collective Posts Filter
// ********************************* //
function ajax_filter_posts() {
  $paged = isset( $request['paged'] ) ? intval($request['paged']) : 1;
  $catID = $_GET['category'];
  $tagID = $_GET['tag'];

  // build args
  $args = array(
    'paged'     => $paged,
    'cat'       => $catID,
    'tag_id'    => $tagID, 
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
add_action('wp_ajax_ajax_filter_posts', 'ajax_filter_posts');
add_action('wp_ajax_nopriv_ajax_filter_posts', 'ajax_filter_posts');

?>