jQuery(document).ready(function($){
  
  (function loadingGreating1 () {
    let fullName, firstName, spacePosition;
    $('#client-name').on('change keyup paste', function () {
      fullName = $(this).val();
      spacePosition = fullName.indexOf(' ');
      firstName = fullName.slice(0, spacePosition);
      $('.loading-screen > div').html(`Hi ${firstName}, tell us more about your situation.`)
    })
  })();

  (function loadingScreen3 () {

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
    $('input[name="insurance"]').on('click', function () {
      let answer = $(this).val();
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
  
})