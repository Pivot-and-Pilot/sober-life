jQuery(document).ready(function($){
  let currentPodcastLink, currentPodcastTitle;
  
  (function getPodcastURL(){
    $('#page').on('click', '.single-post__play-button', function () {
      currentPodcastLink = $(this).siblings('.powerpress_links_mp3')[0].children[0].href;
      currentPodcastTitle = $($(this).parentsUntil('.single-post__wrapper')[1]).siblings('.single-post__title')[0].innerText;



      $("#jquery_jplayer_1").jPlayer("destroy");

      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: `${currentPodcastTitle}`,
            mp3: `${currentPodcastLink}`,
          }).jPlayer("play");
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "mp3",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
      });

      // insert loading into title
      $('.jp-title').html('Loading...');

      $("#jquery_jplayer_1").bind($.jPlayer.event.progress, function (event){
        // If media loading is complete
        if (event.jPlayer.status.seekPercent === 0){        
          $('.jp-title').html(`${currentPodcastTitle}`);
        } 
      });

    })
  })();
})