<section id="soberlife-form-wrapper">
  <div class="form__x-button">X</div>
  <form action="">

    <section class="question-1">
      <div>What is your name?</div>
      <div class="inputWrapper">
        <input id="client-name" type="text" placeholder="First & Last Name">
        <div class="nextButton">-></div>
      </div>
    </section>

    <section class="loading-1">
      <div></div>
    </section>

    <section class="question-2">
      <div>Who are you looking to help?</div>
      <div name="client-target" data-value="myself">Myself</div>
      <div name="client-target" data-value="a loved one">A Loved One</div>
    </section>

    <section class="loading-2">
      <div>That's awesome! <br> You're already taking a <br> step in the right direction.</div>
    </section>

    <section class="question-3">
      <div>What do you identify as?</div>
      <div name="client-gender" data-value="male">Male</div>
      <div name="client-gender" data-value="female">Female</div>
      <div name="client-gender" data-value="other">Other</div>
    </section>

    <section class="question-4">
      <div>How do you feel about recovery?</div>
      <div name="client-feeling" data-value="hesitant">Hesitant</div>
      <div name="client-feeling" data-value="moderate">Moderate</div>
      <div name="client-feeling" data-value="i am ready for change">I am ready for change</div>
    </section>

    <section class="loading-3">
      <div>Amazing! Just a few more questions <br> and we'll get you started on <br> this new chapter of life!</div>
    </section>

    <section class="question-5">
      <div>Substances used</div>
      <div name="substances-used" data-value="alcohol">Alcohol</div>
      <div name="substances-used" data-value="cocaine">Cocaine</div>
      <div name="substances-used" data-value="meth">Meth</div>
      <div name="substances-used" data-value="weed">Weed</div>
      <div name="substances-used" data-value="heroine">Heroine</div>
      <div name="substances-used" data-value="crack">Crack</div>
      <div name="substances-used" data-value="ecstasy">Ecstasy</div>
      <div name="substances-used" data-value="ketamine">Ketamine</div>
      <input type="text" placeHolder="Other" name="substances-used">
    </section>
  </form>

  <form action="" id="sober-life-hidden-form">
    <!-- client's name -->
    <input id="client-name-hidden" name="client-name-hidden" type="text"> 

    <!-- client target -->
    <input type="radio" name="client-target-hidden" value="myself">
    <input type="radio" name="client-target-hidden" value="a loved one">

    <!-- client gender -->
    <input type="radio" name="client-gender-hidden" value="male">
    <input type="radio" name="client-gender-hidden" value="female">
    <input type="radio" name="client-gender-hidden" value="other">

    <!-- client gender -->
    <input type="radio" name="client-feeling-hidden" value="hesitant">
    <input type="radio" name="client-feeling-hidden" value="moderate">
    <input type="radio" name="client-feeling-hidden" value="i am ready for change">

    <!-- substances used -->
    <input type="radio" data-name="substances-used-hidden" value="alcohol">
    <input type="radio" data-name="substances-used-hidden" value="cocaine">
    <input type="radio" data-name="substances-used-hidden" value="meth">
    <input type="radio" data-name="substances-used-hidden" value="weed">
    <input type="radio" data-name="substances-used-hidden" value="heroine">
    <input type="radio" data-name="substances-used-hidden" value="crack">
    <input type="radio" data-name="substances-used-hidden" value="ecstasy">
    <input type="radio" data-name="substances-used-hidden" value="ketamine">
    <input type="text" data-name="substances-used-hidden">
  </form>
</section>
