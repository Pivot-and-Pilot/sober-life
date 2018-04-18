$(document).ready(function(){

  let link, currentPodcastTitle;
  document.cookie = `currentPodcast=${getCookie('currentPodcast')}; max-age=60*60; path=/`;
  document.cookie = `currentPodcastTitleCookie=${getCookie('currentPodcastTitleCookie')}; max-age=60*60; path=/`;
  (function getPodcastURL () {
    $('.single-post__podcast-player').on('click', 'button[title="Play"]', function () {
      link = $($(this).parentsUntil('.single-post__podcast-player')[4]).siblings('.powerpress_links_mp3')[0].children[0].href;
      currentPodcastTitle = $($(this).parentsUntil('.single-post__wrapper')[6]).siblings('.single-post__title')[0].innerText;
      $('.jp-title').html(`${currentPodcastTitle}`);
      document.cookie = `currentPodcast=${link}; max-age=60*60; path=/`;
      document.cookie = `currentPodcastTitleCookie=${currentPodcastTitle}; max-age=60*60; path=/`;

      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: `${currentPodcastTitle}`,
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

  $(window).on('load', function(){
    var x = document.cookie;
    console.log(x);
    let currentLink = getCookie('currentPodcast');
    let currentPodcastTitle = getCookie('currentPodcastTitleCookie');
    console.log('this is current link ',currentLink);

    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          title: `${currentPodcastTitle}`,
          mp3: `${currentLink}`,
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