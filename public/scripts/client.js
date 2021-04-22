/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  //Function to escape user-entered text
  const escape = function (userInput) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(userInput));
    return div.innerHTML;
  };

  createTweetElement = (tweetData) => {
    let timeAgo = timeago.format(tweetData.created_at);
    //Create html of a tweet, pulling in values from the tweetData object appropriately
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

  const renderTweets = (tweetData) => {
    // Tweets go into tweetData in the order they were created, so create a variable that holds them in reverse order so later they can be displayed in reverse chronological order
    const orderedTweetData = tweetData.reverse();

    for (const tweet of orderedTweetData) {
      //Loop through each individual tweet object in the database and build html for it
      let currentTweet = createTweetElement(tweet);
      //Add each tweet to the DOM
      $("#tweet-container").append(currentTweet);
    }


  };

  //Initially hide error messages (errors handle in next function)
  $('div.error').hide()


  //PROBLEM get code review, arguments into promises??
  $("form").submit(function (event) {
    //Turn off submit's default behavior
    event.preventDefault();
    //Create a convenience variable to hold the entered tweet's text
    const formData = $("textarea").val();

    //If the user tries to submit the tweet and the form is empty, show the error-containing div by sliding it down, and append an error message to the div
    if (formData === '') {
      $('div.error').slideDown().append('Tweet cannot be blank');
      return;
    }

    //If the user tries to submit the tweet and it's too long, show the error-containing div by sliding it down, and append an error message to the div
    if (formData.length > 140) {
      $('div.error').append('Tweet cannot be longer than 140 characters').show().slideDown();
      return;
    }

    $.ajax('/tweets', {
      //Serialize the entered tweet and add it to the config object so it can go into the database
      data: $(this).serialize(),
      method: 'POST'
    })
      .then(function () {
        //If post is successful, empty (in case there's a new error later) and hide the error div
        $('div.error').empty().hide();
        //Clear the form
        $("textarea").val('');
        //Reset the counter
        $("output.counter").html('140');
        //Refetch tweets so the just-submitted tweet is visible
        loadTweets()
      })
      .catch(function (error) {
        //If post is unsuccessful, log the error message
        console.log('Error:', error);
      })
  });

  const loadTweets = function () {
    //Make get request using ajax
    $.ajax('/tweets', {
      data: 'text',
      method: 'GET'
    })
    //where did this argument come from?
      .then(function (response) {
        //If get is successful, run the renderTweets function to add the just-submitted tweet to the page
        renderTweets(response)
      })
      .catch(function (error) {
        //If get is unsuccessful, log the error
        console.log('Error:', error);
      })
  };

  //Display all the existing tweets in the database when the page loads
  loadTweets()

});