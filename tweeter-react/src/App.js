import React, { useState } from 'react'
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { Tweet } from './components/Tweet'
import { TweetForm } from './components/TweetForm'

const initialTweetData = [
  {
    name: "Descartes",
    handle: '@pig',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: "tweet text",
    date: "10 days ago"

  },
  {
    name: "Tweet5",
    handle: '@pig2',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: "tweet text 2",
    date: "10 days ago"

  }
]

function App() {
  const [tweets, setTweetData] = useState(initialTweetData)
  const tweets = tweetsData.map((element, index) => {
    return <Tweet key={index} name={element.name} handle={element.handle} profile_image={element.profile_image} text={element.text} date={element.date} />

  })

  return (
    <div className="App">
      <Navigation />
      <div className="media-query">
        <Profile />
        <main className="container">
          <TweetForm />
          <section className="tweets">
            {tweets}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
