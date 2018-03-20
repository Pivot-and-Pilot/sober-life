jQuery(document).ready(function($){

  (function sloganAnimation() {
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

  (function movingForwardAnimation () {
    setTimeout(() => {
      $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
      $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
    }, 0);
    setTimeout(() => {
      $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
      $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
    }, 1000);
    setTimeout(() => {
      $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
    }, 2000);

    setInterval(() => {
      setTimeout(() => {
        $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
        $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      }, 0);
      setTimeout(() => {
        $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
        $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
      }, 1000);
      setTimeout(() => {
        $('.moving-forward__content__arrows > img')[0].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $('.moving-forward__content__arrows > img')[1].src = "./wp-content/themes/sober-life/img/src/arrow--white.svg";
        $('.moving-forward__content__arrows > img')[2].src = "./wp-content/themes/sober-life/img/src/arrow--black.svg";
      }, 2000);
    }, 3000)


  })();

})
