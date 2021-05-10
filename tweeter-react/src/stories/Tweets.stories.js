import React from 'react'
import { Tweets } from '../components/Tweets'
import { Tweet } from '../components/Tweet'

export default { title: "Tweet Container" }

export const emptyTweet = () => <Tweet />
export const populatedTweet = () => {
  const tweets = [
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
  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} />

  return <Tweets tweetData={tweets} />
}
