import React from 'react'
import { Tweet } from './Tweet'

export const Tweets = props => {
  const { tweetData } = props

  const tweets = tweetData ? tweetData.map((element, index) => {
    return <Tweet key={index} name={element.name} handle={element.handle} profile_image={element.profile_image} text={element.text} date={element.date} />
  }) : "There is no tweet here"
  //ternary not working properly


  return (<section className="tweets">
    {tweets}
  </section>)
}
