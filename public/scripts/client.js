/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  //   const tweetData =  {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png",
  //         "handle": "@SirIsaac"
  //       },
  //     "content": {
  //         "text": "If I have seen further it is by standing on the shoulders of giants"
  //       },
  //     "created_at": 1461116232227
  //  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


  createTweetElement = (tweetData) => {
    //$ means it's a jquery-constructed object
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
    //could do with making children and then adding them to article too

  };
  // const $tweet = createTweetElement(tweetData);

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
      .then(function (data) {
        console.log('this data sent:', serializedFormData)
      })
      .catch(function (error) {
        console.log('this was the error:', error);
      })
  });




  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  renderTweets(data);

  //function to display tweet time// BRI-NOT SUPPOSED TO BE IN HERE? MESSED UP MY AMEND WHEN THIS WAS AT THE TOP OF THIS DOC. PROBLEM-not working
  timeago.render(document.querySelectorAll(".time-ago-formatted"));
  // timeago.format($(".time-ago-formatted").html());
  // $("time-ago-formatted").timeago();


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