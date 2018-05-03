jQuery(document).ready(function($){
  let currentPodcastLink, currentPodcastTitle;
  let windowSize = $(window).width();

  (function getPodcastURL(){
    $('#page').on('click', '.single-post__play-button', function () {
      $('#soberlife__jplayer').css('bottom', '0');
      if (windowSize > 769) {      
        $('footer .footer__wrap').css('padding-bottom', '60px');
      }
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
        supplied: "mp3, m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: false,
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

  (function closePlayer () {
    $('.jplayer__x-button').on('click', function () {
      $('#soberlife__jplayer').css('bottom', '-70px');
      if (windowSize > 769) {
        $('footer .footer__wrap').css('padding-bottom', '10px');
      }
      $('.jp-pause').click();
    })
  })();

  // $("#jquery_jplayer_1").jPlayer({
  //   ready: function () {
  //     $(this).jPlayer("setMedia", {
  //       title: "Bubble",
  //       m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
  //       oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
  //     });
  //   },
  //   cssSelectorAncestor: "#jp_container_1",
  //   swfPath: "/js",
  //   supplied: "m4a, oga",
  //   useStateClassSkin: true,
  //   autoBlur: false,
  //   smoothPlayBar: true,
  //   keyEnabled: true,
  //   remainingDuration: false,
  //   toggleDuration: true
  // });

})