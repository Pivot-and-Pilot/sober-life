<section id="soberlife-form-wrapper">
  <div class="form__relative-layer">
    <?php
      if ($_POST) {
        $clientName = $_POST["client-name-hidden"];
        $lovedOneName = $_POST["loved-one-name-hidden"];
        $clientTarget = $_POST["client-target-hidden"];
        $clientGender = $_POST["client-gender-hidden"];
        $clientFeeling = $_POST["client-feeling-hidden"];
        $lovedOneFeeling = $_POST["loved-one-feeling-hidden"];
        $substancesUsed = array();
        for ( $count = 1; $count < 10; $count++) {
          if ($_POST['substances-used-' . $count]) {
            array_push($substancesUsed, $_POST['substances-used-' . $count]);
          }
        }
        $otherSubstances = $_POST["other-substances-hidden"];

        $effects = array();
        for ( $c = 1; $c < 3; $c++) {
          if ($_POST['effect-' . $c]) {
            array_push($effects, $_POST['effect-' . $c]);
          }
        }
        $phoneNumber = $_POST["phone-number-hidden"];
        $city = $_POST["city-hidden"];
        $email = $_POST["email-hidden"];
        $state = $_POST["state-hidden"];
        $dob = $_POST["dob-hidden"];
        $insurance = $_POST["insurance-hidden"];
        $insuranceCompany = $_POST["insurance-company-hidden"];
        $comments = $_POST["comments-hidden"];

        $messageBody = "Client name: $clientName \n";
        if ( $lovedOneName ) {
          $messageBody .= "Loved one's name: $lovedOneName \n";
        }
        $messageBody .= "Client target: $clientTarget \n";
        $messageBody .= "Client gender: $clientGender \n";
        if ( $clientFeeling ) {
          $messageBody .= "Client feeling: $clientFeeling \n";
        }
        if ( $lovedOneFeeling ) {
          $messageBody .= "Loved one's feeling: $lovedOneFeeling \n";
        }
        
        foreach ( $substancesUsed as $substance ) {
          $messageBody .= "Substance used: $substance \n";
        }
        $messageBody .= "Other substances: $otherSubstances \n";

        foreach ( $effects as $effect ) {
          $messageBody .= "Effect in life: $effect \n";
        }

        $messageBody .= "Phone number: $phoneNumber \n";
        $messageBody .= "City: $city \n";
        $messageBody .= "Email: $email \n";
        $messageBody .= "Date of birth: $dob \n";
        $messageBody .= "Have insurance?: $insurance \n";
        $messageBody .= "Insurance company: $insuranceCompany \n";
        $messageBody .= "Comments: $comments \n";

        $to = 'tuan@pivotandpilot.com';
        $message = $messageBody;
        $subject = 'Message from SoberLife';
        $header = '';

        wp_mail($to, $subject, $message, $headers);

        if ( wp_mail($to, $subject, $message, $headers) ) {
          echo '<section class="thank-you">
                  <p>Thank you for submittin your form, one of us will give you a call soon!</p>
                  <a href="">Return Home</a>
                </section>';
        } else {
          echo '<div class="thank-you"> Request sent unsuccessfully </div>';
        }
      }
    ?>
    <section class="form__contact-info">
      <div class="email">
        <a href="">info@soberlifesd.com</a>
      </div>
      <div class="phone-number">
        <a href="">604.123.4567</a>  
      </div>
    </section>

    <section class="form__progress-bar">
      <div class="process"></div>
    </section>

    <div class="form__x-button">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/x--black.svg" alt="">
    </div>

    <section class="loading-screen">
      <div></div>
    </section>

    <section class="question__your-name">
      <div class="content-wrapper">
        <h1>What is your name?</h1>
        <div class="inputWrapper">
          <input id="client-name" type="text" placeholder="First & Last Name">
          <div class="your-name__next-button">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--black.svg" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="question__client-target">
      <div class="content-wrapper">
        <h1>Who are you looking to help?</h1>
        <div class="target-wrapper">
          <div name="client-target" data-value="myself">Myself</div>
          <div name="client-target" data-value="a loved one">A Loved One</div>
        </div> 
      </div>
      <div class="client-target__back">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--black.svg" alt="">  
        Back
      </div>
    </section>

    <section class="question__loved-one-name">
      <div class="content-wrapper">
        <h1>What is your loved ones name?</h1>
        <div class="inputWrapper">
          <input id="loved-one-name" type="text" placeholder="First & Last Name">
          <div class="loved-one-name__next-button">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--black.svg" alt="">
          </div>
        </div>
      </div>
      <div class="loved-one-name__back">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/arrow--black.svg" alt="">  
        Back
      </div>
    </section>

    <section class="question__client-gender">
      <div class="content-wrapper">
        <h1></h1>
        <div name="client-gender" data-value="male">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/mustache-face--black.svg" alt="">
          Male
        </div>
        <div name="client-gender" data-value="female">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/kissing-face--black.svg" alt="">
          Female
        </div>
        <div name="client-gender" data-value="other">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/src/unicorn--black.svg" alt="">
          Other
        </div>
      </div>
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
        <h3>Physical Health</h3>
        <p>Weak body, organ failure, unhealthy eating habits, etc.</p>
      </div>
      <div name="effect-life" data-value="mental health">
        <h3>Mental Health</h3>
        <p>Feeling hopeless and depressed, dealing with anxiety, etc.</p>
      </div>
    </section>

    <section class="submit">
      <div>
        <input name="personal info" class="form__phone-number" type="tel" placeHolder="Phone Number">
        <input name="personal info" class="form__city" type="text" placeHolder="City">
      </div>

      <div>
        <input name="personal-info" class="form__email" type="email" placeHolder="Email">
        <input name="personal-info" class="form__state" type="text" placeHolder="State">
        <input name="personal-info" class="form__dob" type="date" placeHolder="Date of Birth">
      </div>

      <div>
        <p>Do you have insurance?</p>
        <div>
          <label for="yes">Yes</label>
          <input type="radio" id="yes" name="insurance" value="yes">
          <label for="no">No</label>
          <input type="radio" id="no" name="insurance" value="no">
        </div>
      </div>

      <div>
        <p>If unsure please wirte 'unsure'</p>
        <input type="text" name="insurance-company" placeHolder="Insurance Company">
      </div>

      <div>
        <textarea name="comments" id="" cols="30" rows="10" placeHolder="Comments"></textarea>
        <div id="form__submit">Submit</div>
      </div>

      <div><- Back</div>
    </section>
  </div>












  <form action="" id="sober-life-hidden-form" method="POST" enctype="multipart/form-data">
    <!-- client's name -->
    <div>name</div>
    <input id="client-name-hidden" name="client-name-hidden" type="text" placeHolder="your name"> 
    <input id="loved-one-name-hidden" name="loved-one-name-hidden" type="text" placeHolder="loved one's name"> 

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
    <input type="radio" data-name="substances-used-hidden" name="substances-used-1" value="alcohol">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-2" value="cocaine">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-3" value="meth">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-4" value="weed">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-5" value="heroine">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-6" value="crack">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-7" value="ecstasy">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-8" value="ketamine">
    <input type="radio" data-name="substances-used-hidden" name="substances-used-9" value="unsure">
    <input class="other-substances-used-hidden" name="other-substances-hidden" type="text" data-name="substances-used-hidden" placeHolder="other substances">

    <!-- how drug effect life -->
    <div>how drug effect life</div>
    <input type="radio" data-name="effect-life-hidden" name="effect-1" value="career and personal life">
    <input type="radio" data-name="effect-life-hidden" name="effect-2" value="physical health">
    <input type="radio" data-name="effect-life-hidden" name="effect-3" value="mental health">

    <!-- personal info -->
    <div>personal info</div>
    <input name="phone-number-hidden" class="form__phone-number--hidden" type="tel" placeHolder="Phone Number">
    <input name="city-hidden" class="form__city--hidden" type="text" placeHolder="City">
    <input name="email-hidden" class="form__email--hidden" type="email" placeHolder="Email">
    <input name="state-hidden" class="form__state--hidden" type="text" placeHolder="State">
    <input name="dob-hidden" class="form__dob--hidden" type="date" placeHolder="Date of Birth">
    <div>insurance</div>
    <input type="radio" name="insurance-hidden" value="yes">
    <input type="radio" name="insurance-hidden" value="no">
    <input type="text" name="insurance-company-hidden" placeHolder="insurance company">
    <textarea name="comments-hidden" id="" cols="30" rows="10" placeHolder="comments"></textarea>
    <button id="form__submit--hidden">submit</button>
  </form>
</section>
