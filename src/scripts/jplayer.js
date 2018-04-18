$(document).ready(function(){

  let link;

  (function getPodcastURL () {
    $('.single-post__podcast-player').on('click', 'button[title="Play"]', function () {
      link = $($(this).parentsUntil('.single-post__podcast-player')[4]).siblings('.powerpress_links_mp3')[0].children[0].href;
      document.cookie = `currentPodcast=${link}`;
      // let slashPos = link.lastIndexOf('/');
      // link = `http://specialtyproducenetwork.blob.core.windows.net/podcasts/SoberLife${link.slice(slashPos)}`
      // console.log(link.slice(slashPos));
      // console.log(link);
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Bubble",
            // m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            // oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
            mp3: `${link}`,
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "mp3",
        useStateClassSkin: false,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
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

  // $(window).on('load', function(){
  //   var x = document.cookie;
  //   console.log(x);
  //   let currentLink = getCookie();
  //   $("#jquery_jplayer_1").jPlayer({
  //     ready: function () {
  //       $(this).jPlayer("setMedia", {
  //         title: "Bubble",
  //         // m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
  //         // oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
  //         mp3: `${currentLink}`,
  //       });
  //     },
  //     cssSelectorAncestor: "#jp_container_1",
  //     swfPath: "/js",
  //     supplied: "mp3",
  //     useStateClassSkin: false,
  //     autoBlur: false,
  //     smoothPlayBar: true,
  //     keyEnabled: true,
  //     remainingDuration: true,
  //     toggleDuration: true,
  //   });
  // })



  // (function counter () {

  //   let secCount = 0;
  //   let counting;
  //   $('.single-post__podcast-player').on('click', 'button[title="Play"]', function () {
  //     counting = setInterval ( () => {
  //       secCount += 0.1;
  //     }, 100 )
  //   })
  //   $('.single-post__podcast-player').on('click', 'button[title="Pause"]', function () {
  //     clearInterval( counting );
  //   })

  // })();

});