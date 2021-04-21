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
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


createTweetElement = function (tweetData) {
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
        <div class="time-ago-formatted">${tweetData.created_at}</div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </article>`);
    return $tweet;

};
// const $tweet = createTweetElement(tweetData);

const renderTweets = function (arrayOfTweetObjects) {
  for (const tweet of arrayOfTweetObjects) {
    let currentTweetObject = createTweetElement(tweet);
    // console.log(currentTweetObject);
    $("#tweet-container").append(currentTweetObject);

  }
};


// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
renderTweets(data);

//function to display tweet time// BRI-NOT SUPPOSED TO BE IN HERE? MESSED UP MY AMEND WHEN THIS WAS AT THE TOP OF THIS DOC
timeago.render(document.querySelectorAll(".time-ago-formatted"));
// timeago.format($(".time-ago-formatted").html());
// $("time-ago-formatted").timeago();


//stretch slide down
$('div.write-a-new-tweet').click(function () {
  $("section.new-tweet").slideToggle("slow")

});

});