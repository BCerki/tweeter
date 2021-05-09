import React from 'react'
import './TweetForm.css'




export const TweetForm = () => {
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
