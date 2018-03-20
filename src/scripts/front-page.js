jQuery(document).ready(function($){

  (function sloganAnimation() {
    console.log($('.front-page__header__changing-slogans-wrapper')[0].children.length);
    for (let i = 0; i < $('.front-page__header__changing-slogans-wrapper')[0].children.length - 1; i = i + 2) {
      setTimeout(() => {
        $($('.front-page__header__changing-slogans-wrapper')[0].children).css('opacity','0');
        $($('.front-page__header__changing-slogans-wrapper')[0].children[0 + i]).css('opacity','1');
        $($('.front-page__header__changing-slogans-wrapper')[0].children[1 + i]).css('opacity', '1');
      }, 1500 * i);
    }
    setInterval( () => {
      for (let i = 0; i < $('.front-page__header__changing-slogans-wrapper')[0].children.length - 1; i = i + 2) {
        setTimeout(() => {
          $($('.front-page__header__changing-slogans-wrapper')[0].children).css('opacity','0');
          $($('.front-page__header__changing-slogans-wrapper')[0].children[0 + i]).css('opacity','1');
          $($('.front-page__header__changing-slogans-wrapper')[0].children[1 + i]).css('opacity', '1');
        }, 1500 * i);
      }
    }, ($('.front-page__header__changing-slogans-wrapper')[0].children.length - 3) * 2500 + 1000 )
  })();

})