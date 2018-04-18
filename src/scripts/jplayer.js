$(document).ready(function(){

  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Bubble",
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    swfPath: "/js",
    supplied: "m4a, oga",
    useStateClassSkin: false,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true,
  });

  (function counter () {

    let secCount = 0;
    let counting;
    $('.single-post__podcast-player').on('click', 'button[title="Play"]', function () {
      counting = setInterval ( () => {
        secCount += 0.1;
      }, 100 )
    })
    $('.single-post__podcast-player').on('click', 'button[title="Pause"]', function () {
      clearInterval( counting );
      console.log(secCount);
    })

  })();

});