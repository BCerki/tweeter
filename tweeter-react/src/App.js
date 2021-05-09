import React from 'react'
import './App.css';
import { Navigation } from './Navigation'

const Profile = () => {
  return (
    <header class="user">
      <div>
        <img src="/images/profile-hex.png" />
      </div>
      <br />
      <div>
        <h2>Cynthia Norris</h2>
      </div>
    </header>
  )
}

const TweetForm = () => {
  return (
    <section class="new-tweet">

      <div class="error"></div>

      <form method="POST" action="/tweets">

        <textarea name="text" id="tweet-text" placeholder="What are you humming about?"></textarea>

        <div class="submission">
          <button class="post-new-tweet" type="submit">Tweet</button>
          <output name="counter" class="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}

const Tweet = () => {
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <Tweet />
    </div>
  );
}

export default App;
