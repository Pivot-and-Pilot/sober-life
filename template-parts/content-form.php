<section id="soberlife-form-wrapper">
  <div class="form__x-button">X</div>
  <form action="">

    <section class="loading-screen">
      <div></div>
    </section>

    <section class="question__your-name">
      <h1>What is your name?</h1>
      <div class="inputWrapper">
        <input id="client-name" type="text" placeholder="First & Last Name">
        <div class="nextButton">-></div>
      </div>
    </section>

    <section class="question__client-target">
      <h1>Who are you looking to help?</h1>
      <div name="client-target" data-value="myself">Myself</div>
      <div name="client-target" data-value="a loved one">A Loved One</div>
    </section>

    <section class="question__loved-one-name">
      <h1>What is your loved ones name?</h1>
      <div class="inputWrapper">
        <input id="loved-one-name" type="text" placeholder="First & Last Name">
        <div class="nextButton">-></div>
      </div>
    </section>

    <section class="question__client-gender">
      <h1></h1>
      <div name="client-gender" data-value="male">Male</div>
      <div name="client-gender" data-value="female">Female</div>
      <div name="client-gender" data-value="other">Other</div>
    </section>

    <section class="question__client-feeling">
      <h1>How do you feel about recovery?</h1>
      <div name="client-feeling" data-value="hesitant">Hesitant</div>
      <div name="client-feeling" data-value="moderate">Moderate</div>
      <div name="client-feeling" data-value="i am ready for change">I am ready for change</div>
    </section>
    <section class="question__loved-one-feeling">
      <h1>How do they feel about recovery?</h1>
      <div name="loved-one-feeling" data-value="hesitant">Hesitant</div>
      <div name="loved-one-feeling" data-value="moderate">Moderate</div>
      <div name="loved-one-feeling" data-value="it is time for change">It is time for change</div>
      <div name="loved-one-feeling" data-value="dont know">Don't know</div>
    </section>

    <section class="question__client-substances-used">
      <h1>Substances used</h1>
      <div name="substances-used" data-value="alcohol">Alcohol</div>
      <div name="substances-used" data-value="cocaine">Cocaine</div>
      <div name="substances-used" data-value="meth">Meth</div>
      <div name="substances-used" data-value="weed">Weed</div>
      <div name="substances-used" data-value="heroine">Heroine</div>
      <div name="substances-used" data-value="crack">Crack</div>
      <div name="substances-used" data-value="ecstasy">Ecstasy</div>
      <div name="substances-used" data-value="ketamine">Ketamine</div>
      <input class="other-substances-used" type="text" placeHolder="Other" name="substances-used">
    </section>
    <section class="question__loved-one-substances-used">
      <h1>Substances used</h1>
      <div name="substances-used" data-value="alcohol">Alcohol</div>
      <div name="substances-used" data-value="cocaine">Cocaine</div>
      <div name="substances-used" data-value="meth">Meth</div>
      <div name="substances-used" data-value="weed">Weed</div>
      <div name="substances-used" data-value="heroine">Heroine</div>
      <div name="substances-used" data-value="crack">Crack</div>
      <div name="substances-used" data-value="ecstasy">Ecstasy</div>
      <div name="substances-used" data-value="ketamine">Ketamine</div>
      <input class="other-substances-used" type="text" placeHolder="Other" name="substances-used">
      <div name="substances-used" data-value="unsure">Unsure</div>
    </section>

    <section class="question__drug-effects-life">
      <h1></h1>
      <div name="effect-life" data-value="career and personal life">
        <h3>Career & Personal Life</h3>
        <p>Lost your job, a special someone, your hame, etc.</p>
      </div>
      <div name="effect-life" data-value="physical health">
        <h3>Phusical Health</h3>
        <p>Weak body, organ failure, unhealthy eating habits, etc.</p>
      </div>
      <div name="effect-life" data-value="mental health">
        <h3>Mental Health</h3>
        <p>Feeling hopeless and depressed, dealing with anxiety, etc.</p>
      </div>
    </section>

    <section class="submit">
      <div>
        <input type="number" placeHolder="Phone Number">
        <input type="text" placeHolder="City">
      </div>

      <div>
        <input type="email" placeHolder="Email">
        <input type="text" placeHolder="State">
        <input type="date" placeHolder="Date of Birth">
      </div>

      <div>
        <p>Do you have insurance?</p>
        <div>
          <label for="yes">Yes</label>
          <input type="radio" id="yes">
          <label for="no">No</label>
          <input type="radio" id="no">
        </div>
      </div>

      <div>
        <p>If unsure please wirte 'unsure'</p>
        <input type="text" placeHolder="Insurance Company">
      </div>

      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </div>

      <div><- Back</div>
    </section>

    <section class="thank-you">
      <p>Thank you for submittin your form, one of us will give you a call soon!</p>
      <button>Return Home</button>
    </section>

  </form>











  <form action="" id="sober-life-hidden-form">
    <!-- client's name -->
    <div>name</div>
    <input id="client-name-hidden" name="client-name-hidden" type="text"> 
    <input id="loved-one-name-hidden" name="client-name-hidden" type="text"> 

    <!-- client target -->
    <div>client target</div>
    <input type="radio" name="client-target-hidden" value="myself">
    <input type="radio" name="client-target-hidden" value="a loved one">

    <!-- client gender -->
    <div>client gender</div>
    <input type="radio" name="client-gender-hidden" value="male">
    <input type="radio" name="client-gender-hidden" value="female">
    <input type="radio" name="client-gender-hidden" value="other">

    <!-- client feeling -->
    <div>client feeling</div>
    <input type="radio" name="client-feeling-hidden" value="hesitant">
    <input type="radio" name="client-feeling-hidden" value="moderate">
    <input type="radio" name="client-feeling-hidden" value="i am ready for change">
    <input type="radio" name="loved-one-feeling-hidden" value="hesitant">
    <input type="radio" name="loved-one-feeling-hidden" value="moderate">
    <input type="radio" name="loved-one-feeling-hidden" value="it is time for change">
    <input type="radio" name="loved-one-feeling-hidden" value="dont know">

    <!-- substances used -->
    <div>substances used</div>
    <input type="radio" data-name="substances-used-hidden" value="alcohol">
    <input type="radio" data-name="substances-used-hidden" value="cocaine">
    <input type="radio" data-name="substances-used-hidden" value="meth">
    <input type="radio" data-name="substances-used-hidden" value="weed">
    <input type="radio" data-name="substances-used-hidden" value="heroine">
    <input type="radio" data-name="substances-used-hidden" value="crack">
    <input type="radio" data-name="substances-used-hidden" value="ecstasy">
    <input type="radio" data-name="substances-used-hidden" value="ketamine">
    <input type="radio" data-name="substances-used-hidden" value="unsure">
    <input class="other-substances-used-hidden" type="text" data-name="substances-used-hidden">
  </form>
</section>
