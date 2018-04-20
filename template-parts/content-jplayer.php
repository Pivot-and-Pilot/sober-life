<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sober-life
 */

?>

<div id="jquery_jplayer_1" class="jp-jplayer"></div>
<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
  <div class="jp-type-single">
    <div class="jp-gui jp-interface">
      <div class="jp-controls-holder">
        <div class="jp-controls">
          <button class="jp-play" role="button" tabindex="0"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/play-button.svg" alt="Play"/></button>
          <button class="jp-pause" role="button" tabindex="0">PAUSE</button>
          <button class="jp-stop" role="button" tabindex="0">STOP</button>
        </div>
        <div class="jp-progress">
          <div class="jp-seek-bar">
            <div class="jp-play-bar"></div>
          </div>
        </div>
        <div class="jp-time-bar">
          <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
          <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
        </div>
      </div>
    </div>
    <div class="jp-details">
      <div class="jp-title" aria-label="title">&nbsp;</div>
    </div>
  </div>
</div>
