import React, { useState } from 'react'
import './TweetForm.css'




export const TweetForm = (props) => {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState('')
  const tweetRemainingLength = 140 - tweetText.length
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" }

  const submitTweet = event => {
    event.preventDefault()
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText('')
    }
  }

  return (
    <section className="new-tweet">

      <div className="error"></div>

      <form onSubmit={submitTweet} method="POST" action="/tweets">

        <textarea value={tweetText} name="text" onChange={event => setTweetText(event.target.value)} id="tweet-text" placeholder="What are you humming about?"></textarea>

        <div className="submission">
          <button className="post-new-tweet" type="submit">Tweet</button>
          <output style={spanStyle} name="counter" className="counter" for="tweet-text">{140 - tweetText.length}</output>
        </div>
      </form>
    </section >
  )
}
