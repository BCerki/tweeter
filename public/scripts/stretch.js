$(document).ready(function() {

  ////Write new tweet button functionality

  //Initially display the page with the "Compose" section hidden (inferring this is what Compass wants)
  $("section.new-tweet").hide();
  //Toggle between "Compose" being visible and not visible on each click
  $('div.write-a-new-tweet').click(function() {
    $("section.new-tweet").slideToggle("slow");
    //If the form is becoming visible, put the cursor in the textarea so the user can immediately type
    if ($(this).is(":visible")) {
      $("textarea").focus();
    }
  });

  ////Scroll button functionality

  //Initially, scroll button is hidden
  $('button.back-to-top').hide();

  //When user scrolls a reasonable amount (vs just accidentally nudging their mouse), show the back-to-top button. If they're already near the top, hide the button
  $(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
      $('button.back-to-top').show();
    } else {
      $('button.back-to-top').hide();
    }
  });

  //When the user clicks the back-to-top button:
  $('button.back-to-top').click(function() {
    // Bring them back to the top of the page and open the "Compose" section
    $(window).scrollTop(0);
    // Open the "Compose" section
    $("section.new-tweet").slideDown("slow");
    if ($(this).is(":visible")) {
      $("textarea").focus();
    }
    //Hide the "Write new tweet" "button"
    $('div.write-a-new-tweet').hide();
  });

});