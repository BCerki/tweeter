/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  const escape = function (userInput) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(userInput));
    return div.innerHTML;
  };

  createTweetElement = (tweetData) => {
    let timeAgo = timeago.format(tweetData.created_at);
    let $tweet = $(
      `<article class="tweet">
      <header>
        <div>
          <img class="avatar" src="${tweetData.user.avatars}">
        </div>
        <div>
           ${tweetData.user.name}</span>
        </div>
        <div class="handle">${tweetData.user.handle}</div>
      </header>
      <div class="tweet-content">${escape(tweetData.content.text)}</div>
      <footer>
        <div class="time-ago-formatted">${timeAgo}</div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </article>`);
    return $tweet;
  };

  const renderTweets = (tweets) => {
    const tweetsContainer = $("#tweet-container");
    for (const tweet of tweets) {
      let currentTweetObject = createTweetElement(tweet);
      console.log(currentTweetObject);
      tweetsContainer.append(currentTweetObject);
    }
  };

  //get code review, this is all a bit of a mystery
  $("form").submit(function (event) {
    event.preventDefault();
    const formData = $("textarea").val();

    if (formData === '') {
      $('div.error').empty().show().slideDown().append('Tweet cannot be blank');
      return;
    }
    if (formData.length > 140) {
      $('div.error').empty().append('Tweet cannot be longer than 140 characters').show().slideDown();
      return;
    }

    const serializedFormData = $("form").serialize();

    $.ajax('/tweets', {
      data: $(this).serialize(),
      method: 'POST'
    })
      //do i need data parameter?
      .then(function () {
        $('div.error').hide();
        $("textarea").val('');
        loadTweets()
      })
      .catch(function (error) {
        console.log('Error:', error);
      })
  });

  const loadTweets = function () {
    $.ajax('/tweets', {
      data: 'text',
      method: 'GET'
    })
      .then(function (formData) {
        renderTweets(formData)
      })
      .catch(function (error) {
        console.log('this was the error:', error);
      })
  };

  //they're out of order, does that fix come later?
  loadTweets()

  $('div.error').hide()

  //stretch slide down--why do i need a button?
  //assuming it's supposed to start hidden
  $("section.new-tweet").hide();
  //toggle between visible and not visible on each click
  $('div.write-a-new-tweet').click(function () {
    $("section.new-tweet").slideToggle("slow")
    //if the form is becoming visible, put the cursor in the textarea so the user can immediately type BRI-HOW TO TELL IF THIS IS ACTUALLY WORKING? IT LOOKS LIKE IT MIGHT GO THERE ON EVERY TOGGLE
    if ($("section.new-tweet").is(":visible")) {
      $("textarea").focus()
    };
  });



});