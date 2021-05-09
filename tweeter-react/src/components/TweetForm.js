import React from 'react'
import './TweetForm.css'




export const TweetForm = () => {
  return (
    <section className="new-tweet">

      <div className="error"></div>

      <form method="POST" action="/tweets">

        <textarea name="text" id="tweet-text" placeholder="What are you humming about?"></textarea>

        <div className="submission">
          <button className="post-new-tweet" type="submit">Tweet</button>
          <output name="counter" className="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}
