import React from 'react'
import './Tweet.css'


export const Tweet = props => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <article className="tweet">
      <header>
        <div>
          <img className="avatar" src={profile_image} />
        </div>
        <div>
          {name}
        </div>
        <div className="handle">{handle}</div>
      </header>
      <div className="tweet-content">{text}</div>
      <footer>
        <div className="time-ago-formatted">{date}</div>
        <div className="icons">
          <i className="fas fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>)
}
