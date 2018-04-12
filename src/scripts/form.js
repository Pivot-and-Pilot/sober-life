jQuery(document).ready(function($){
  
  (function genderQuestion () {
    let fullName, firstName, spacePosition;
    $('#loved-one-name').on('change keyup paste', function () {
      fullName = $(this).val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.question__client-gender h1').html(`What does ${firstName} identify as?`);
    })
    $('div.client-target').on('click', function () {
      if ( $(this).data('value') === 'myself' ) {
        $('.question__client-gender h1').html('What do you identify as?')
      }
    })
  })();

  (function customizedText () {
    $('div[name="client-target"]').on('click', function () {
      if ( $('input[name="client-target-hidden"][value="myself"]').is(':checked') ) {
        $('.question__drug-effects-life h1').html('How is drug usage effecting your life?')
        $('.insurance-yes-no-wrapper > p').html('Do you have insurance?');
      }
      if ( $('input[name="client-target-hidden"][value="a loved one"]').is(':checked') ) {
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
    })
    $('.form__city').on('change keyup paste', function () {
      $('.form__city--hidden').val($(this).val());
    })
    $('.form__email').on('change keyup paste', function () {
      $('.form__email--hidden').val($(this).val());
    })
    $('.form__state').on('change keyup paste', function () {
      $('.form__state--hidden').val($(this).val());
    })
    $('.form__dob').on('change keyup paste', function () {
      $('.form__dob--hidden').val($(this).val());
    })
    $('.insurance-check-box').on('click', function (e) {
      $('.insurance-check-box').each( function () {
        $($(this)[0].children[1]).removeClass('checked-box');
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

  (function submit () {
    $('#form__submit').on('click', function () {
      $('#form__submit--hidden').click();
    })
  })();

  function loadingGreating1 () {
    let fullName, firstName, spacePosition;
    fullName = $('#client-name-hidden').val();
    spacePosition = fullName.indexOf(' ');
    firstName = fullName.slice(0, spacePosition);
    $('.loading-screen > div').html(`Hi ${firstName}, tell us more about your situation.`);
  }

  (function navigation () {
    // client name
    $('.your-name__next-button').on('click', function () {
      loadingGreating1();
      $('.loading-screen').css('opacity', '1');
      $('.question__your-name').css('left', '100%');
      setTimeout( function () {
        $('.loading-screen').css('opacity', '0');
      }, 3000 )
      setTimeout( function () {
        $('.question__client-target').css('left', '0');
      }, 4000 )
      // process bar
      $('.process').css('width', '12.5%')
    })

    // client target
    $('div.client-target').on('click', function () {
      if ($(this).data('value') === 'myself') {
        $('.loading-screen > div').html("That's awesome! You're already taking a step in the right direction.");
        $('.loading-screen').css('opacity', '1');
        $('.question__client-target').css('left', '100%');
        setTimeout( function () {
          $('.loading-screen').css('opacity', '0');
        }, 3000);
        setTimeout( function () {
          $('.question__client-gender').css('left', '0');
        }, 4000 )
        // process bar
        $('.process').css('width', '25%')
      }
      if ($(this).data('value') === 'a loved one') {
        $('.question__client-target').css('left', '100%');
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
      },1000)
      // process bar
      $('.process').css('width', '0')
    })

    // loved one's name
    $('.loved-one-name__next-button').on('click', function () {
      $('.question__loved-one-name').css('left', '100%');
      setTimeout( function () {
        $('.question__client-gender').css('left', '0');
      }, 1000)
      // process bar
      $('.process').css('width', '25%')
    })
    $('.loved-one-name__back').on('click', function () {
      $('.question__loved-one-name').css('left', '100%');
      setTimeout( function () {
        $('.question__client-target').css('left', '0');
      }, 1000)
    })



  })();

  
})