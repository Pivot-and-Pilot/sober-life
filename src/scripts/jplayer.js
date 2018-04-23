jQuery(document).ready(function($){
  let currentPodcastLink, currentPodcastTitle;
  // document.cookie = `currentPodcast=${getCookie('currentPodcast')}; max-age=60*60; path=/`;
  // document.cookie = `currentPodcastTitleCookie=${getCookie('currentPodcastTitleCookie')}; max-age=60*60; path=/`;
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

      // $("#jquery_jplayer_1").prepend('<div class="jp-title-loading">Loading...</div>');
      $('.jp-title').html('Loading...');

      $("#jquery_jplayer_1").bind($.jPlayer.event.progress, function (event){
        
        // If media loading is complete
        if (event.jPlayer.status.seekPercent === 0){        
          // $("#jquery_jplayer_1 .jp-title-loading").remove();
          $('.jp-title').html(`${currentPodcastTitle}`);
     
        // Otherwise, if media is still loading
        } else {
            if($(".jp-title .jp-title-loading").length == 0){
              //  $(".jp-title").prepend('<div class="jp-title-loading">Loading...</div>');
              // $(".jp-title .jp-title-loading").remove();
            }
        }
      });

    })
  })();


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }


  // (function counter(){

  //   let secCount = 0;
  //   let counting;
  //   $('.single-post__podcast-player').on('click', 'button[title="Play"]', function () {
  //     counting = setInterval ( () => {
  //       secCount += 0.1;
  //       document.cookie = `counting=${secCount}; max-age=60*60; path=/`;
  //     }, 100 )
  //   })
  //   $('.single-post__podcast-player').on('click', 'button[title="Pause"]', function () {
  //     clearInterval( counting );
  //     console.log(      getCookie('counting') );
  //   })

  // })();

  // $(window).on('load', function(){
  //   var x = document.cookie;
  //   // console.log(x);
  //   let currentLink = getCookie('currentPodcast');
  //   let currentPodcastTitle = getCookie('currentPodcastTitleCookie');
  //   let currentCounting = getCookie('counting');
  //   console.log('current counting ',currentCounting);
    
  //   $("#jquery_jplayer_1").jPlayer({
  //     ready: function () {
  //       $(this).jPlayer("setMedia", {
  //         title: `${currentPodcastTitle}`,
  //         mp3: `${currentLink}`,
  //       });
  //     },
  //     // cssSelectorAncestor: "#jp_container_1",
  //     swfPath: "/js",
  //     supplied: "mp3",
  //     // useStateClassSkin: false,
  //     // autoBlur: false,
  //     // smoothPlayBar: true,
  //     // keyEnabled: true,
  //     // remainingDuration: true,
  //     // toggleDuration: true,
  //   });

  //   $('#skipTime').on('click', function(){
  //     // setTimeout(function(){
  //       $("#jquery_jplayer_1").jPlayer("play", 40000);
  //     // }, 100)
      
  //   })

   

  // })

})