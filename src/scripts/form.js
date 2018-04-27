jQuery(document).ready(function($){
  
  (function genderQuestion () {
    let fullName, firstName, spacePosition;
    $('#loved-one-name').on('change keyup paste', function () {
      fullName = $(this).val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.question__client-gender h1').html(`What does ${fullName} identify as?`);
    })
    $('div.client-target').on('click', function () {
      if ( $(this).data('value') === 'myself' ) {
        $('.question__client-gender h1').html('What do you identify as?')
      }
    })
  })();

  (function customizedText () {
    $('div.client-target').on('click', function () {
      if ( $(this).data('value') === 'myself' ) {
        $('.question__drug-effects-life h1').html('How is drug usage effecting your life?')
        $('.insurance-yes-no-wrapper > p').html('Do you have insurance?');
      }
      if ( $(this).data('value') === 'a loved one' ) {
        $('.question__drug-effects-life h1').html('How is drug usage effecting their life?');
        $('.insurance-yes-no-wrapper > p').html('Do they have insurance?');
      }
    })
  })();
  
  (function getInfo () {
    // get client name
    $('#client-name').on('change keyup paste', function () {
      $('#client-name-hidden').val($(this).val());
    })
    $('#loved-one-name').on('change keyup paste', function () {
      $('#loved-one-name-hidden').val($(this).val());
    })

    // get client target
    $('div[name="client-target"]').on('click', function () {
      let clientTarget = $(this).data('value');
      $(`input[name="client-target-hidden"][value="${clientTarget}"]`).prop('checked', true);
    })

     // get client gender
    $('div[name="client-gender"]').on('click', function () {
      let clientGender = $(this).data('value');
      $(`input[name="client-gender-hidden"][value="${clientGender}"]`).prop('checked', true);
    })

    // get client feeling
    $('div[name="client-feeling"]').on('click', function () {
      let clientFeeling = $(this).data('value');
      $(`input[name="client-feeling-hidden"][value="${clientFeeling}"]`).prop('checked', true);
    })
    $('div[name="loved-one-feeling"]').on('click', function () {
      let lovedOneFeeling = $(this).data('value');
      $(`input[name="loved-one-feeling-hidden"][value="${lovedOneFeeling}"]`).prop('checked', true);
    })

    // get client substance used
    $('div[name="substances-used"]').on('click', function () {
      $(this).toggleClass('choice-chosen');
      let substancesUsed = $(this).data('value');
      if ( $(this).hasClass('choice-chosen') ) {
        $(`input[data-name="substances-used-hidden"][value="${substancesUsed}"]`).prop('checked', true);
      } else {
        $(`input[data-name="substances-used-hidden"][value="${substancesUsed}"]`).prop('checked', false);
      }
    })
    $('.other-substances-used').on('change keyup paste', function () {
      $('.other-substances-used-hidden').val($(this).val());
    })

    // get how drug effect life
    $('div[name="effect-life"]').on('click', function () {
      $(this).toggleClass('choice-chosen');
      let effect = $(this).data('value');
      if ( $(this).hasClass('choice-chosen') ) {
        $(`input[data-name="effect-life-hidden"][value="${effect}"]`).prop('checked', true);
      } else {
        $(`input[data-name="effect-life-hidden"][value="${effect}"]`).prop('checked', false);
      }
    })

    // get client personal info
    $('.form__phone-number').on('change keyup paste', function () {
      $('.form__phone-number--hidden').val($(this).val());
      $(this).css('border', '5px solid rgb(225, 218, 210)')
    })
    $('.form__city').on('change keyup paste', function () {
      $('.form__city--hidden').val($(this).val());
      $(this).css('border', '5px solid rgb(225, 218, 210)')
    })
    $('.form__email').on('change keyup paste', function () {
      $('.form__email--hidden').val($(this).val());
      $(this).css('border', '5px solid rgb(225, 218, 210)')
    })
    $('.form__state').on('change keyup paste', function () {
      $('.form__state--hidden').val($(this).val());
      $(this).css('border', '5px solid rgb(225, 218, 210)')
    })
    $('.form__dob').on('change keyup paste', function () {
      $('.form__dob--hidden').val($(this).val());
      $(this).css('border', '5px solid rgb(225, 218, 210)')
    })
    $('.insurance-check-box').on('click', function (e) {
      $('.insurance-check-box').each( function () {
        $($(this)[0].children[1]).removeClass('checked-box');
        $($(this)[0].children[1]).css('border', '3px solid rgb(225, 218, 210)');
        $($(this)[0].children[2]).removeClass('ticked');
      })
      $($(e.currentTarget)[0].children[1]).toggleClass('checked-box');
      $($(e.currentTarget)[0].children[2]).toggleClass('ticked');
      let answer = $($(e.currentTarget)[0].children[0]).val();
      $(`input[name="insurance-hidden"][value="${answer}"]`).prop('checked', true);
    })
    $('input[name="insurance-company"]').on('change keyup paste', function () {
      $('input[name="insurance-company-hidden"]').val($(this).val());
    })
    $('textarea[name="comments"]').on('change keyup paste', function () {
      $('textarea[name="comments-hidden"]').val($(this).val());
    })

  })();

  function loadingGreating1 () {
    let fullName, firstName, spacePosition;
    fullName = $('#client-name-hidden').val();
    spacePosition = fullName.indexOf(' ');
    firstName = fullName.slice(0, spacePosition);
    $('.loading-screen > div').html(`Hi ${fullName}, tell us more about your situation.`);
  }

  (function navigation () {
    // client name
    $('#client-name').on('change keyup paste', function () {
      $('.your-name__next-button').css({
        'opacity' : '1',
        'pointer-events' : 'unset'
      })
    })

    $('.your-name__next-button').on('click', function () {
      loadingGreating1();
      // loading screen
      setTimeout( function () {
        $('.loading-screen').css({
          'opacity': '1',
          'background-image': "url('wp-content/themes/sober-life/img/src/hand--green.svg')"
        });
      }, 1000)

      $('.question__your-name').css('left', '-100%');
      setTimeout( function () {
        $('.loading-screen').css('opacity', '0');
      }, 3000 )
      setTimeout( function () {
        $('.question__client-target').css('left', '0');
      }, 4000 )
      // process bar
      $('.process').css('width', '25%')
    })

    // client target
    $('div.client-target').on('click', function () {
      if ($(this).data('value') === 'myself') {
        $('.loading-screen > div').html("That's awesome! You're already taking a step in the right direction.");
        // loading screen
        setTimeout( function(){
          $('.loading-screen').css({
            'opacity': '1',
            'background-image': "url('wp-content/themes/sober-life/img/src/sun-symbol--green.svg')"
          });
        }, 1000)
        $('.question__client-target').css('left', '-100%');
        setTimeout( function () {
          $('.loading-screen').css('opacity', '0');
        }, 3000);
        setTimeout( function () {
          $('.question__client-gender').css('left', '0');
        }, 4000 )
        // process bar
        $('.process').css('width', '37.5%')
      }
      if ($(this).data('value') === 'a loved one') {
        $('.question__client-target').css('left', '-100%');
        setTimeout( function () {
          $('.question__loved-one-name').css('left', '0');
        },1000)
        // process bar
        $('.process').css('width', '25%')
      }
    })
    $('.client-target__back').on('click', function () {
      $('.question__client-target').css('left', '100%');
      setTimeout( function () {
        $('.question__your-name').css('left', '0');
      },500)
      // process bar
      $('.process').css('width', '12.5%')
    })

    // loved one's name
    $('#loved-one-name').on('change keyup paste', function () {
      $('.loved-one-name__next-button').css({
        'opacity' : '1',
        'pointer-events' : 'unset'
      })
    })

    $('.loved-one-name__next-button').on('click', function () {
      $('.question__loved-one-name').css('left', '-100%');
      // loading screen
      let fullName, firstName, spacePosition;
      fullName = $('#loved-one-name-hidden').val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.loading-screen > div').html(`With the right support ${fullName} will be well equipt to get on the right track`);
      setTimeout( function(){
        $('.loading-screen').css({
          'opacity': '1',
          'background-image': "url('wp-content/themes/sober-life/img/src/sun-symbol--green.svg')"
        });
      }, 1000)
      setTimeout( function () {
        $('.loading-screen').css('opacity', '0');
      }, 3000)
      setTimeout( function () {
        $('.question__client-gender').css('left', '0');
      }, 4000)
      // process bar
      $('.process').css('width', '37.5%')
    })
    $('.loved-one-name__back').on('click', function () {
      $('.question__loved-one-name').css('left', '100%');
      setTimeout( function () {
        $('.question__client-target').css('left', '0');
      }, 500)
    })

    // gender
    $('.gender-choice').on('click', function () {
      $('.question__client-gender').css('left', '-100%');
      if ( $('input[name="client-target-hidden"][value="myself"]').is(':checked') ) {
        setTimeout( function () {
          $('.question__client-feeling').css('left', '0');
        }, 500)
      }
      if ( $('input[name="client-target-hidden"][value="a loved one"]').is(':checked') ) {
        setTimeout( function () {
          $('.question__loved-one-feeling').css('left', '0');
        }, 500)
      }
      // process bar
      $('.process').css('width', '50%')
    })
    $('.client-gender__back').on('click', function () {
      $('.question__client-gender').css('left', '100%');
      if ( $('input[name="client-target-hidden"][value="myself"]').is(':checked') ) {
        setTimeout( function () {
          $('.question__client-target').css('left', '0');
        }, 500)
      }
      if ( $('input[name="client-target-hidden"][value="a loved one"]').is(':checked') ) {
        setTimeout( function () {
          $('.question__loved-one-name').css('left', '0');
        }, 500)
      }
      // process bar
      $('.process').css('width', '25%')
    })

    // feeling
    // client feeling
    $('.feeling-choice').on('click', function () {
      let fullName, firstName, spacePosition;
      fullName = $('#client-name-hidden').val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.question__client-feeling').css('left', '-100%');
      // loading screen
      if ( $(this).data('value') === 'hesitant') {
        $('.loading-screen > div').html(`We understand your hesitation, ${fullName}. Rest assured, you will have all the necessary resources avaiable you on this journey.`);
      }
      if ( $(this).data('value') === 'moderate') {
        $('.loading-screen > div').html(`No worries, we have every resource avaiable and will answer all the questions you might have`);
      }
      if ( $(this).data('value') === 'i am ready for change') {
        $('.loading-screen > div').html(`Amazing! Just a few more questions and we'll get you started on this new chapter of life!`);
      }
      setTimeout ( function () {
        $('.loading-screen').css({
          'opacity': '1',
          'background-image': "unset"
        });
      }, 1000)
      setTimeout ( function () {
        $('.loading-screen').css({
          'opacity': '0',
        });
      }, 3000)
      setTimeout ( function () {
        $('.question__client-substances-used').css('left', '0');
      }, 4000)
      // process bar
      $('.process').css('width', '62.5%')
    })
    $('.client-feeling__back').on('click', function () {
      $('.question__client-feeling').css('left', '100%');
      // setTimeout( function(){
        $('.question__client-gender').css('left', '0');
      // }, 500)
      // process bar
      $('.process').css('width', '37.5%')
    })

    // loved one's feeling
    $('.loved-one-feeling-choice').on('click', function () {
      let fullName, firstName, spacePosition;
      fullName = $('#loved-one-name-hidden').val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.question__loved-one-feeling').css('left', '-100%');
      // loading screen
      if ( $(this).data('value') === 'hesitant') {
        $('.loading-screen > div').html(`Hesitation is totally normal. We're here to help ${fullName} discover the different possibilities that change can bring.`);
      }
      if ( $(this).data('value') === 'moderate') {
        $('.loading-screen > div').html(`No worries, we have every resource avaiable so that ${fullName} can make an informed decision.`);
      }
      if ( $(this).data('value') === 'it is time for change') {
        $('.loading-screen > div').html(`That's great! Just a few more questions and we can get ${fullName} started on this new chapter.`);
      }
      if ( $(this).data('value') === 'dont know') {
        $('.loading-screen > div').html(`No worries, just a few more questions and we can talk about starting ${fullName} on the journey to recovery!`);
      }
      setTimeout ( function () {
        $('.loading-screen').css({
          'opacity': '1',
          'background-image': "unset"
        });
      }, 1000)
      setTimeout ( function () {
        $('.loading-screen').css({
          'opacity': '0',
        });
      }, 3000)
      setTimeout ( function () {
        $('.question__loved-one-substances-used').css('left', '0');
      }, 4000)
      // process bar
      $('.process').css('width', '62.5%')
    })
    $('.loved-one-feeling__back').on('click', function () {
      $('.question__loved-one-feeling').css('left', '100%');
      // setTimeout( function(){
        $('.question__client-gender').css('left', '0');
      // }, 500)
      // process bar
      $('.process').css('width', '37.5%')
    })
  
    // substances used
      // yourself
    $('.substance-choice').on('click', function(){
      $('.substances-used__skip').css('display', 'none');
      $('.substances-used__next').css('display', 'block');
      $('.loved-one-substances-used__skip').css('display', 'none');
      $('.loved-one-substances-used__next').css('display', 'block');
    })
    $('.other-substances-used').on('change', function(){
      $('.substances-used__skip').css('display', 'none');
      $('.substances-used__next').css('display', 'block');
      $('.loved-one-substances-used__skip').css('display', 'none');
      $('.loved-one-substances-used__next').css('display', 'block');
    })

    $('.substances-used__next').on('click', function(){
      $('.question__client-substances-used').css('left', '-100%');
      setTimeout( function(){
        $('.question__drug-effects-life').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '75%')
    })

    $('.substances-used__skip').on('click', function(){
      $('.question__client-substances-used').css('left', '-100%');
      setTimeout( function(){
        $('.question__drug-effects-life').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '75%')
    })

    $('.substances-used__back').on('click', function(){
      $('.question__client-substances-used').css('left', '100%');
      setTimeout( function(){
        $('.question__client-feeling').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '50%')
    })

      // loved one
    $('.loved-one-substances-used__back').on('click', function(){
      $('.question__loved-one-substances-used').css('left', '100%');
      // setTimeout( function(){
        $('.question__loved-one-feeling').css('left', '0');
      // }, 500)
      // process bar
      $('.process').css('width', '50%')
    })

    $('.loved-one-substances-used__next').on('click', function(){
      $('.question__loved-one-substances-used').css('left', '-100%');
      setTimeout( function(){
        $('.question__drug-effects-life').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '75%')
    })

    $('.loved-one-substances-used__skip').on('click', function(){
      $('.question__loved-one-substances-used').css('left', '-100%');
      setTimeout( function(){
        $('.question__drug-effects-life').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '75%')
    })

    // effects in life
    $('.effect-choice').on('click', function () {
      $('.effects__skip').hide();
      $('.effects__next').show();
    })

    $('.effects__next').on('click', function () {
      $('.question__drug-effects-life').css('left', '-100%');
      setTimeout( () => {
        $('.form__personal-info').css('left', '0');
      }, 500)
      // process bar
      $('.process').css('width', '87.5%')
    })

    $('.effects__skip').on('click', function () {
      $('.question__drug-effects-life').css('left', '-100%');

      setTimeout( () => {
        $('.form__personal-info').css('left', '0');
      }, 500)
      
      // process bar
      $('.process').css('width', '87.5%')
    })

    $('.effects__back').on('click', function () {
      $('.question__drug-effects-life').css('left', '100%');
      if ( $('input[name="client-target-hidden"][value="myself"]').is(':checked')) {
        setTimeout( () => {
          $('.question__client-substances-used').css('left', '0');
        }, 500)
      }
      if ( $('input[name="client-target-hidden"][value="a loved one"]').is(':checked')) {
        setTimeout( () => {
          $('.question__loved-one-substances-used').css('left', '0');
        }, 500)
      }
      // process bar
      $('.process').css('width', '62.5%')
    })

    // personal info
    if ( $(window).width() < 768 ) {
      $('.form__dob').on('touchend', function (e) {
        e.preventDefault();
        $(this).attr('type', 'date');
        if ($(this).attr('type') === 'date'){
          $(this).focus();
        }
      })
    }
    if ( $(window).width() > 768 ) {
      $('.form__dob').on('focus', function (e) {
        $(this).attr('type', 'date');
        // if ($(this).attr('type') === 'date'){
        //   $(this).focus();
        // }
      })
    }
    $('.personal-info__back').on('click', function () {
      $('.form__personal-info').css('left', '100%');
      setTimeout( () => {
        $('.question__drug-effects-life').css('left', 0);
      }, 500)
      // process bar
      $('.process').css('width', '75%')
    })
    $('#form__submit').on('click', function () {
      // process bar
      $('.process').css('width', '100%')
    })
    $('.insurance-check-box').on('click', function () {
      if ( $('input[name="insurance-hidden"][value="yes"]').is(':checked') ) {
        $('.insurance-company-wrapper').css('display', 'block')
      }
      if ( $('input[name="insurance-hidden"][value="no"]').is(':checked') ) {
        $('.insurance-company-wrapper').css('display', 'none')
      }
    })

    // x button
    $('.form__x-button').on('click', function () {
      $('#soberlife-form-wrapper').css('left', '100%');
    })
  })();

  (function submit () {
    // check required fields
    $('#form__submit').on('click', function () {
      if ( !$('.form__phone-number--hidden').val() ) {
        $('.form__phone-number').css('border', '5px solid #F31431')
      }
      if ( !$('.form__city--hidden').val() ) {
        $('.form__city').css('border', '5px solid #F31431')
      }
      if ( !$('.form__email--hidden').val() ) {
        $('.form__email').css('border', '5px solid #F31431')
      }
      if ( !$('.form__state--hidden').val() ) {
        $('.form__state').css('border', '5px solid #F31431')
      }
      if ( !$('.form__dob--hidden').val() ) {
        $('.form__dob').css('border', '5px solid #F31431')
      }
      if ( !$('input[name="insurance-hidden"][value="yes"]').is(':checked') && !$('input[name="insurance-hidden"][value="no"]').is(':checked') ) {
        $('.check-box').css('border', '3px solid #F31431')
      }
      if ( $('.form__phone-number--hidden').val() && $('.form__city--hidden').val()&& $('.form__email--hidden').val() && $('.form__state--hidden').val() && $('.form__dob--hidden').val() && $('input[name="insurance-hidden"][value="yes"]').is(':checked') || $('input[name="insurance-hidden"][value="no"]').is(':checked') ) {
        $('#form__submit--hidden').click();
      }
    })
  })();

})