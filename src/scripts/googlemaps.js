(function($) {
 
  /*
  *  render_map
  *
  *  This function will render a Google Map onto the selected jQuery element
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	$el (jQuery element)
  *  @return	n/a
  */
   
  function render_map( $el ) {
   
    // var
    var $markers = $el.find('.marker');
   
    // vars
    var args = {
      zoom		: 16,
      center		: new google.maps.LatLng(0, 0),
      mapTypeId	: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      navigationControl: false,
      streetViewControl: false,
    };
   
    // create map	        	
    var map = new google.maps.Map( $el[0], args);
   
    // add a markers reference
    map.markers = [];
   
    // add markers
    $markers.each(function(){
   
        add_marker( $(this), map );
   
    });
   
    // center map
    center_map( map );
   
  }
   
  /*
  *  add_marker
  *
  *  This function will add a marker to the selected Google Map
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	$marker (jQuery element)
  *  @param	map (Google Map object)
  *  @return	n/a
  */
   
  function add_marker( $marker, map ) {
   
    // var
    var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
   
    var template = [
      '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 62.49 178.16">',
      '<defs><style>.cls-1,.cls-3{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{stroke:#fff;stroke-width:5.73px;}.cls-4{fill:#fff;}</style><clipPath id="clip-path"><rect class="cls-1" width="62.49" height="178.16"/></clipPath></defs>',
      '<title>P&amp;amp;P_icons</title>',
      '<g class="cls-2"><line class="cls-3" x1="31.25" y1="49.66" x2="31.25" y2="178.16"/><path class="cls-4" d="M31.25,62.49A31.25,31.25,0,1,0,0,31.25,31.24,31.24,0,0,0,31.25,62.49"/>',
      '</g>',
      '</svg>'
    ].join('\n');

    var svgWidth = 0,
        svgHeight = 0;

    if ($(window).width() >= 1500) {
        svgWidth = 30;
        svgHeight = 72;
    } else if($(window).width() >= 1200) {
        svgWidth = 27.5;
        svgHeight = 66;
    } else if($(window).width() >= 992) {
        svgWidth = 25;
        svgHeight = 60;
    } else if($(window).width() >= 768) {
        svgWidth = 22.5;
        svgHeight = 54;
    } else if($(window).width() >= 576) {
        svgWidth = 20;
        svgHeight = 48;
    } else {
        svgWidth = 17.5;
        svgHeight = 42;
    }
    
    // create marker
    var marker = new google.maps.Marker({
      position	: latlng,
      map			: map,
      icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(template), scaledSize: new google.maps.Size(svgWidth, svgHeight) }
    });
   
    // add to array
    map.markers.push( marker );
   
    // if marker contains HTML, add it to an infoWindow
    if( $marker.html() )
    {
      // create info window
      var infowindow = new google.maps.InfoWindow({
        content		: $marker.html()
      });
   
      // show info window when marker is clicked
      google.maps.event.addListener(marker, 'click', function() {
   
        infowindow.open( map, marker );
   
      });
    }
   
  }
   
  /*
  *  center_map
  *
  *  This function will center the map, showing all markers attached to this map
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	map (Google Map object)
  *  @return	n/a
  */
   
  function center_map( map ) {
   
    // vars
    var bounds = new google.maps.LatLngBounds();
   
    // loop through all markers and create bounds
    $.each( map.markers, function( i, marker ){
   
      var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
   
      bounds.extend( latlng );
   
    });
   
    // only 1 marker?
    if( map.markers.length == 1 )
    {
      // set center of map
        map.setCenter( bounds.getCenter() );
        map.setZoom( 15 );
    }
    else
    {
      // fit to bounds
      map.fitBounds( bounds );
    }
   
  }
   
  /*
  *  document ready
  *
  *  This function will render each map when the document is ready (page has loaded)
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	5.0.0
  *
  *  @param	n/a
  *  @return	n/a
  */
   
  $(document).ready(function(){
   
    $('.acf-map').each(function(){
   
      render_map( $(this) );
   
    });   
  });
   
  })(jQuery);