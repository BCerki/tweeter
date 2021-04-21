/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  createTweetElement = (tweetData) => {
  
    let date = timeago.format(tweetData.created_at);
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
      <div class="tweet-content">${tweetData.content.text}</div>
      <footer>
        <div class="time-ago-formatted">${date}</div>
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

  $("form").submit(function (event) {
    event.preventDefault()
    const serializedFormData = $("form").serialize();
    $.ajax('/tweets', {
      data: serializedFormData,
      method: 'POST'
    })
    //do i need data parameter?
      .then(function () {
        console.log('this data sent:', serializedFormData)
      })
      .catch(function (error) {
        console.log('this was the error:', error);
      })
  });

  const loadTweets = function () {
    $.ajax('/tweets', {
      data: 'text',
      method: 'GET'
    })
      .then(function(formData) {
        renderTweets(formData)
      })
      .catch(function (error) {
        console.log('this was the error:', error);
      })
  };
  loadTweets()




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