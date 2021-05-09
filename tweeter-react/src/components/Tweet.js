import React from 'react'
import './Tweet.css'


export const Tweet = () => {
  return (
    <article class="tweet">
      <header>
        <div>
          <img class="avatar" src="https://i.imgur.com/nlhLi3I.png" />
        </div>
        <div>
          Descartes
    </div>
        <div class="handle">@rd</div>
      </header>
      <div class="tweet-content">Je pense , donc je suis</div>
      <footer>
        <div class="time-ago-formatted">1 day ago</div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>)
}
