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
    name: "Tweet2",
    handle: '@pig2',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: "tweet text 2",
    date: "10 days ago"

  }
]

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)
  const tweets = tweetData.map((element, index) => {
    return <Tweet key={index} name={element.name} handle={element.handle} profile_image={element.profile_image} text={element.text} date={element.date} />

  })

  const addNewTweet = text => {
    const newTweet = {
      name: "AddNewTweet",
      handle: '@pig2',
      profile_image: 'https://i.imgur.com/nlhLi3I.png',
      text: text,
      date: "10 days ago"
    }

    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App">
      <Navigation />
      <div className="media-query">
        <Profile />
        <main className="container">
          <TweetForm addNewTweet={addNewTweet} />
          <section className="tweets">
            {tweets}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
