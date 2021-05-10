import React from 'react'
import { Tweet } from '../components/Tweet'

export default { title: "Single Tweet" }

export const emptyTweet = () => <Tweet />
export const populatedTweet = () => {
  const singleTweet = {
    name: "Descartes",
    handle: '@pig',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: "tweet text",
    date: "10 days ago"
  }
  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} />

  return <Tweet{...singleTweet} />
}
